import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target, Heart, Users, Award, Lightbulb, Globe, ArrowRight,
  Rocket, Shield, TrendingUp, Zap, Star, CheckCircle
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <Heart size={28} />,
      title: 'User-First Design',
      description: 'Every feature we build starts with our users. We obsessively focus on making resume creation intuitive, delightful, and accessible to everyone regardless of their technical skill level.',
    },
    {
      icon: <Lightbulb size={28} />,
      title: 'Continuous Innovation',
      description: 'We constantly push the boundaries of what a resume builder can do. From AI-powered suggestions to real-time collaboration, we are always exploring new ways to help you succeed.',
    },
    {
      icon: <Shield size={28} />,
      title: 'Privacy & Security',
      description: 'Your personal data is sacred to us. We employ enterprise-grade encryption, never sell your information, and give you complete control over your data at all times.',
    },
    {
      icon: <Globe size={28} />,
      title: 'Global Accessibility',
      description: 'Career opportunities should be available to everyone. Our platform supports multiple languages, follows WCAG accessibility standards, and works on any device.',
    },
    {
      icon: <Zap size={28} />,
      title: 'Speed & Performance',
      description: 'We know your time is valuable. Our platform loads in under 2 seconds, auto-saves your progress, and lets you go from blank page to polished resume in under 15 minutes.',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Career Growth Focus',
      description: 'We are not just a resume builder. We provide career resources, industry insights, and professional development tools to help you grow throughout your entire career journey.',
    },
  ];

  const team = [
    {
      name: 'Alexandra Chen',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
      bio: 'Former Head of Recruiting at a Fortune 500 company with 15 years of experience in talent acquisition and career development.',
    },
    {
      name: 'Marcus Thompson',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Ex-Google engineer with deep expertise in web technologies and AI. Passionate about building tools that make a real difference in peoples lives.',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
      bio: 'Award-winning UX designer who previously led design teams at Airbnb and Figma. Believes great design is invisible and empowering.',
    },
    {
      name: 'David Kim',
      role: 'Head of Content',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
      bio: 'Career coach and published author with expertise in personal branding. Has helped over 50,000 professionals craft their career narratives.',
    },
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'ResumeForge was born from a simple idea: everyone deserves a professional resume.' },
    { year: '2021', title: '100K Users', description: 'Reached our first major milestone and launched premium templates.' },
    { year: '2022', title: 'AI Integration', description: 'Introduced smart content suggestions and ATS optimization scoring.' },
    { year: '2023', title: '1M Resumes', description: 'Over one million resumes created. Launched portfolio website builder.' },
    { year: '2024', title: 'Series A', description: 'Raised $12M to expand our team and build next-gen career tools.' },
    { year: '2025', title: '2M+ Users', description: 'Serving professionals in 150+ countries with 500+ premium templates.' },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="about-hero-gradient"></div>
          <div className="about-hero-grid"></div>
        </div>
        <div className="about-hero-container">
          <AnimatedSection className="about-hero-content">
            <span className="section-badge">About Us</span>
            <h1>
              Empowering Careers,
              <span className="gradient-text"> One Resume at a Time</span>
            </h1>
            <p>
              We believe that a great resume is the first step toward a great career. Our mission
              is to democratize professional resume creation, making it accessible, beautiful, and
              effective for everyone — from fresh graduates to seasoned executives.
            </p>
          </AnimatedSection>
          <AnimatedSection className="about-hero-image" delay={0.2} direction="right">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Team collaboration"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-grid">
            <AnimatedSection className="mission-card" direction="left">
              <div className="mission-icon"><Target size={32} /></div>
              <h3>Our Mission</h3>
              <p>
                To empower every professional in the world with the tools they need to present
                their best selves. We are committed to breaking down barriers in the job market
                by providing world-class resume and portfolio building tools that are accessible to all.
                No one should miss out on their dream job because of a poorly formatted resume.
              </p>
            </AnimatedSection>
            <AnimatedSection className="mission-card" direction="right" delay={0.1}>
              <div className="mission-icon"><Rocket size={32} /></div>
              <h3>Our Vision</h3>
              <p>
                We envision a world where every job seeker has equal access to professional career
                tools. By 2030, we aim to help 50 million people worldwide land their dream jobs
                through our platform. We are building the future of career development — one resume,
                one portfolio, one career at a time.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="about-stats-container">
          <AnimatedSection className="about-stat">
            <h3>2M+</h3>
            <p>Resumes Created</p>
          </AnimatedSection>
          <AnimatedSection className="about-stat" delay={0.1}>
            <h3>150+</h3>
            <p>Countries Served</p>
          </AnimatedSection>
          <AnimatedSection className="about-stat" delay={0.2}>
            <h3>98%</h3>
            <p>User Satisfaction</p>
          </AnimatedSection>
          <AnimatedSection className="about-stat" delay={0.3}>
            <h3>150K+</h3>
            <p>Jobs Landed</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="values-container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Our Values</span>
            <h2 className="section-title">
              What Drives Us
              <span className="gradient-text"> Every Day</span>
            </h2>
            <p className="section-subtitle">
              Our core values shape everything we do — from the features we build to how
              we support our community of career-driven professionals.
            </p>
          </AnimatedSection>

          <div className="values-grid">
            {values.map((value, index) => (
              <AnimatedSection key={index} className="value-card" delay={index * 0.08} direction="scale">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="timeline-container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Our Journey</span>
            <h2 className="section-title">
              The Story
              <span className="gradient-text"> So Far</span>
            </h2>
            <p className="section-subtitle">
              From a small side project to a platform trusted by millions.
              Here are the milestones that define our journey.
            </p>
          </AnimatedSection>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <AnimatedSection
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </AnimatedSection>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="team-container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Our Team</span>
            <h2 className="section-title">
              Meet the People
              <span className="gradient-text"> Behind ResumeForge</span>
            </h2>
            <p className="section-subtitle">
              A passionate team of designers, engineers, and career experts
              united by the mission to help you succeed.
            </p>
          </AnimatedSection>

          <div className="team-grid">
            {team.map((member, index) => (
              <AnimatedSection key={index} className="team-card" delay={index * 0.1}>
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.bio}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-container">
          <AnimatedSection className="about-cta-content">
            <h2>Ready to Join Our Community?</h2>
            <p>
              Start building your professional resume today and join over 2 million
              professionals who trust ResumeForge with their careers.
            </p>
            <div className="about-cta-actions">
              <Link to="/builder" className="btn-primary btn-lg">
                Start Building Free <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary btn-lg">
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
