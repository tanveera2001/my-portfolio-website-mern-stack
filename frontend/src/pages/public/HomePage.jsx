import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import ProjectCard from "../../components/ProjectCard";
import api from "../../services/api";

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8 h-auto bg-gray-50 text-gray-900 py-10">

      {/* Header Section */}
      <header className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start">
        {/* Left side: text */}
        <div className="mt-6 md:mt-0">
          <h1 className="text-4xl font-bold text-center md:text-left">Tanveer Ahmed</h1>
          <p className="mt-2 text-lg text-gray-600 text-center md:text-left">Full-Stack Web Developer</p>
          <p className="mt-4 max-w-2xl">
            I’m a determined, extroverted person full of enthusiasm. I enjoy
            working hard and collaborating with others. I am currently studying
            Computer Science and Engineering (CSE) at North South University.
            Additionally, I have three years of experience in web development.
            My goal is to continually improve my technical and communication
            skills.
          </p>

          {/* Social icons */}
          <div className="mt-6 mb-3 flex items-center justify-between text-gray-500">
            <div className="flex items-center space-x-6">
              <a href="https://github.com/tanveera2001" target="_blank" rel="noreferrer" className="hover:text-gray-900">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/md-tanveer-ahmed-23b06023b/" target="_blank" rel="noreferrer" className="hover:text-blue-600">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://stackoverflow.com/users/20884813/md-tanveer-ahmed" target="_blank" rel="noreferrer" className="hover:text-orange-700">
                <FaStackOverflow className="w-6 h-6" />
              </a>
            </div>

            <div>
              <Link
                to="/about"
                className="px-6 py-3 border text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-200"
              >
                More Info
              </Link>
            </div>
          </div>
        </div>

        {/* Profile image */}
        <div className="md:mt-10 flex justify-center md:justify-end">
          <img
            src="/myphoto.jpeg"
            alt="profile"
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>
      </header>

      {/* Projects Section */}
      <section className="pt-10">
        <h2 className="text-3xl font-bold mb-2">✨Projects</h2>
        <p className="text-gray-600 mb-6">
          From code to creativity: my project journey
        </p>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-gray-500">Please wait, loading projects...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : projects.length > 0 ? (
            projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project._id}
                title={project.title}
                description={project.description}
                link={project.url}
              />
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>
        <div className="mt-5">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 border text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-200"
          >
            See More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
