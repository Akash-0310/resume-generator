const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  personalInfo: {
    fullName: String,
    email: String,
    phone: String,
    location: String,
    title: String,
    summary: String,
    linkedin: String,
    github: String,
    website: String,
    photoUrl: String
  },
  experience: [{
    company: String,
    position: String,
    startDate: String,
    endDate: String,
    current: Boolean,
    description: String
  }],
  education: [{
    institution: String,
    degree: String,
    field: String,
    startDate: String,
    endDate: String,
    gpa: String
  }],
  skills: [String],
  projects: [{
    name: String,
    description: String,
    technologies: String,
    link: String
  }],
  certifications: [{
    name: String,
    issuer: String,
    date: String
  }],
  languages: [{
    language: String,
    proficiency: String
  }],
  template: { type: String, default: 'classic' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', resumeSchema);
