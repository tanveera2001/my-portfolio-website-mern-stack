const TimelineCard = ({ children }) => {
  return (
    <div className="relative pl-4 sm:pl-5 border-l-2 border-gray-300 space-y-6 w-full">
      {children}
    </div>
  );
};

export default TimelineCard;
