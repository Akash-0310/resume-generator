import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Sparkles, Zap, Shield, Download, Star, Users, FileText,
  CheckCircle, Layout, Palette, Globe, Award, TrendingUp, ChevronRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <Layout size={28} />,
      title: 'Live Preview Editor',
      description: 'See your resume take shape in real-time as you type. Our split-screen editor shows instant changes with pixel-perfect accuracy.',
    },
    {
      icon: <Palette size={28} />,
      title: 'Premium Templates',
      description: 'Choose from professionally designed templates crafted by hiring experts. Each template is ATS-optimized and visually stunning.',
    },
    {
      icon: <Download size={28} />,
      title: 'One-Click PDF Export',
      description: 'Download your polished resume as a high-quality PDF instantly. Print-ready formatting ensures your resume looks perfect every time.',
    },
    {
      icon: <Shield size={28} />,
      title: 'ATS-Friendly Design',
      description: 'Every template passes through major Applicant Tracking Systems. Never worry about your resume being filtered out again.',
    },
    {
      icon: <Globe size={28} />,
      title: 'Portfolio Websites',
      description: 'Generate a stunning portfolio website from your resume data. Share your professional story with a unique link.',
    },
    {
      icon: <Zap size={28} />,
      title: 'Smart Suggestions',
      description: 'Get intelligent content suggestions powered by industry best practices. Optimize your bullet points for maximum impact.',
    },
  ];

  const stats = [
    { number: '2M+', label: 'Resumes Created', icon: <FileText size={22} /> },
    { number: '150K+', label: 'Users Hired', icon: <Award size={22} /> },
    { number: '500+', label: 'Premium Templates', icon: <Layout size={22} /> },
    { number: '98%', label: 'Satisfaction Rate', icon: <Star size={22} /> },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Software Engineer at Google',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      text: 'ResumeForge helped me land my dream job at Google. The templates are incredibly professional, and the live preview made it so easy to perfect every detail.',
      rating: 5,
    },
    {
      name: 'James Rodriguez',
      role: 'Product Manager at Meta',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      text: 'I tried several resume builders before finding ResumeForge. The difference is night and day. The ATS optimization feature alone is worth it.',
      rating: 5,
    },
    {
      name: 'Emily Chang',
      role: 'UX Designer at Apple',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      text: 'As a designer, I am picky about aesthetics. ResumeForge exceeded my expectations with its beautiful, minimal templates. Got hired within 2 weeks!',
      rating: 5,
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Choose Your Template',
      description: 'Browse our collection of professionally designed, ATS-friendly resume templates. Find the perfect style for your industry and career level.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=350&fit=crop',
    },
    {
      step: '02',
      title: 'Fill In Your Details',
      description: 'Enter your professional information using our intuitive form. Smart suggestions help you craft compelling bullet points and summaries.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=350&fit=crop',
    },
    {
      step: '03',
      title: 'Download & Apply',
      description: 'Preview your polished resume in real-time, then download it as a high-quality PDF. Start applying to your dream jobs with confidence.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=350&fit=crop',
    },
  ];

  const logos = ['Amazon', 'Google', 'Meta', 'Apple', 'Microsoft', 'Netflix', 'Spotify', 'Tesla'];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient-1"></div>
          <div className="hero-gradient-2"></div>
          <div className="hero-grid"></div>
        </div>
        <div className="hero-container">
          <AnimatedSection className="hero-content" delay={0}>
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Trusted by 2M+ professionals worldwide</span>
            </div>
            <h1 className="hero-title">
              Build Resumes That
              <span className="gradient-text"> Land Dream Jobs</span>
            </h1>
            <p className="hero-subtitle">
              Create stunning, ATS-optimized resumes and portfolio pages in minutes.
              Our intuitive builder with live preview helps you craft the perfect
              resume that stands out to hiring managers and beats applicant tracking systems.
            </p>
            <div className="hero-actions">
              <Link to="/builder" className="btn-primary btn-lg">
                Start Building Free
                <ArrowRight size={20} />
              </Link>
              <Link to="/resources" className="btn-secondary btn-lg">
                View Templates
              </Link>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i + 10}`}
                    alt="User avatar"
                    className="trust-avatar"
                  />
                ))}
              </div>
              <div className="trust-info">
                <div className="trust-stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="#facc15" color="#facc15" />
                  ))}
                </div>
                <span>4.9/5 from 10,000+ reviews</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="hero-visual" delay={0.2} direction="right">
            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=450&fit=crop"
                alt="Professional resume builder interface"
                className="hero-image"
              />
              <div className="floating-card card-1">
                <CheckCircle size={20} color="#22c55e" />
                <span>ATS Score: 98%</span>
              </div>
              <div className="floating-card card-2">
                <TrendingUp size={20} color="#3b82f6" />
                <span>+45% Interview Rate</span>
              </div>
              <div className="floating-card card-3">
                <Download size={20} color="#8b5cf6" />
                <span>PDF Ready</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Logos Section */}
      <section className="logos-section">
        <div className="logos-container">
          <AnimatedSection>
            <p className="logos-text">Our users have been hired at leading companies</p>
          </AnimatedSection>
          <div className="logos-track">
            <div className="logos-slide">
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="logo-item">{logo}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} className="stat-card" delay={index * 0.1}>
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="features-container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Features</span>
            <h2 className="section-title">
              Everything You Need to Build
              <span className="gradient-text"> the Perfect Resume</span>
            </h2>
            <p className="section-subtitle">
              Our comprehensive suite of tools and features helps you create
              professional, impactful resumes that get you noticed by top employers.
            </p>
          </AnimatedSection>

          <div className="features-grid">
            {features.map((feature, index) => (
              <AnimatedSection key={index} className="feature-card" delay={index * 0.1} direction="scale">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to="/builder" className="feature-link">
                  Try it now <ChevronRight size={16} />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="hiw-container">
          <AnimatedSection className="section-header">
            <span className="section-badge">How It Works</span>
            <h2 className="section-title">
              Create Your Resume in
              <span className="gradient-text"> 3 Simple Steps</span>
            </h2>
            <p className="section-subtitle">
              Our streamlined process makes resume creation effortless.
              From template selection to download, we have got you covered.
            </p>
          </AnimatedSection>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <AnimatedSection key={index} className="step-card" delay={index * 0.15}>
                <div className="step-image-wrapper">
                  <img src={step.image} alt={step.title} className="step-image" />
                  <div className="step-number">{step.step}</div>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Testimonials</span>
            <h2 className="section-title">
              Loved by
              <span className="gradient-text"> Professionals Worldwide</span>
            </h2>
            <p className="section-subtitle">
              Join thousands of professionals who have transformed their careers
              with ResumeForge. Here is what our community has to say.
            </p>
          </AnimatedSection>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} className="testimonial-card" delay={index * 0.1}>
                <div className="testimonial-stars">
                  {Array(testimonial.rating).fill(null).map((_, i) => (
                    <Star key={i} size={16} fill="#facc15" color="#facc15" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <AnimatedSection className="cta-content">
            <div className="cta-glow"></div>
            <h2>Ready to Build Your Dream Resume?</h2>
            <p>
              Join over 2 million professionals who have already created their
              perfect resume with ResumeForge. Start for free, no credit card required.
            </p>
            <div className="cta-actions">
              <Link to="/builder" className="btn-primary btn-lg">
                Get Started Free <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn-ghost btn-lg">
                Learn More
              </Link>
            </div>
            <div className="cta-features">
              <span><CheckCircle size={16} /> Free forever plan</span>
              <span><CheckCircle size={16} /> No credit card required</span>
              <span><CheckCircle size={16} /> ATS-optimized templates</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
