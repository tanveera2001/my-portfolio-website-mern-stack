import { useEffect, useState } from "react";

import WorkExperienceCard from "../../components/WorkExperienceCard";
import CertificationCard from "./../../components/CertificationCard";
import EducationCard from "../../components/EducationCard";
import api from "../../services/api";
import TimelineCard from "../../components/TimelineCard";

const AboutPage = () => {
  // Tools
  const [tools, setTools] = useState([]);
  const [toolsLoading, setToolsLoading] = useState(true);
  const [toolsError, setToolsError] = useState(null);

  // Education
  const [education, setEducation] = useState([]);
  const [eduLoading, setEduLoading] = useState(true);
  const [eduError, setEduError] = useState(null);

  // Work Experience
  const [workExperience, setWorkExperience] = useState([]);
  const [workLoading, setWorkLoading] = useState(true);
  const [workError, setWorkError] = useState(null);

  // Certifications
  const [certifications, setCertifications] = useState([]);
  const [certLoading, setCertLoading] = useState(true);
  const [certError, setCertError] = useState(null);

  // Fetch tools
  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await api.get("/api/tools-technologies");
        setTools(response.data);
      } catch (error) {
        setToolsError("Failed to load tools/technologies.");
      } finally {
        setToolsLoading(false);
      }
    };
    fetchTools();
  }, []);

  // Fetch education
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await api.get("/api/education");
        setEducation(response.data);
      } catch (error) {
        setEduError("Failed to load education.");
      } finally {
        setEduLoading(false);
      }
    };
    fetchEducation();
  }, []);

  // Fetch work experience
  useEffect(() => {
    const fetchWorkExperience = async () => {
      try {
        const response = await api.get("/api/work-experience");
        setWorkExperience(response.data);
      } catch (error) {
        setWorkError("Failed to load work experience.");
      } finally {
        setWorkLoading(false);
      }
    };
    fetchWorkExperience();
  }, []);

  // Fetch certifications
  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await api.get("/api/certifications");
        setCertifications(response.data);
      } catch (error) {
        setCertError("Failed to load certifications.");
      } finally {
        setCertLoading(false);
      }
    };
    fetchCertifications();
  }, []);

  return (
    <div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8 h-auto bg-gray-50 text-gray-900 py-10">

      {/* Resume */}
      <section>
        <h2 className="text-4xl font-bold mb-10">📋 Resume</h2>
        <a
          href={`${import.meta.env.VITE_API_URL}/pdfs/1753468137231-tanveer-resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 shadow-md"
        >
          ↗️ View Resume
        </a>
      </section>

      {/* Tools/Technology */}
      <section className="mt-20">
        <h2 className="text-4xl font-bold mb-6">🛠 Tools/Technology</h2>
        {toolsLoading ? (
          <p className="text-gray-500">Loading tools...</p>
        ) : toolsError ? (
          <p className="text-red-500">{toolsError}</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {tools.map((tool) => (
              <div key={tool._id} className="flex items-center bg-gray-300 rounded-xl shadow p-3">
                <img
                  src={`${import.meta.env.VITE_API_URL}/${tool.image}`}
                  alt={tool.name}
                  className="w-8 h-8 mr-3"
                />
                <div>
                  <p className="font-medium">{tool.name}</p>
                  <p className="text-sm text-gray-500">{tool.exp}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Work Experience */}
      <section className="mt-20">
        <h2 className="text-4xl font-bold mb-6">💻 Work Experience</h2>
        {workLoading ? (
          <p className="text-gray-500">Loading work experience...</p>
        ) : workError ? (
          <p className="text-red-500">{workError}</p>
        ) : (
          <TimelineCard>
            {workExperience.map((exp) => (
              <WorkExperienceCard
                key={exp._id}
                date={`${exp.startDate} - ${exp.endDate}`}
                role={exp.role}
                company={exp.company}
                location={exp.location}
                logo={`${import.meta.env.VITE_API_URL}/${exp.image}`}
                points={exp.points}
              />
            ))}
          </TimelineCard>
        )}
      </section>

      {/* Education */}
      <section className="mt-20">
        <h2 className="text-4xl font-bold mb-6">🎓 Education</h2>
        {eduLoading ? (
          <p className="text-gray-500">Loading education...</p>
        ) : eduError ? (
          <p className="text-red-500">{eduError}</p>
        ) : (
          <TimelineCard>
            {education.map((edu) => (
              <EducationCard
                key={edu._id}
                date={`${edu.startDate} - ${edu.endDate}`}
                degree={edu.degree}
                university={edu.institution}
                location={edu.location}
                logo={`${import.meta.env.VITE_API_URL}/${edu.image}`}
              />
            ))}
          </TimelineCard>
        )}
      </section>

      {/* Certifications */}
      <section className="mt-20">
        <h2 className="text-4xl font-bold mb-6">📜 Certifications</h2>
        {certLoading ? (
          <p className="text-gray-500">Loading certifications...</p>
        ) : certError ? (
          <p className="text-red-500">{certError}</p>
        ) : (
          <TimelineCard>
            {certifications.map((cert) => (
              <CertificationCard
                key={cert._id}
                name={cert.name}
                issuer={cert.issuer}
                logo={`${import.meta.env.VITE_API_URL}/${cert.image}`}
              />
            ))}
          </TimelineCard>
        )}
      </section>
    </div>
  );
};

export default AboutPage;
