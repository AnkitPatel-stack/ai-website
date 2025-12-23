import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Tabs,
  Tab,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  CircularProgress,
  Chip,
  Divider,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Mail as MailIcon,
  Chat as ChatIcon,
  Settings as SettingsIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Refresh as RefreshIcon,
  CloudUpload as CloudUploadIcon,
} from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { useAuth } from '../services/AuthContext';
import { adminApi, contentApi, contactApi } from '../services/api';

// Dashboard Statistics Component
const DashboardStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data = await adminApi.getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error('Failed to load dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
        <CircularProgress />
      </Box>
    );
  }

  const statCards = [
    {
      title: 'Total Users',
      value: stats?.statistics.users.total || 0,
      icon: <PeopleIcon />,
      color: '#00ff88',
    },
    {
      title: 'Active Contacts',
      value: stats?.statistics.contacts.total || 0,
      icon: <MailIcon />,
      color: '#ff4081',
    },
    {
      title: 'Chat Sessions',
      value: stats?.statistics.chatSessions || 0,
      icon: <ChatIcon />,
      color: '#0088ff',
    },
    {
      title: 'Content Updates',
      value: stats?.statistics.contentUpdates || 0,
      icon: <SettingsIcon />,
      color: '#ffaa00',
    },
  ];

  return (
    <Grid container spacing={3}>
      {statCards.map((stat) => (
        <Grid item xs={12} sm={6} md={3} key={stat.title}>
          <Card
            sx={{
              bgcolor: '#121218',
              border: '1px solid',
              borderColor: 'divider',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(0, 255, 136, 0.1)',
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="h3" sx={{ color: stat.color, fontWeight: 700 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: `${stat.color}20`,
                    borderRadius: '50%',
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={{ color: stat.color }}>{stat.icon}</Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

// Content Management Component
const ContentManagement = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingContent, setEditingContent] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newContent, setNewContent] = useState({
    page: 'home',
    section: 'hero',
    type: 'text',
    key: '',
    value: '',
    order: 0,
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const data = await contentApi.getAllContent();
      setContent(data);
    } catch (error) {
      console.error('Failed to load content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditingContent(item);
    setNewContent({
      page: item.page,
      section: item.section,
      type: item.type,
      key: item.key,
      value: item.value,
      order: item.order,
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    try {
      if (editingContent) {
        await contentApi.updateContentItem(editingContent.key, {
          value: newContent.value,
          order: newContent.order,
        });
      } else {
        await contentApi.createContentItem(newContent);
      }
      await loadContent();
      setDialogOpen(false);
      setEditingContent(null);
      setNewContent({
        page: 'home',
        section: 'hero',
        type: 'text',
        key: '',
        value: '',
        order: 0,
      });
    } catch (error) {
      console.error('Failed to save content:', error);
    }
  };

  const handleDelete = async (key) => {
    if (window.confirm('Are you sure you want to delete this content item?')) {
      try {
        await contentApi.deleteContentItem(key);
        await loadContent();
      } catch (error) {
        console.error('Failed to delete content:', error);
      }
    }
  };

  const columns = [
    { field: 'key', headerName: 'Key', width: 200 },
    { field: 'page', headerName: 'Page', width: 100 },
    { field: 'section', headerName: 'Section', width: 150 },
    { field: 'type', headerName: 'Type', width: 100 },
    {
      field: 'value',
      headerName: 'Value',
      width: 300,
      renderCell: (params) => (
        <Typography variant="body2" noWrap>
          {typeof params.value === 'string' ? params.value : JSON.stringify(params.value)}
        </Typography>
      ),
    },
    {
      field: 'isActive',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => (
        <Chip
          label={params.value ? 'Active' : 'Inactive'}
          color={params.value ? 'success' : 'error'}
          size="small"
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Box>
          <IconButton size="small" onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton size="small" onClick={() => handleDelete(params.row.key)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Content Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setEditingContent(null);
            setDialogOpen(true);
          }}
        >
          Add Content
        </Button>
      </Box>

      <Paper sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={content}
          columns={columns}
          loading={loading}
          pageSizeOptions={[10, 25, 50]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Paper>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingContent ? 'Edit Content' : 'Add New Content'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Key"
                value={newContent.key}
                onChange={(e) => setNewContent({ ...newContent, key: e.target.value })}
                disabled={!!editingContent}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                select
                label="Page"
                value={newContent.page}
                onChange={(e) => setNewContent({ ...newContent, page: e.target.value })}
                SelectProps={{
                  native: true,
                }}
              >
                <option value="home">Home</option>
                <option value="about">About</option>
                <option value="services">Services</option>
                <option value="contact">Contact</option>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Section"
                value={newContent.section}
                onChange={(e) => setNewContent({ ...newContent, section: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                select
                label="Type"
                value={newContent.type}
                onChange={(e) => setNewContent({ ...newContent, type: e.target.value })}
                SelectProps={{
                  native: true,
                }}
              >
                <option value="text">Text</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
                <option value="array">Array</option>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="number"
                label="Order"
                value={newContent.order}
                onChange={(e) => setNewContent({ ...newContent, order: parseInt(e.target.value) })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Value"
                value={newContent.value}
                onChange={(e) => setNewContent({ ...newContent, value: e.target.value })}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

// Contact Management Component
const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const data = await contactApi.getContacts();
      setContacts(data);
    } catch (error) {
      console.error('Failed to load contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await contactApi.updateContact(id, { status });
      await loadContacts();
    } catch (error) {
      console.error('Failed to update contact:', error);
    }
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'company', headerName: 'Company', width: 150 },
    { field: 'subject', headerName: 'Subject', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === 'new' ? 'warning' :
            params.value === 'read' ? 'info' :
            params.value === 'replied' ? 'success' : 'default'
          }
          size="small"
        />
      ),
    },
    {
      field: 'createdAt',
      headerName: 'Date',
      width: 150,
      valueGetter: (params) => new Date(params.value).toLocaleDateString(),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Box>
          <Button
            size="small"
            onClick={() => handleStatusUpdate(params.row.id, 'read')}
          >
            Mark Read
          </Button>
          <Button
            size="small"
            onClick={() => handleStatusUpdate(params.row.id, 'replied')}
          >
            Mark Replied
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Contact Management</Typography>
        <IconButton onClick={loadContacts}>
          <RefreshIcon />
        </IconButton>
      </Box>

      <Paper sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={contacts}
          columns={columns}
          loading={loading}
          pageSizeOptions={[10, 25, 50]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Paper>
    </Box>
  );
};

// User Management Component
const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await adminApi.getUsers();
      setUsers(data.users);
    } catch (error) {
      console.error('Failed to load users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleUpdate = async (id, role) => {
    try {
      await adminApi.updateUser(id, { role });
      await loadUsers();
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'role',
      headerName: 'Role',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'admin' ? 'primary' : 'default'}
          size="small"
        />
      ),
    },
    {
      field: 'isActive',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => (
        <Chip
          label={params.value ? 'Active' : 'Inactive'}
          color={params.value ? 'success' : 'error'}
          size="small"
        />
      ),
    },
    {
      field: 'createdAt',
      headerName: 'Joined',
      width: 150,
      valueGetter: (params) => new Date(params.value).toLocaleDateString(),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Box>
          <Button
            size="small"
            onClick={() => handleRoleUpdate(params.row.id, 'admin')}
            disabled={params.row.role === 'admin'}
          >
            Make Admin
          </Button>
          <Button
            size="small"
            onClick={() => handleRoleUpdate(params.row.id, 'user')}
            disabled={params.row.role === 'user'}
          >
            Make User
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">User Management</Typography>
        <IconButton onClick={loadUsers}>
          <RefreshIcon />
        </IconButton>
      </Box>

      <Paper sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          loading={loading}
          pageSizeOptions={[10, 25, 50]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Paper>
    </Box>
  );
};

// Main Admin Dashboard Component
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { user } = useAuth();

  const tabs = [
    { label: 'Dashboard', icon: <DashboardIcon /> },
    { label: 'Content', icon: <EditIcon /> },
    { label: 'Contacts', icon: <MailIcon /> },
    { label: 'Users', icon: <PeopleIcon /> },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <DashboardStats />;
      case 1:
        return <ContentManagement />;
      case 2:
        return <ContactManagement />;
      case 3:
        return <UserManagement />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Admin Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back, {user?.name}! Manage your website content and users here.
        </Typography>
      </Box>

      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="fullWidth"
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            '& .MuiTab-root': {
              py: 2,
              minHeight: 64,
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              icon={tab.icon}
              iconPosition="start"
              label={tab.label}
            />
          ))}
        </Tabs>

        <Box sx={{ p: 3 }}>
          {renderTabContent()}
        </Box>
      </Paper>

      {/* Quick Actions */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Quick Actions
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<CloudUploadIcon />}
              onClick={() => {/* Implement image upload */}}
            >
              Upload Image
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<MailIcon />}
              onClick={() => {/* Implement email broadcast */}}
            >
              Send Newsletter
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<SettingsIcon />}
              onClick={() => {/* Implement settings */}}
            >
              Site Settings
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<RefreshIcon />}
              onClick={() => {/* Implement cache clear */}}
            >
              Clear Cache
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AdminDashboard;