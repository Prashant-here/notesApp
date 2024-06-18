import React from 'react';
import Navbar from './Navbar';
import profileImage from '../assets/profileImage.jpeg'
const ContactUs = () => {
  return (
    <>
        <Navbar></Navbar>
    
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-6 flex items-center justify-center bg-blue-500">
            <img 
              src={profileImage}
              alt="Developer" 
              className="rounded-full border-4 border-white"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions or need further information, please feel free to contact us.
            </p>
            <div>
              <h3 className="text-2xl font-semibold mb-2">About the Developer</h3>
              <p className="mb-4">
                Hi! I'm Prashant Kumar, the developer behind NotesApp. I'm passionate about building web applications that make people's lives easier. Feel free to reach out if you have any questions or feedback.
              </p>
              <div className="flex flex-col gap-2">
                <span className="font-semibold">Email:</span>
                <a href="mailto:prashanthere0709@gmail.com" className="text-blue-500 hover:underline">prashanthere0709@gmail.com</a>
                <span className="font-semibold">Phone:</span>
                <a href="tel:+91 8800732803" className="text-blue-500 hover:underline">+91 8800732803</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
