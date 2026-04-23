/*Mahika Bagri*/
/*April 22 2026*/


"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const formRef = useRef();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      alert("Message Sent ☕");

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message");
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[eaffea] p-6">
      <div
        className="w-full max-w-2xl p-8 rounded-2xl border-4 border-[#eaffea]/30 shadow-2xl"
        style={{ backgroundColor: "#2a2e2e" }}
      >
        <h1 className="text-4xl text-[#eaffea] font-mono mb-6 tracking-widest text-center">
          Contact Me
        </h1>

        <p className="text-[#eaffea] text-center mb-8 font-mono">
          Grab a Seat ☕ Questions • Ideas • Opportunities ☕ All Welcome
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 bg-transparent border-b-2 border-[#eaffea]/50 text-[#eaffea] font-mono outline-none"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 bg-transparent border-b-2 border-[#eaffea]/50 text-[#eaffea] font-mono outline-none"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 bg-transparent border-b-2 border-[#eaffea]/50 text-[#eaffea] font-mono outline-none resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 mt-4 border-2 border-[#eaffea] text-[#eaffea] font-mono tracking-widest hover:bg-[#eaffea] hover:text-[#2a2e2e] transition"
          >
            SEND MESSAGE
          </motion.button>
        </form>
      </div>
    </div>
  );
}