import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">About NotesApp</h1>
        <p className="mt-6 text-lg text-center text-gray-700">
          NotesApp is your ultimate companion for capturing ideas, organizing thoughts, and enhancing productivity. 
          Designed with simplicity and functionality in mind, NotesApp helps you keep track of everything that matters.
        </p>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>📝 Easy-to-use note editor</li>
            <li>📂 Organize notes with categories and tags</li>
            <li>🔍 Quick search functionality</li>
            <li>🌐 Sync notes across devices</li>
            <li>🔒 Secure and private</li>
          </ul>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Testimonials</h2>
          <div className="mt-4 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700">"NotesApp has revolutionized the way I organize my thoughts. The user-friendly interface and powerful features are unmatched."</p>
              <p className="mt-4 text-sm font-medium text-gray-900">- Alex Johnson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700">"I love how NotesApp syncs my notes across all my devices seamlessly. It’s incredibly convenient."</p>
              <p className="mt-4 text-sm font-medium text-gray-900">- Jamie Lee</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700">"The security and privacy features give me peace of mind knowing my notes are safe."</p>
              <p className="mt-4 text-sm font-medium text-gray-900">- Taylor Kim</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
