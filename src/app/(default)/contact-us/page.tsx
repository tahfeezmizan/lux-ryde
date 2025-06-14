'use client'
import React, { useState } from 'react';

const Page = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
    <div className='flex justify-center'>
    <form onSubmit={handleSubmit} className="space-y-4 lg:w-[700px] md:w-[500px] w-full p-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Your email address"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Your message"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-pink-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
};

export default Page;
