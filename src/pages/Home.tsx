import React from 'react';
import Quiz from '../components/Quiz';
import SEOSection from '../components/SEOSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Where Should I Travel?
          </h1>
          <p className="text-xl text-gray-600">
            Take our quiz to discover your perfect destination
          </p>
        </div>
        
        <Quiz />
        <SEOSection />
      </div>
    </div>
  );
};

export default Home;