import { Github, ExternalLink, Users } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex items-center gap-3 mb-4">
          <Users size={18} className="text-gray-500" />
          <div className="flex -space-x-2">
            {project.team.map((member, index) => (
              <img 
                key={index}
                src={member.avatar}
                alt={member.name}
                title={member.name}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {project.liveDemo && (
              <a 
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          <span className="text-sm text-gray-500">
            {project.status}
          </span>
        </div>
      </div>
    </div>
  );
}
