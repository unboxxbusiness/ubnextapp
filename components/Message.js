import React from 'react';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        if (response.ok) {
          // Form submission successful
          form.reset();
          alert('Thank you for your message!');
        } else {
          // Form submission failed
          throw new Error('Form submission failed');
        }
      })
      .catch((error) => {
        // Form submission failed
        console.error(error);
        alert('Oops! An error occurred while submitting the form.');
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-14"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      name="contact"
      action="/success"  // Updated the action attribute
    >
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot field */}
      <div style={{ display: 'none' }}>
        <label>
          Dont fill this out if you are human:
          <input name="bot-field" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            Your name
          </label>
          <div className="mt-2.5 relative">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="text-base font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2.5 relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="text-base font-medium text-gray-900">
            Phone number
          </label>
          <div className="mt-2.5 relative">
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="text-base font-medium text-gray-900">
            Company name
          </label>
          <div className="mt-2.5 relative">
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Enter your company name"
              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-base font-medium text-gray-900">
            Message
          </label>
          <div className="mt-2.5 relative">
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
