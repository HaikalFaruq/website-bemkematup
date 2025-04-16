
import { useToast } from '@/hooks/use-toast';

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useContactForm = () => {
  const { toast } = useToast();

  const validateForm = (formData: FormData): boolean => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields before sending.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const sendEmail = async (formData: FormData): Promise<boolean> => {
    try {
      // SMTPExpress configuration
      const projectId = 'sm0pid-ZAkKgOyW5yoraDiNWApOKZVRkz';
      const projectSecret = '39072c91c27e86d0aee8cdedbdaebfa8ff397b48db53e97c0d';
      const senderAddress = 'smtp-web-bemkematup-demo-acd7a6@smtpexpress.email';
      const recipientAddress = 'haikalfaruq2004@gmail.com';
      
      const emailData = {
        project_id: projectId,
        sender: senderAddress,
        recipient: recipientAddress,
        subject: `[Contact Form] ${formData.subject}`,
        message: `
          <h2>Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `
      };
      
      // Send email using SMTPExpress
      const response = await fetch('https://api.smtpexpress.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${projectSecret}`
        },
        body: JSON.stringify(emailData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Your message has been sent successfully. We'll get back to you soon.",
          variant: "default",
        });
        return true;
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      toast({
        title: "Message Failed",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
      return false;
    }
  };

  return { validateForm, sendEmail };
};
