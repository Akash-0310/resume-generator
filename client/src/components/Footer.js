import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Github, Twitter, Linkedin, Mail, Heart, ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <FileText size={22} />
              </div>
              <span>ResumeForge</span>
            </Link>
            <p className="footer-description">
              Build stunning, professional resumes and portfolios in minutes.
              Stand out from the crowd with our beautifully crafted templates
              and intuitive builder.
            </p>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:hello@resumeforge.com" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Product</h4>
            <Link to="/builder">Resume Builder</Link>
            <Link to="/resources">Templates</Link>
            <Link to="/resources">Cover Letters</Link>
            <Link to="/resources">Portfolio Builder</Link>
          </div>

          <div className="footer-links-group">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/resources">Blog</Link>
          </div>

          <div className="footer-links-group">
            <h4>Resources</h4>
            <Link to="/resources">Career Tips</Link>
            <Link to="/resources">Resume Examples</Link>
            <Link to="/resources">Interview Guide</Link>
            <Link to="/faq">Help Center</Link>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get the latest resume tips and career advice delivered to your inbox.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} ResumeForge. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
          <p className="made-with">
            Made with <Heart size={14} className="heart-icon" /> for job seekers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
