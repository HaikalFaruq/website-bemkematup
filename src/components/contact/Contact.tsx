
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SocialConnect from './SocialConnect';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get in <span className="text-kema-red">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions, suggestions, or want to collaborate? Reach out to BEM KEMA
            Telkom University Purwokerto and we'll be happy to connect with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
          
          {/* Contact Information */}
          <div>
            <ContactInfo />
            <SocialConnect />
          </div>
        </div>
      </div>
    </section>
  );
}
