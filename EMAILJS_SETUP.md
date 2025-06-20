# EmailJS Setup Guide for Contact Form

## 📧 **Complete Setup to Receive Emails at mohammadshavez2249@gmail.com**

### **Step 1: Create EmailJS Account**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up with your Google account or email
3. Verify your email address

### **Step 2: Add Email Service**
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** 
4. Click **"Connect Account"**
5. Sign in with **mohammadshavez2249@gmail.com**
6. Allow EmailJS permissions
7. **Copy the Service ID** (example: `service_xxxxxxx`)

### **Step 3: Create Email Template**
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Hello Mohd. Shavez,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Message: {{message}}

---
This email was sent automatically from your portfolio contact form.
```

4. **Copy the Template ID** (example: `template_xxxxxxx`)

### **Step 4: Get Public Key**
1. Go to **"Account"** settings
2. Find **"Public Key"** 
3. **Copy the Public Key** (example: `xxxxxxxxxxxxxxx`)

### **Step 5: Update Environment Variables**
Edit the `.env.local` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx  
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

Replace the `xxxxxxx` with your actual values from EmailJS.

### **Step 6: Test the Form**
1. Start your development server: `npm run dev`
2. Go to your website's contact section
3. Fill out the form and submit
4. Check **mohammadshavez2249@gmail.com** for the email

### **📋 EmailJS Template Variables (Already Configured)**
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email  
- `{{to_name}}` - Your name (Mohd. Shavez)
- `{{to_email}}` - Your email (mohammadshavez2249@gmail.com)
- `{{message}}` - The message content
- `{{reply_to}}` - Sender's email for easy reply

### **🎯 Form Features Already Implemented**
✅ Professional form validation  
✅ Success/error toast notifications  
✅ Form reset after successful submission  
✅ Responsive design  
✅ Professional styling  
✅ Anti-spam protection  

### **🚀 Ready to Use!**
Once you complete the EmailJS setup, your contact form will automatically send all submissions to **mohammadshavez2249@gmail.com**!

---

**Need Help?** 
- EmailJS Documentation: https://www.emailjs.com/docs/
- Free plan allows 200 emails/month
- Upgrade for more emails if needed 