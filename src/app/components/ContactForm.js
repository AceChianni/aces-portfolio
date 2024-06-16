"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is not valid";
    if (!formData.message) tempErrors.message = "Message is required";
    return tempErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(tempErrors);
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-brown-800">Contact Us</h1>
      {isSubmitted && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
          Your message has been sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-brown-800">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-brown-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-brown-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-1 p-2 w-full border rounded"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-forest-green-700 text-white px-4 py-2 rounded hover:bg-forest-green-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
