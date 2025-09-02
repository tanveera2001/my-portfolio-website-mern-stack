const WorkExperienceCard = ({ date, role, company, location, points, logo }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow p-4 sm:p-6 w-full">
      <div className="absolute -left-6 sm:-left-7 top-5 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 border-2 border-white"></div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
        <div className="flex-1 min-w-0 break-words">
          {date && <p className="text-sm text-gray-500">{date}</p>}
          {role && <h3 className="text-base sm:text-lg font-semibold break-words">{role}</h3>}
          {company && <p className="text-sm sm:text-base text-gray-700 break-words">{company}</p>}
          {location && <p className="text-xs sm:text-sm text-gray-500 break-words">{location}</p>}
        </div>

        {logo && (
          <div className="flex-shrink-0 mt-3 md:mt-0 w-full md:w-auto flex justify-center md:justify-end">
            <img src={logo} alt={company || "logo"} className="h-20 sm:h-24 w-auto object-contain" />
          </div>
        )}
      </div>

      {points && (
        <ul className="mt-3 sm:mt-4 list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkExperienceCard;
