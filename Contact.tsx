import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({ type: 'success', text: 'Message sent successfully! I will get back to you soon.' });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Contact Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">+91 9100254762</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                    <a href="mailto:Debabrath07@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">Debabrath07@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                {submitMessage && (
                  <div className={`p-4 mb-6 rounded-lg ${
                    submitMessage.type === 'success' 
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
                      : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-purple-700 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;