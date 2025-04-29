import { Mail, MapPin, MessageSquare } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8">
      <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
        Contact Information
      </h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 p-3 bg-kema-red/10 rounded-full mr-4">
            <MapPin className="text-kema-red" size={24} />
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">
              Our Address
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Telkom University Purwokerto Campus<br />
              Jl. D.I. Panjaitan No. 128, Purwokerto<br />
              Central Java, Indonesia
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 p-3 bg-kema-red/10 rounded-full mr-4">
            <Mail className="text-kema-red" size={24} />
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">
              Email Us
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              𝘣𝘦𝘮-𝘱𝘸𝘵@𝘵𝘦𝘭𝘬𝘰𝘮𝘶𝘯𝘪𝘷er𝘴𝘪𝘵𝘺.𝘢𝘤.𝘪𝘥
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 p-3 bg-kema-red/10 rounded-full mr-4">
            <MessageSquare className="text-kema-red" size={24} />
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">
              Text Us
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              +62 81-5799-2757 (Aldo)<br />
              Office Hours: Mon-Fri, 9am-4pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
