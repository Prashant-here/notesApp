import React from 'react';
import Navbar from './Navbar';

const AboutPage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">About NotesApp</h1>
        <p className="mt-6 text-lg text-center text-gray-700">
          Welcome to NotesApp, your essential tool for capturing, organizing, and managing your ideas effortlessly.
          Our app is designed to streamline your note-taking process and keep your thoughts organized and accessible.
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>📝 <strong>Note Creation:</strong> Easily create new notes with a title, description, author, and additional information.</li>
            <li>✏️ <strong>Edit Notes:</strong> Update existing notes to keep your information current and accurate.</li>
            <li>🗑️ <strong>Delete Notes:</strong> Remove notes that are no longer needed, keeping your workspace clean and organized.</li>
            <li>🔍 <strong>View Notes:</strong> Browse through your list of notes to find exactly what you need.</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-700">
            Using NotesApp is simple and intuitive:
          </p>
          <ol className="mt-4 space-y-3 text-gray-700">
            <li>1. Navigate to the Notes section to see all your current notes.</li>
            <li>2. Use the form to create a new note by entering the title, description, author, and any additional information.</li>
            <li>3. Submit the form to add the note to your list.</li>
            <li>4. Edit or delete notes directly from the list to keep your information up-to-date.</li>
          </ol>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Testimonials</h2>
          <div className="mt-4 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700">"NotesApp makes organizing my thoughts so much easier. The interface is user-friendly and the features are exactly what I need."</p>
              <p className="mt-4 text-sm font-medium text-gray-900">- Alex Johnson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700">"Being able to quickly update my notes is a game-changer. NotesApp keeps me productive and organized."</p>
              <p className="mt-4 text-sm font-medium text-gray-900">- Jamie Lee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
