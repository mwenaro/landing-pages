import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

const ContactInfo: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Contact Us:</h2>
      <p className="mb-1">
        <FaPhone className="inline mr-2" /> Call: <a href="tel:+254700430157">+254700430157</a>
      </p>
      <p className="mb-1">
        <FaEnvelope className="inline mr-2" /> Email: <a href="mailto:macsweeny@lifenity.ae">macsweeny@lifenity.ae</a>
      </p>
      <p>
        <FaMapMarker className="inline mr-2" /> Address: Mombasa, Kenya
      </p>
    </div>
  );
};

export default ContactInfo;
