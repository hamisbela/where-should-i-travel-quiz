import React from 'react';
import { Users } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-600">Helping travelers find their perfect destination since 2024</p>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At Travel Quiz, we believe that everyone deserves to find their perfect travel destination. Our mission is to simplify the travel planning process by providing personalized recommendations based on your unique preferences and interests.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700">
            Founded by a group of passionate travelers and tech enthusiasts, Travel Quiz was born from the simple idea that choosing your next travel destination shouldn't be overwhelming. We combined our love for travel with advanced technology to create an intuitive quiz that helps travelers make informed decisions about their next adventure.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Personalization</h3>
              <p className="text-gray-700">We believe in tailored recommendations that match your unique preferences.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Accuracy</h3>
              <p className="text-gray-700">Our recommendations are based on thorough research and real travel experiences.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-700">Travel planning should be accessible to everyone, regardless of experience level.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;