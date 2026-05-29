import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle,
  MessageSquare, Globe, Linkedin, Twitter, Github
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Unable to connect to server. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail size={22} />, title: 'Email Us', detail: 'hello@resumeforge.com', subtitle: 'We reply within 24 hours' },
    { icon: <Phone size={22} />, title: 'Call Us', detail: '+1 (555) 123-4567', subtitle: 'Mon-Fri 9am-6pm EST' },
    { icon: <MapPin size={22} />, title: 'Visit Us', detail: '123 Innovation Drive', subtitle: 'San Francisco, CA 94105' },
    { icon: <Clock size={22} />, title: 'Business Hours', detail: 'Mon - Fri: 9AM - 6PM', subtitle: 'Weekend: 10AM - 4PM EST' },
  ];

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <div className="contact-hero-gradient"></div>
        </div>
        <div className="contact-hero-container">
          <AnimatedSection>
            <span className="section-badge">Contact Us</span>
            <h1>
              Let's Start a
              <span className="gradient-text"> Conversation</span>
            </h1>
            <p>
              Have a question, feedback, or just want to say hello? We would love to hear from you.
              Our team is ready to help you with anything you need.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          {contactInfo.map((info, index) => (
            <AnimatedSection key={index} className="contact-info-card" delay={index * 0.1}>
              <div className="contact-info-icon">{info.icon}</div>
              <h3>{info.title}</h3>
              <p className="contact-detail">{info.detail}</p>
              <p className="contact-subtitle">{info.subtitle}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <AnimatedSection className="contact-form-wrapper" direction="left">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we will get back to you as soon as possible.</p>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary btn-lg submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection className="contact-sidebar" direction="right" delay={0.2}>
            <div className="sidebar-card">
              <div className="sidebar-image">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=350&fit=crop"
                  alt="Our office"
                />
              </div>
              <div className="sidebar-content">
                <h3>Our Office</h3>
                <p>
                  Located in the heart of San Francisco's innovation district,
                  our doors are always open for a chat over coffee.
                </p>
              </div>
            </div>

            <div className="sidebar-card social-card">
              <h3>Connect With Us</h3>
              <p>Follow us on social media for the latest updates, career tips, and community stories.</p>
              <div className="social-links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Twitter size={20} /> <span>Twitter</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={20} /> <span>LinkedIn</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={20} /> <span>GitHub</span>
                </a>
                <a href="https://resumeforge.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Globe size={20} /> <span>Website</span>
                </a>
              </div>
            </div>

            <div className="sidebar-card faq-shortcut">
              <MessageSquare size={24} />
              <h3>Check Our FAQ</h3>
              <p>Find instant answers to common questions in our comprehensive FAQ section.</p>
              <a href="/faq" className="btn-secondary">Visit FAQ</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
