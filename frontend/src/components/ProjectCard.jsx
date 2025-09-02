const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="rounded-xl p-[2px] bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 transition-transform hover:scale-105">
      <div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between">
        
        {/* Title + Description */}
        <div className="mb-4 flex-1 overflow-hidden">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-5">{description}</p>
        </div>

        {/* View Project link */}
        <div>
          <a
            href={link}
            className="text-blue-600 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project ➡️
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
