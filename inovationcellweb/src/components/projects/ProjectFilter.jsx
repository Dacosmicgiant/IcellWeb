export default function ProjectFilter({ filters, activeFilters, onFilterChange }) {
    const categories = [
      { id: 'all', label: 'All Projects' },
      { id: 'web', label: 'Web Development' },
      { id: 'mobile', label: 'Mobile Apps' },
      { id: 'ai', label: 'AI/ML' },
      { id: 'iot', label: 'IoT' },
      { id: 'robotics', label: 'Robotics' }
    ];
  
    const statuses = [
      { id: 'all', label: 'All Statuses' },
      { id: 'in-progress', label: 'In Progress' },
      { id: 'completed', label: 'Completed' }
    ];
  
    return (
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
          />
        </div>
  
        {/* Category Filter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onFilterChange('category', category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors
                  ${filters.category === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
  
        {/* Status Filter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Status</h3>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status.id}
                onClick={() => onFilterChange('status', status.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors
                  ${filters.status === status.id 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {status.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }