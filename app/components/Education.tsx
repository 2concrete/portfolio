const Education = () => {
  return (
    <div className="lg:text-right md:text-left">
      <p className="text-2xl mb-5">education</p>
      <div className="flex flex-col gap-4">
        <span>
          <p className="text-lg">kolbe catholic college</p>
          <p className="text-sm opacity-80">
            academic excellence award <br />
          </p>
          <p className="text-xs opacity-50">2020-2025</p>
        </span>
        <span>
          <p className="text-lg">north metro tafe</p>
          <p className="text-sm opacity-80">diploma of full stack web dev</p>
          <p className="text-xs opacity-50">2026-present</p>
        </span>
      </div>
    </div>
  );
};

export default Education;
