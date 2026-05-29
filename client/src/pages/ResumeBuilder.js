import React, { useState, useRef } from 'react';
import {
  User, Briefcase, GraduationCap, Code, Award, Languages, Plus, Trash2,
  Download, Eye, EyeOff, ChevronDown, ChevronUp, Mail, Phone, MapPin,
  Linkedin, Github, Globe, FileText
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  const resumeRef = useRef(null);
  const [showPreview, setShowPreview] = useState(true);
  const [activeSection, setActiveSection] = useState('personal');
  const [isDownloading, setIsDownloading] = useState(false);

  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
      linkedin: '',
      github: '',
      website: '',
    },
    experience: [],
    education: [],
    skills: [],
    projects: [],
  });

  const [newSkill, setNewSkill] = useState('');

  const updatePersonal = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        id: Date.now(), company: '', position: '', startDate: '', endDate: '', current: false, description: ''
      }]
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, {
        id: Date.now(), institution: '', degree: '', field: '', startDate: '', endDate: '', gpa: ''
      }]
    }));
  };

  const updateEducation = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setResumeData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, {
        id: Date.now(), name: '', description: '', technologies: '', link: ''
      }]
    }));
  };

  const updateProject = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(proj =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    }));
  };

  const removeProject = (id) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id)
    }));
  };

  const downloadPDF = async () => {
    if (!resumeRef.current) return;
    setIsDownloading(true);

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

      const fileName = resumeData.personal.fullName
        ? `${resumeData.personal.fullName.replace(/\s+/g, '_')}_Resume.pdf`
        : 'Resume.pdf';
      pdf.save(fileName);
    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: <User size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Award size={18} /> },
  ];

  const { personal, experience, education, skills, projects } = resumeData;

  return (
    <div className="builder-page">
      <div className="builder-header">
        <div className="builder-header-left">
          <FileText size={22} />
          <h1>Resume Builder</h1>
        </div>
        <div className="builder-header-actions">
          <button
            className="toggle-preview-btn"
            onClick={() => setShowPreview(!showPreview)}
          >
            {showPreview ? <EyeOff size={18} /> : <Eye size={18} />}
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </button>
          <button
            className="download-btn"
            onClick={downloadPDF}
            disabled={isDownloading}
          >
            <Download size={18} />
            {isDownloading ? 'Generating...' : 'Download PDF'}
          </button>
        </div>
      </div>

      <div className={`builder-layout ${!showPreview ? 'full-form' : ''}`}>
        {/* Form Panel */}
        <div className="builder-form">
          <div className="form-nav">
            {sections.map(section => (
              <button
                key={section.id}
                className={`form-nav-btn ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.icon}
                <span>{section.label}</span>
              </button>
            ))}
          </div>

          <div className="form-content">
            {/* Personal Info */}
            {activeSection === 'personal' && (
              <div className="form-section">
                <h2><User size={20} /> Personal Information</h2>
                <div className="form-grid">
                  <div className="builder-field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      value={personal.fullName}
                      onChange={(e) => updatePersonal('fullName', e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="builder-field">
                    <label>Professional Title</label>
                    <input
                      type="text"
                      value={personal.title}
                      onChange={(e) => updatePersonal('title', e.target.value)}
                      placeholder="Senior Software Engineer"
                    />
                  </div>
                  <div className="builder-field">
                    <label>Email</label>
                    <input
                      type="email"
                      value={personal.email}
                      onChange={(e) => updatePersonal('email', e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="builder-field">
                    <label>Phone</label>
                    <input
                      type="tel"
                      value={personal.phone}
                      onChange={(e) => updatePersonal('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="builder-field">
                    <label>Location</label>
                    <input
                      type="text"
                      value={personal.location}
                      onChange={(e) => updatePersonal('location', e.target.value)}
                      placeholder="San Francisco, CA"
                    />
                  </div>
                  <div className="builder-field">
                    <label>LinkedIn</label>
                    <input
                      type="text"
                      value={personal.linkedin}
                      onChange={(e) => updatePersonal('linkedin', e.target.value)}
                      placeholder="linkedin.com/in/johndoe"
                    />
                  </div>
                  <div className="builder-field">
                    <label>GitHub</label>
                    <input
                      type="text"
                      value={personal.github}
                      onChange={(e) => updatePersonal('github', e.target.value)}
                      placeholder="github.com/johndoe"
                    />
                  </div>
                  <div className="builder-field">
                    <label>Website</label>
                    <input
                      type="text"
                      value={personal.website}
                      onChange={(e) => updatePersonal('website', e.target.value)}
                      placeholder="johndoe.com"
                    />
                  </div>
                </div>
                <div className="builder-field full-width">
                  <label>Professional Summary</label>
                  <textarea
                    value={personal.summary}
                    onChange={(e) => updatePersonal('summary', e.target.value)}
                    placeholder="A brief summary of your professional background, key achievements, and career objectives..."
                    rows="4"
                  />
                </div>
              </div>
            )}

            {/* Experience */}
            {activeSection === 'experience' && (
              <div className="form-section">
                <div className="section-header-row">
                  <h2><Briefcase size={20} /> Work Experience</h2>
                  <button className="add-btn" onClick={addExperience}>
                    <Plus size={16} /> Add Experience
                  </button>
                </div>
                {experience.length === 0 && (
                  <div className="empty-state">
                    <Briefcase size={40} />
                    <p>No experience added yet. Click "Add Experience" to get started.</p>
                  </div>
                )}
                {experience.map((exp, index) => (
                  <div key={exp.id} className="entry-card">
                    <div className="entry-header">
                      <span className="entry-number">#{index + 1}</span>
                      <button className="remove-btn" onClick={() => removeExperience(exp.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="form-grid">
                      <div className="builder-field">
                        <label>Company</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                          placeholder="Google Inc."
                        />
                      </div>
                      <div className="builder-field">
                        <label>Position</label>
                        <input
                          type="text"
                          value={exp.position}
                          onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                          placeholder="Senior Software Engineer"
                        />
                      </div>
                      <div className="builder-field">
                        <label>Start Date</label>
                        <input
                          type="text"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                          placeholder="Jan 2022"
                        />
                      </div>
                      <div className="builder-field">
                        <label>End Date</label>
                        <input
                          type="text"
                          value={exp.current ? 'Present' : exp.endDate}
                          onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                          placeholder="Present"
                          disabled={exp.current}
                        />
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={exp.current}
                            onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                          />
                          Currently working here
                        </label>
                      </div>
                    </div>
                    <div className="builder-field full-width">
                      <label>Description</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                        placeholder="Describe your responsibilities, achievements, and impact..."
                        rows="3"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {activeSection === 'education' && (
              <div className="form-section">
                <div className="section-header-row">
                  <h2><GraduationCap size={20} /> Education</h2>
                  <button className="add-btn" onClick={addEducation}>
                    <Plus size={16} /> Add Education
                  </button>
                </div>
                {education.length === 0 && (
                  <div className="empty-state">
                    <GraduationCap size={40} />
                    <p>No education added yet. Click "Add Education" to get started.</p>
                  </div>
                )}
                {education.map((edu, index) => (
                  <div key={edu.id} className="entry-card">
                    <div className="entry-header">
                      <span className="entry-number">#{index + 1}</span>
                      <button className="remove-btn" onClick={() => removeEducation(edu.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="form-grid">
                      <div className="builder-field">
                        <label>Institution</label>
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                          placeholder="Stanford University"
                        />
                      </div>
                      <div className="builder-field">
                        <label>Degree</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                          placeholder="Bachelor of Science"
                        />
                      </div>
                      <div className="builder-field">
                        <label>Field of Study</label>
                        <input
                          type="text"
                          value={edu.field}
                          onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                          placeholder="Computer Science"
                        />
                      </div>
                      <div className="builder-field">
                        <label>GPA</label>
                        <input
                          type="text"
                          value={edu.gpa}
                          onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                          placeholder="3.9/4.0"
                        />
                      </div>
                      <div className="builder-field">
                        <label>Start Date</label>
                        <input
                          type="text"
                          value={edu.startDate}
                          onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                          placeholder="Sep 2018"
                        />
                      </div>
                      <div className="builder-field">
                        <label>End Date</label>
                        <input
                          type="text"
                          value={edu.endDate}
                          onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                          placeholder="Jun 2022"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {activeSection === 'skills' && (
              <div className="form-section">
                <h2><Code size={20} /> Skills</h2>
                <div className="skill-input-row">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                    placeholder="Type a skill and press Enter..."
                  />
                  <button className="add-btn" onClick={addSkill}>
                    <Plus size={16} /> Add
                  </button>
                </div>
                <div className="skills-tags">
                  {skills.length === 0 && (
                    <div className="empty-state">
                      <Code size={40} />
                      <p>No skills added yet. Type a skill above and press Enter.</p>
                    </div>
                  )}
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                      <button onClick={() => removeSkill(index)}>&times;</button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {activeSection === 'projects' && (
              <div className="form-section">
                <div className="section-header-row">
                  <h2><Award size={20} /> Projects</h2>
                  <button className="add-btn" onClick={addProject}>
                    <Plus size={16} /> Add Project
                  </button>
                </div>
                {projects.length === 0 && (
                  <div className="empty-state">
                    <Award size={40} />
                    <p>No projects added yet. Click "Add Project" to get started.</p>
                  </div>
                )}
                {projects.map((proj, index) => (
                  <div key={proj.id} className="entry-card">
                    <div className="entry-header">
                      <span className="entry-number">#{index + 1}</span>
                      <button className="remove-btn" onClick={() => removeProject(proj.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="form-grid">
                      <div className="builder-field">
                        <label>Project Name</label>
                        <input
                          type="text"
                          value={proj.name}
                          onChange={(e) => updateProject(proj.id, 'name', e.target.value)}
                          placeholder="E-Commerce Platform"
                        />
                      </div>
                      <div className="builder-field">
                        <label>Technologies</label>
                        <input
                          type="text"
                          value={proj.technologies}
                          onChange={(e) => updateProject(proj.id, 'technologies', e.target.value)}
                          placeholder="React, Node.js, MongoDB"
                        />
                      </div>
                      <div className="builder-field full-width">
                        <label>Project Link</label>
                        <input
                          type="text"
                          value={proj.link}
                          onChange={(e) => updateProject(proj.id, 'link', e.target.value)}
                          placeholder="github.com/johndoe/project"
                        />
                      </div>
                    </div>
                    <div className="builder-field full-width">
                      <label>Description</label>
                      <textarea
                        value={proj.description}
                        onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
                        placeholder="Describe the project, your role, and key achievements..."
                        rows="3"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Live Preview */}
        {showPreview && (
          <div className="builder-preview">
            <div className="preview-label">Live Preview</div>
            <div className="preview-scroll">
              <div className="resume-paper" ref={resumeRef}>
                {/* Header */}
                <div className="resume-header">
                  <h1 className="resume-name">{personal.fullName || 'Your Name'}</h1>
                  {personal.title && <p className="resume-title">{personal.title}</p>}
                  <div className="resume-contact">
                    {personal.email && (
                      <span><Mail size={12} /> {personal.email}</span>
                    )}
                    {personal.phone && (
                      <span><Phone size={12} /> {personal.phone}</span>
                    )}
                    {personal.location && (
                      <span><MapPin size={12} /> {personal.location}</span>
                    )}
                  </div>
                  <div className="resume-links">
                    {personal.linkedin && (
                      <span><Linkedin size={12} /> {personal.linkedin}</span>
                    )}
                    {personal.github && (
                      <span><Github size={12} /> {personal.github}</span>
                    )}
                    {personal.website && (
                      <span><Globe size={12} /> {personal.website}</span>
                    )}
                  </div>
                </div>

                {/* Summary */}
                {personal.summary && (
                  <div className="resume-section">
                    <h2 className="resume-section-title">Professional Summary</h2>
                    <p className="resume-summary">{personal.summary}</p>
                  </div>
                )}

                {/* Experience */}
                {experience.length > 0 && (
                  <div className="resume-section">
                    <h2 className="resume-section-title">Work Experience</h2>
                    {experience.map(exp => (
                      <div key={exp.id} className="resume-entry">
                        <div className="resume-entry-header">
                          <div>
                            <h3>{exp.position || 'Position'}</h3>
                            <p className="resume-company">{exp.company || 'Company'}</p>
                          </div>
                          <span className="resume-date">
                            {exp.startDate || 'Start'} - {exp.current ? 'Present' : (exp.endDate || 'End')}
                          </span>
                        </div>
                        {exp.description && (
                          <p className="resume-description">{exp.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Education */}
                {education.length > 0 && (
                  <div className="resume-section">
                    <h2 className="resume-section-title">Education</h2>
                    {education.map(edu => (
                      <div key={edu.id} className="resume-entry">
                        <div className="resume-entry-header">
                          <div>
                            <h3>{edu.degree || 'Degree'}{edu.field ? ` in ${edu.field}` : ''}</h3>
                            <p className="resume-company">{edu.institution || 'Institution'}</p>
                          </div>
                          <div className="resume-date-group">
                            <span className="resume-date">
                              {edu.startDate || 'Start'} - {edu.endDate || 'End'}
                            </span>
                            {edu.gpa && <span className="resume-gpa">GPA: {edu.gpa}</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills */}
                {skills.length > 0 && (
                  <div className="resume-section">
                    <h2 className="resume-section-title">Skills</h2>
                    <div className="resume-skills">
                      {skills.map((skill, i) => (
                        <span key={i} className="resume-skill">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects */}
                {projects.length > 0 && (
                  <div className="resume-section">
                    <h2 className="resume-section-title">Projects</h2>
                    {projects.map(proj => (
                      <div key={proj.id} className="resume-entry">
                        <div className="resume-entry-header">
                          <div>
                            <h3>{proj.name || 'Project Name'}</h3>
                            {proj.technologies && (
                              <p className="resume-tech">{proj.technologies}</p>
                            )}
                          </div>
                          {proj.link && (
                            <span className="resume-date">{proj.link}</span>
                          )}
                        </div>
                        {proj.description && (
                          <p className="resume-description">{proj.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Empty state */}
                {!personal.fullName && experience.length === 0 && education.length === 0 &&
                  skills.length === 0 && projects.length === 0 && (
                  <div className="resume-empty">
                    <FileText size={48} strokeWidth={1} />
                    <p>Start filling in your details to see your resume come to life!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
