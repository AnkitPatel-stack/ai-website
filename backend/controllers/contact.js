// const Contact = require('../models/Contact');
// const nodemailer = require('nodemailer');

// // Create contact enquiry
// exports.createContact = async (req, res) => {
//   try {
//     const { name, email, phone, company, subject, message } = req.body;

//     // Create contact record
//     const contact = new Contact({
//       name,
//       email,
//       phone,
//       company,
//       subject,
//       message,
//       metadata: {
//         ipAddress: req.ip,
//         userAgent: req.headers['user-agent'],
//         pageUrl: req.headers.referer,
//       },
//     });

//     await contact.save();

//     // Send email notification (in production)
//     if (process.env.NODE_ENV === 'production') {
//       await sendNotificationEmail(contact);
//     }

//     // Send auto-reply to user
//     await sendAutoReplyEmail(contact);

//     res.status(201).json({
//       message: 'Thank you for your enquiry. We will get back to you soon!',
//       contact: {
//         id: contact._id,
//         name: contact.name,
//         email: contact.email,
//         subject: contact.subject,
//       },
//     });
//   } catch (error) {
//     console.error('Create contact error:', error);
//     res.status(500).json({ error: 'Failed to submit enquiry' });
//   }
// };

// // Get all contacts (admin only)
// exports.getAllContacts = async (req, res) => {
//   try {
//     const { status, startDate, endDate, search } = req.query;

//     const query = {};
//     if (status) query.status = status;
//     if (startDate || endDate) {
//       query.createdAt = {};
//       if (startDate) query.createdAt.$gte = new Date(startDate);
//       if (endDate) query.createdAt.$lte = new Date(endDate);
//     }
//     if (search) {
//       query.$or = [
//         { name: { $regex: search, $options: 'i' } },
//         { email: { $regex: search, $options: 'i' } },
//         { company: { $regex: search, $options: 'i' } },
//         { subject: { $regex: search, $options: 'i' } },
//       ];
//     }

//     const contacts = await Contact.find(query)
//       .sort({ createdAt: -1 })
//       .populate('assignedTo', 'name email')
//       .limit(100);

//     res.json(contacts);
//   } catch (error) {
//     console.error('Get contacts error:', error);
//     res.status(500).json({ error: 'Failed to fetch contacts' });
//   }
// };

// // Update contact status (admin only)
// exports.updateContact = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status, assignedTo, notes } = req.body;

//     const updateData = { updatedAt: new Date() };
//     if (status) updateData.status = status;
//     if (assignedTo) updateData.assignedTo = assignedTo;
//     if (notes && notes.trim()) {
//       updateData.$push = {
//         notes: {
//           content: notes.trim(),
//           createdBy: req.user._id,
//         },
//       };
//     }

//     const contact = await Contact.findByIdAndUpdate(
//       id,
//       updateData,
//       { new: true, runValidators: true }
//     ).populate('assignedTo', 'name email')
//      .populate('notes.createdBy', 'name');

//     if (!contact) {
//       return res.status(404).json({ error: 'Contact not found' });
//     }

//     res.json({
//       message: 'Contact updated successfully',
//       contact,
//     });
//   } catch (error) {
//     console.error('Update contact error:', error);
//     res.status(500).json({ error: 'Failed to update contact' });
//   }
// };

// // Get contact by ID
// exports.getContactById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const contact = await Contact.findById(id)
//       .populate('assignedTo', 'name email')
//       .populate('notes.createdBy', 'name');

//     if (!contact) {
//       return res.status(404).json({ error: 'Contact not found' });
//     }

//     res.json(contact);
//   } catch (error) {
//     console.error('Get contact error:', error);
//     res.status(500).json({ error: 'Failed to fetch contact' });
//   }
// };

// // Helper function to send notification email
// const sendNotificationEmail = async (contact) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.ADMIN_EMAIL,
//       subject: `New Contact Enquiry: ${contact.subject}`,
//       html: `
//         <h2>New Contact Enquiry</h2>
//         <p><strong>Name:</strong> ${contact.name}</p>
//         <p><strong>Email:</strong> ${contact.email}</p>
//         <p><strong>Phone:</strong> ${contact.phone || 'Not provided'}</p>
//         <p><strong>Company:</strong> ${contact.company || 'Not provided'}</p>
//         <p><strong>Subject:</strong> ${contact.subject}</p>
//         <p><strong>Message:</strong></p>
//         <p>${contact.message}</p>
//         <hr>
//         <p><small>Received at: ${contact.createdAt}</small></p>
//         <p><small>IP Address: ${contact.metadata.ipAddress}</small></p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//   } catch (error) {
//     console.error('Notification email error:', error);
//   }
// };

// // Helper function to send auto-reply
// const sendAutoReplyEmail = async (contact) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: contact.email,
//       subject: 'Thank you for contacting us',
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #333;">Thank You for Contacting Us!</h2>
//           <p>Dear ${contact.name},</p>
//           <p>Thank you for reaching out to us regarding "${contact.subject}". We have received your enquiry and one of our team members will get back to you within 24-48 hours.</p>
//           <p>Here's a summary of your enquiry:</p>
//           <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
//             <p><strong>Subject:</strong> ${contact.subject}</p>
//             <p><strong>Message:</strong></p>
//             <p>${contact.message}</p>
//           </div>
//           <p>In the meantime, you can:</p>
//           <ul>
//             <li>Visit our website for more information</li>
//             <li>Check out our case studies</li>
//             <li>Chat with our AI assistant for immediate answers</li>
//           </ul>
//           <p>Best regards,<br>The AI Solutions Team</p>
//           <hr style="margin: 30px 0;">
//           <p style="font-size: 12px; color: #666;">
//             This is an automated message. Please do not reply to this email.
//           </p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//   } catch (error) {
//     console.error('Auto-reply email error:', error);
//   }
// };


// backend/controllers/contact.js
const Contact = require('../models/Contact');

// Create contact enquiry
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, company, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Name, email, subject, and message are required' });
    }

    // Create contact record
    const contact = new Contact({
      name,
      email,
      phone,
      company,
      subject,
      message,
      metadata: {
        ipAddress: req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        userAgent: req.headers['user-agent'],
        pageUrl: req.headers.referer,
      },
    });

    await contact.save();

    // Log contact submission (in development)
    console.log('📧 New contact enquiry:', {
      name,
      email,
      subject,
      timestamp: new Date().toISOString(),
    });

    res.status(201).json({
      message: 'Thank you for your enquiry. We will get back to you soon!',
      contact: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
      },
    });
  } catch (error) {
    console.error('Create contact error:', error);
    res.status(500).json({ error: 'Failed to submit enquiry' });
  }
};

// Get all contacts (admin only)
exports.getAllContacts = async (req, res) => {
  try {
    const { status, startDate, endDate, search } = req.query;

    const query = {};
    if (status) query.status = status;
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(endDate);
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } },
      ];
    }

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .populate('assignedTo', 'name email')
      .limit(100);

    res.json(contacts);
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

// Update contact status (admin only)
exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, assignedTo, notes } = req.body;

    const updateData = { updatedAt: new Date() };
    if (status) updateData.status = status;
    if (assignedTo) updateData.assignedTo = assignedTo;
    if (notes && notes.trim()) {
      updateData.$push = {
        notes: {
          content: notes.trim(),
          createdBy: req.user._id,
        },
      };
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).populate('assignedTo', 'name email')
     .populate('notes.createdBy', 'name');

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({
      message: 'Contact updated successfully',
      contact,
    });
  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({ error: 'Failed to update contact' });
  }
};

// Get contact by ID
exports.getContactById = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findById(id)
      .populate('assignedTo', 'name email')
      .populate('notes.createdBy', 'name');

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json(contact);
  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({ error: 'Failed to fetch contact' });
  }
};