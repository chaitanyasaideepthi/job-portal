
import "./FilterSidebar.css";

function FilterSidebar({
  filters,
  setFilters,
  onClearFilters,
}) {
  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const currentValues = prev[category];

      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [category]: updatedValues,
      };
    });
  };

  const handleLocationChange = (event) => {
    setFilters((prev) => ({
      ...prev,
      location: event.target.value,
    }));
  };

  const filterOptions = [
    {
      title: "Job Type",
      category: "jobType",
      options: ["Full-time", "Part-time", "Internship", "Contract"],
    },
    {
      title: "Experience Level",
      category: "experience",
      options: ["Fresher", "0-1 years", "1-3 years"],
    },
    {
      title: "Work Mode",
      category: "workMode",
      options: ["Remote", "Hybrid", "On-site"],
    },
  ];

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h2>Filters</h2>

        <button
          type="button"
          className="clear-filters"
          onClick={onClearFilters}
        >
          Clear All
        </button>
      </div>

      <div className="filter-group">
        <h3>Location</h3>

        <input
          type="text"
          placeholder="Enter city..."
          value={filters.location}
          onChange={handleLocationChange}
          className="location-input"
        />
      </div>

      {filterOptions.map((group) => (
        <div className="filter-group" key={group.category}>
          <h3>{group.title}</h3>

          {group.options.map((option) => (
            <label className="filter-option" key={option}>
              <input
                type="checkbox"
                checked={filters[group.category].includes(option)}
                onChange={() =>
                  handleCheckboxChange(group.category, option)
                }
              />

              <span>{option}</span>
            </label>
          ))}
        </div>
      ))}
    </aside>
  );
}

export default FilterSidebar;