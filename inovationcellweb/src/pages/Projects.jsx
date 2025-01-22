import { useState } from 'react';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectGrid from '../components/projects/ProjectGrid';

export default function Projects() {
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    status: 'all'
  });

  const projects = [
    {
      id: 1,
      title: "Smart Campus IoT System",
      description: "IoT-based system for monitoring and managing campus resources efficiently.",
      tags: ["IoT", "Python", "React"],
      image: "/api/placeholder/600/400",
      status: "in-progress",
      github: "https://github.com/example/smart-campus",
      liveDemo: "https://smart-campus.example.com",
      team: [
        { name: "John Doe", avatar: "/api/placeholder/32/32" },
        { name: "Jane Smith", avatar: "/api/placeholder/32/32" }
      ]
    },
    {
      id: 2,
      title: "AI Student Assistant",
      description: "AI-powered chatbot to help students with common queries and academic guidance.",
      tags: ["AI/ML", "NLP", "Python"],
      image: "/api/placeholder/600/400",
      status: "completed",
      github: "https://github.com/example/ai-assistant",
      liveDemo: "https://ai-assistant.example.com",
      team: [
        { name: "Alex Johnson", avatar: "/api/placeholder/32/32" },
        { name: "Sarah Brown", avatar: "/api/placeholder/32/32" }
      ]
    },
    // Add more projects as needed
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         project.description.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCategory = filters.category === 'all' || project.tags.some(tag => 
      tag.toLowerCase().includes(filters.category.toLowerCase())
    );
    const matchesStatus = filters.status === 'all' || project.status === filters.status;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover innovative projects developed by our students, showcasing creativity 
            and technical excellence in solving real-world problems.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <ProjectFilter 
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
            
            {/* Projects Grid */}
            <div className="lg:col-span-3">
              {filteredProjects.length > 0 ? (
                <ProjectGrid projects={filteredProjects} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    No projects found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}