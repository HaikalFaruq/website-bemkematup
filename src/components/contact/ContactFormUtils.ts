
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
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const sendToWhatsApp = (formData: FormData): void => {
    try {
      // Format the message for WhatsApp
      const whatsappNumber = "+6285156634579";
      const formattedMessage = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
      );
      
      // Create WhatsApp URL with the formatted message
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Message Ready",
        description: "You're being redirected to WhatsApp to send your message.",
        variant: "default",
      });
    } catch (error) {
      console.error('WhatsApp redirection error:', error);
      toast({
        title: "Redirection Failed",
        description: "There was an error redirecting to WhatsApp. Please try again.",
        variant: "destructive",
      });
    }
  };

  return { validateForm, sendToWhatsApp };
};
