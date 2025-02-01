import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import Map from '../components/contact/ Map';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: [
        "+1 (234) 567-8900",
        "+1 (234) 567-8901"
      ]
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: [
        "info@innovationcell.edu",
        "support@innovationcell.edu"
      ]
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      details: [
        "Innovation Hub, College Campus",
        "123 Education Street",
        "City, State 12345"
      ]
    },
    {
      icon: <Clock size={24} />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-primary mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Map and Address */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Find us on Map</h2>
              <Map />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Add FAQ items here */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">How can I join the Innovation Cell?</h3>
              <p className="text-gray-600">
                You can join by filling out the application form during our recruitment drive 
                or by contacting us directly through this page.
              </p>
            </div>
            {/* Add more FAQ items as needed */}
          </div>
        </div>
      </section>
    </div>
  );
}