import React from 'react';
import Mental from '../assets/mental.png' 

import { HelpCircle,  User, Phone, Calendar, CreditCard, Lock } from 'lucide-react';

export default function HelpPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-10">
      <div className="w-9xl  bg-white p-8 rounded-2xl shadow-2xl h-[1200px] border-dashed border-purple-400 border-[7px] ">
        
        {/* Header */}<div className='flex items-center  justify-center h-42  px-8shadow-md'>
             <img src={Mental} alt="Logo" className="h-[190px] mr-4 ml-12" />
        <h1 className="text-7xl font-extrabold text-purple-600 mb-4 text-center">How Can We Help You?</h1></div>
        <p className="text-center  font-extrabold text-gray-500 mb-10 text-2xl">Get help with booking, managing services, and account issues.</p>

        <div className="grid md:grid-cols-3 gap-12 ">

          {/* Getting Started */}
          <div className="bg-purple-100 p-12 rounded-xl shadow-xl hover:shadow-2xl transition h-[400px]  ">
            <HelpCircle className="text-purple-500 mb-3" size={68} />
            <h2 className="text-3xl font-extrabold text-purple-700 mb-2">Getting Started</h2>
            <ul className="text-gray-600 text-2xl space-y-2 list-disc pl-5">
              <li>How to create an account</li>
              <li>How to book a service</li>
              <li>Tracking your bookings</li>
            </ul>  
          </div>

          {/* Booking & Scheduling */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition h-[400px]">
            <Calendar className="text-yellow-500 mb-3" size={68} />
            <h2 className="text-3xl font-extrabold text-yellow-700 mb-2">Bookings</h2>
            <ul className="text-gray-600 text-2xl space-y-2 list-disc pl-5">
              <li>View or cancel a booking</li>
              <li>Reschedule service time</li>
              <li>Missed appointment issues</li>
            </ul>
          </div>

          {/* Payments & Refunds */}
          <div className="bg-green-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition h-[400px]">
            <CreditCard className="text-green-500 mb-3" size={68} />
            <h2 className="text-3xl font-extrabold text-green-700 mb-2">Payments & Refunds</h2>
            <ul className="text-gray-600 text-2xl space-y-2 list-disc pl-5">
              <li>Payment options</li>
              <li>Refund policies</li>
              <li>Invoice download</li>
            </ul>
          </div>

          {/* Account & Privacy */}
          <div className="bg-blue-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition h-[400px]">
            <User className="text-blue-500 mb-3" size={68} />
            <h2 className="text-3xl font-extrabold text-blue-700 mb-2">Account & Profile</h2>
            <ul className="text-gray-600 text-2xl space-y-2 list-disc pl-5">
              <li>Reset password</li>
              <li>Change email or phone</li>
              <li>Delete account</li>
            </ul>
          </div>

          {/* Privacy & Settings */}
          <div className="bg-pink-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition h-[400px] ">
            <Lock className="text-pink-500 mb-3" size={68} />
            <h2 className="text-3xl font-extrabold text-pink-700 mb-2">Privacy & Settings</h2>
            <ul className="text-gray-600 text-2xl space-y-2 list-disc pl-5">
              <li>Data privacy policy</li>
              <li>Notification settings</li>
              <li>Security options</li>
            </ul>

          </div>

          {/* Contact Us */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition h-[400px]">
            <Phone className="text-gray-500 mb-3" size={68} />
            <h2 className="text-xl font-bold text-gray-700 mb-2">Contact Support</h2>
            <ul className="text-gray-600 text-2xl space-y-2 list-disc pl-5">
              <li>Email: support@yourservice.com</li>
              <li>Call: +91-9876543210</li>
              <li>Live Chat (9am–9pm)</li>
            </ul>
          </div>
         
        </div>
      </div>
    </div>
  );
}
