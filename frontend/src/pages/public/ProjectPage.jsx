import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import api from "../../services/api";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects from database
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

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-2">✨Projects</h2>
        <p className="text-gray-600 mb-6">
          From code to creativity: my project journey
        </p>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-gray-500">Please wait, loading projects...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : projects.length > 0 ? (
            projects.map((project) => (
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
      </section>
    </div>
  );
};

export default ProjectPage;
