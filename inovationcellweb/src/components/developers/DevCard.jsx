import { Github, Linkedin, Mail, Globe } from 'lucide-react';

export default function DevCard({ developer }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={developer.image} 
          alt={developer.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{developer.name}</h3>
          <p className="text-primary font-medium">{developer.role}</p>
        </div>
      </div>
      
      <div className="p-6">
        {/* Skills */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {developer.skills.map((skill) => (
              <span 
                key={skill}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-600 mb-4">{developer.bio}</p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          {developer.github && (
            <a 
              href={developer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {developer.linkedin && (
            <a 
              href={developer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
          {developer.email && (
            <a 
              href={`mailto:${developer.email}`}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          )}
          {developer.portfolio && (
            <a 
              href={developer.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Globe size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}