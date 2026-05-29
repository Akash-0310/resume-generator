import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, ArrowRight, MessageCircle, Mail, Book } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'features', label: 'Features' },
    { id: 'templates', label: 'Templates' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'technical', label: 'Technical' },
    { id: 'account', label: 'Account' },
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'How do I create my first resume with ResumeForge?',
      answer: 'Getting started is simple! Click the "Build Resume" button, choose a template you like, and start filling in your details. Our intuitive form guides you through each section — personal info, experience, education, skills, and projects. You will see a live preview on the right side that updates in real-time as you type. When you are satisfied, download your resume as a polished PDF with one click.'
    },
    {
      category: 'getting-started',
      question: 'Do I need to create an account to use ResumeForge?',
      answer: 'No account is required to start building your resume! You can use our builder immediately without signing up. However, creating a free account lets you save your resumes, access them from any device, and edit them later. Your data is securely encrypted and never shared with third parties.'
    },
    {
      category: 'getting-started',
      question: 'How long does it take to create a professional resume?',
      answer: 'Most users complete their resume in 15-30 minutes. Our smart form layout and real-time preview make the process incredibly efficient. If you already have your information ready, you can have a polished, professional resume in under 10 minutes. Our content suggestions also help speed up the writing process.'
    },
    {
      category: 'features',
      question: 'What is the live preview feature?',
      answer: 'Our live preview shows you exactly how your resume will look as you type. The preview panel on the right side of the builder updates instantly when you add or modify any information. This means no more guessing about formatting — you see the final result in real-time, ensuring your resume looks exactly the way you want before downloading.'
    },
    {
      category: 'features',
      question: 'Can I create multiple versions of my resume?',
      answer: 'Absolutely! You can create unlimited resumes tailored for different positions or industries. Each resume can use a different template and contain customized content. This is perfect for applying to diverse roles — you can highlight different skills and experiences for each application.'
    },
    {
      category: 'features',
      question: 'What is ATS optimization and why does it matter?',
      answer: 'ATS (Applicant Tracking System) optimization ensures your resume is properly parsed by the automated software that most companies use to screen applications. Over 75% of resumes are rejected by ATS before a human ever sees them. Our templates are designed to be fully ATS-compatible, with proper formatting, clean headers, and structured data that ATS software can easily read.'
    },
    {
      category: 'templates',
      question: 'How many templates are available?',
      answer: 'We offer over 500 professionally designed templates across various styles — modern, classic, creative, minimalist, and more. Each template is designed by professional graphic designers and reviewed by HR experts to ensure they make the right impression. New templates are added regularly.'
    },
    {
      category: 'templates',
      question: 'Can I customize the templates?',
      answer: 'Yes! While our templates come with beautiful default styling, you can customize colors, fonts, spacing, and layout to match your personal brand. Premium templates offer even more customization options, including custom color schemes, header styles, and section arrangements.'
    },
    {
      category: 'templates',
      question: 'Are the templates suitable for all industries?',
      answer: 'We have templates designed for virtually every industry and career level. Whether you are in tech, finance, healthcare, education, creative arts, or any other field, you will find templates that match the expectations and norms of your industry. Each template comes with industry-specific tips.'
    },
    {
      category: 'pricing',
      question: 'Is ResumeForge really free?',
      answer: 'Yes! Our core resume builder is completely free forever. You can create, edit, and download unlimited resumes using our free templates at no cost. We also offer premium plans with additional templates, advanced features like AI-powered suggestions, and priority support for users who want more.'
    },
    {
      category: 'pricing',
      question: 'What do premium plans include?',
      answer: 'Premium plans include access to all 500+ templates, AI-powered content suggestions, advanced ATS scoring, portfolio website generation, cover letter builder, multiple export formats (PDF, DOCX, TXT), priority customer support, and removal of the ResumeForge watermark. Plans start at $9.99/month.'
    },
    {
      category: 'pricing',
      question: 'Can I cancel my premium subscription at any time?',
      answer: 'Absolutely. There are no long-term contracts or cancellation fees. You can cancel your premium subscription at any time from your account settings. You will continue to have premium access until the end of your current billing period. All your resumes remain accessible even after cancellation.'
    },
    {
      category: 'technical',
      question: 'What format can I download my resume in?',
      answer: 'Free users can download their resume as a high-quality PDF, which is the most widely accepted format by employers and ATS systems. Premium users can also export in DOCX (Microsoft Word), TXT, and HTML formats. All downloads are optimized for both digital viewing and printing.'
    },
    {
      category: 'technical',
      question: 'Does ResumeForge work on mobile devices?',
      answer: 'Yes! ResumeForge is fully responsive and works beautifully on smartphones, tablets, and desktops. While we recommend using a larger screen for the best editing experience, you can create, edit, and download resumes from any device with a modern web browser.'
    },
    {
      category: 'technical',
      question: 'Is my data secure?',
      answer: 'Your security is our top priority. We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. Our servers are hosted on AWS with SOC 2 Type II compliance. We never sell your personal data to third parties, and you can delete your account and all associated data at any time.'
    },
    {
      category: 'account',
      question: 'How do I delete my account?',
      answer: 'You can delete your account from the Account Settings page. Click "Delete Account" and confirm your decision. This will permanently remove all your personal data, resumes, and account information from our servers within 30 days. This action cannot be undone.'
    },
    {
      category: 'account',
      question: 'Can I share my resume with others?',
      answer: 'Yes! You can generate a shareable link for your resume that you can send to recruiters, mentors, or anyone else. You can also export and share the PDF directly. Premium users can additionally create a public portfolio page with a custom URL that showcases their resume and projects beautifully.'
    },
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="faq-page">
      {/* Hero */}
      <section className="faq-hero">
        <div className="faq-hero-bg">
          <div className="faq-hero-gradient"></div>
        </div>
        <div className="faq-hero-container">
          <AnimatedSection>
            <span className="section-badge">FAQ</span>
            <h1>
              Frequently Asked
              <span className="gradient-text"> Questions</span>
            </h1>
            <p>
              Everything you need to know about ResumeForge. Can not find what you
              are looking for? Feel free to reach out to our support team.
            </p>
            <div className="faq-search">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="faq-container">
          <AnimatedSection className="faq-categories">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => { setActiveCategory(cat.id); setActiveIndex(null); }}
              >
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          <div className="faq-list">
            {filteredFaqs.length === 0 ? (
              <div className="faq-empty">
                <p>No questions match your search. Try different keywords or browse all categories.</p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <div
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <div className="faq-question">
                      <h3>{faq.question}</h3>
                      <ChevronDown size={20} className="faq-chevron" />
                    </div>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="help-section">
        <div className="help-container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Need More Help?</span>
            <h2 className="section-title">
              We are Here to
              <span className="gradient-text"> Help You</span>
            </h2>
            <p className="section-subtitle">
              Can not find the answer you are looking for? Our team is ready to assist you.
            </p>
          </AnimatedSection>

          <div className="help-grid">
            <AnimatedSection className="help-card" delay={0}>
              <div className="help-icon"><MessageCircle size={28} /></div>
              <h3>Live Chat Support</h3>
              <p>Chat with our support team in real-time. Average response time under 2 minutes during business hours.</p>
              <button className="btn-secondary">Start Chat</button>
            </AnimatedSection>
            <AnimatedSection className="help-card" delay={0.1}>
              <div className="help-icon"><Mail size={28} /></div>
              <h3>Email Support</h3>
              <p>Send us a detailed message and we will get back to you within 24 hours with a comprehensive solution.</p>
              <Link to="/contact" className="btn-secondary">Send Email</Link>
            </AnimatedSection>
            <AnimatedSection className="help-card" delay={0.2}>
              <div className="help-icon"><Book size={28} /></div>
              <h3>Documentation</h3>
              <p>Browse our detailed guides, tutorials, and documentation for step-by-step help with any feature.</p>
              <Link to="/resources" className="btn-secondary">View Docs</Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
