import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, Briefcase, GraduationCap, Code, Palette, TrendingUp,
  ArrowRight, Clock, User, BookOpen, Download, Star, ExternalLink, Filter
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import './Resources.css';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Resources' },
    { id: 'guides', label: 'Career Guides' },
    { id: 'templates', label: 'Templates' },
    { id: 'tips', label: 'Resume Tips' },
    { id: 'interviews', label: 'Interview Prep' },
  ];

  const featuredArticles = [
    {
      category: 'guides',
      title: 'The Ultimate Guide to Writing a Resume in 2025',
      excerpt: 'Everything you need to know about creating a modern, ATS-friendly resume that gets you interviews. From formatting to content strategy, we cover it all.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
      author: 'Alexandra Chen',
      readTime: '12 min read',
      date: 'Mar 15, 2025',
      featured: true,
    },
    {
      category: 'tips',
      title: '10 Resume Mistakes That Cost You the Interview',
      excerpt: 'Avoid these common resume pitfalls that recruiters notice immediately. Learn what makes hiring managers pass on otherwise qualified candidates.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      author: 'David Kim',
      readTime: '8 min read',
      date: 'Mar 10, 2025',
      featured: true,
    },
  ];

  const articles = [
    {
      category: 'guides',
      title: 'How to Tailor Your Resume for Each Job Application',
      excerpt: 'Learn the art of customizing your resume for every position without starting from scratch each time.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop',
      author: 'Sarah Mitchell',
      readTime: '7 min read',
      date: 'Mar 8, 2025',
    },
    {
      category: 'tips',
      title: 'Power Words That Make Your Resume Stand Out',
      excerpt: 'Replace weak verbs with impactful action words that showcase your achievements and grab attention.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop',
      author: 'David Kim',
      readTime: '5 min read',
      date: 'Mar 5, 2025',
    },
    {
      category: 'interviews',
      title: 'Top 20 Interview Questions and How to Answer Them',
      excerpt: 'Prepare for your next interview with expert-crafted answers to the most common questions recruiters ask.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop',
      author: 'Marcus Thompson',
      readTime: '15 min read',
      date: 'Mar 3, 2025',
    },
    {
      category: 'templates',
      title: 'Best Resume Templates for Tech Professionals',
      excerpt: 'Discover our top-rated templates specifically designed for software engineers, data scientists, and IT pros.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
      author: 'Priya Sharma',
      readTime: '6 min read',
      date: 'Feb 28, 2025',
    },
    {
      category: 'guides',
      title: 'How to Write a Cover Letter That Gets Read',
      excerpt: 'Master the art of cover letter writing with our comprehensive guide covering structure, tone, and content.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop',
      author: 'Alexandra Chen',
      readTime: '10 min read',
      date: 'Feb 25, 2025',
    },
    {
      category: 'interviews',
      title: 'Salary Negotiation: A Complete Playbook',
      excerpt: 'Learn proven strategies to negotiate your salary confidently and secure the compensation you deserve.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop',
      author: 'David Kim',
      readTime: '11 min read',
      date: 'Feb 22, 2025',
    },
    {
      category: 'tips',
      title: 'Quantify Your Achievements: Numbers That Impress',
      excerpt: 'Transform vague bullet points into measurable accomplishments that demonstrate your real impact.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      author: 'Sarah Mitchell',
      readTime: '6 min read',
      date: 'Feb 20, 2025',
    },
    {
      category: 'templates',
      title: 'Creative Resume Templates for Designers',
      excerpt: 'Express your creativity while maintaining professionalism with our curated designer template collection.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop',
      author: 'Priya Sharma',
      readTime: '5 min read',
      date: 'Feb 18, 2025',
    },
    {
      category: 'guides',
      title: 'Building Your Personal Brand for Career Success',
      excerpt: 'Learn how to create a cohesive personal brand across your resume, LinkedIn, portfolio, and interviews.',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&h=250&fit=crop',
      author: 'Marcus Thompson',
      readTime: '9 min read',
      date: 'Feb 15, 2025',
    },
  ];

  const templateShowcase = [
    { name: 'Executive Pro', category: 'Professional', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop', downloads: '45K+', rating: 4.9 },
    { name: 'Modern Minimal', category: 'Minimalist', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=400&fit=crop', downloads: '38K+', rating: 4.8 },
    { name: 'Creative Edge', category: 'Creative', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&h=400&fit=crop', downloads: '32K+', rating: 4.9 },
    { name: 'Tech Forward', category: 'Technology', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=400&fit=crop', downloads: '41K+', rating: 4.7 },
  ];

  const filteredArticles = activeTab === 'all'
    ? articles
    : articles.filter(a => a.category === activeTab);

  return (
    <div className="resources-page">
      {/* Hero */}
      <section className="resources-hero">
        <div className="resources-hero-bg">
          <div className="resources-hero-gradient"></div>
        </div>
        <div className="resources-hero-container">
          <AnimatedSection>
            <span className="section-badge">Resources</span>
            <h1>
              Career Resources &
              <span className="gradient-text"> Expert Guides</span>
            </h1>
            <p>
              Expert-crafted guides, templates, tips, and tools to help you at every
              stage of your career journey. From resume writing to interview preparation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="featured-section">
        <div className="featured-container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Featured</span>
            <h2 className="section-title">
              Editor's
              <span className="gradient-text"> Picks</span>
            </h2>
          </AnimatedSection>

          <div className="featured-grid">
            {featuredArticles.map((article, index) => (
              <AnimatedSection key={index} className="featured-card" delay={index * 0.15}>
                <div className="featured-image">
                  <img src={article.image} alt={article.title} />
                  <span className="featured-badge">Featured</span>
                </div>
                <div className="featured-content">
                  <div className="article-meta">
                    <span><Clock size={14} /> {article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-author">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Template Showcase */}
      <section className="template-showcase">
        <div className="template-showcase-container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Templates</span>
            <h2 className="section-title">
              Popular
              <span className="gradient-text"> Resume Templates</span>
            </h2>
            <p className="section-subtitle">
              Browse our most downloaded templates, designed by professionals and loved by thousands.
            </p>
          </AnimatedSection>

          <div className="template-grid">
            {templateShowcase.map((template, index) => (
              <AnimatedSection key={index} className="template-card" delay={index * 0.1}>
                <div className="template-preview">
                  <img src={template.image} alt={template.name} />
                  <div className="template-overlay">
                    <Link to="/builder" className="btn-primary">Use Template</Link>
                  </div>
                </div>
                <div className="template-info">
                  <h4>{template.name}</h4>
                  <span className="template-category">{template.category}</span>
                  <div className="template-stats">
                    <span><Download size={14} /> {template.downloads}</span>
                    <span><Star size={14} fill="#facc15" color="#facc15" /> {template.rating}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="articles-section">
        <div className="articles-container">
          <AnimatedSection className="section-header">
            <span className="section-badge">Blog & Guides</span>
            <h2 className="section-title">
              Latest Articles &
              <span className="gradient-text"> Career Tips</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection className="articles-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </AnimatedSection>

          <div className="articles-grid">
            {filteredArticles.map((article, index) => (
              <AnimatedSection key={index} className="article-card" delay={index * 0.08}>
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span><Clock size={14} /> {article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-footer">
                    <div className="article-author">
                      <User size={14} />
                      <span>{article.author}</span>
                    </div>
                    <span className="read-more">Read More <ArrowRight size={14} /></span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="resources-cta">
        <div className="resources-cta-container">
          <AnimatedSection className="resources-cta-content">
            <h2>Get Career Tips Delivered Weekly</h2>
            <p>
              Join 50,000+ professionals receiving our weekly newsletter with
              exclusive resume tips, career advice, and job market insights.
            </p>
            <div className="resources-cta-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="btn-primary">
                Subscribe <ArrowRight size={18} />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Resources;
