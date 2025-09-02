const CertificationCard = ({ name, issuer, logo }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow p-4 sm:p-6 w-full">
      <div className="absolute -left-6 sm:-left-7 top-5 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 border-2 border-white"></div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
        <div className="flex-1 min-w-0 break-words">
          {name && <h3 className="text-base sm:text-lg font-semibold break-words">{name}</h3>}
          {issuer && <p className="text-sm sm:text-base text-gray-700 break-words">{issuer}</p>}
        </div>

        {logo && (
          <div className="flex-shrink-0 w-full sm:w-auto mt-3 sm:mt-0 flex justify-center sm:justify-end">
            <img src={logo} alt={issuer || "logo"} className="h-20 sm:h-24 w-auto object-contain" />
          </div>
        )}
      </div>
    </div>
  );
};
export default CertificationCard;
