import { Github, Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Faculty Advisor",
      image: "/api/placeholder/300/300",
      bio: "Ph.D. in Innovation Management with 15 years of experience in guiding student projects.",
      social: {
        linkedin: "#",
        github: "#",
        email: "sarah@example.com"
      }
    },
    {
      name: "John Smith",
      role: "Student Lead",
      image: "/api/placeholder/300/300",
      bio: "Final year Computer Science student passionate about AI and machine learning.",
      social: {
        linkedin: "#",
        github: "#",
        email: "john@example.com"
      }
    },
    {
      name: "Emma Davis",
      role: "Innovation Manager",
      image: "/api/placeholder/300/300",
      bio: "Specializes in project management and startup incubation.",
      social: {
        linkedin: "#",
        github: "#",
        email: "emma@example.com"
      }
    },
    // Add more team members as needed
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Team</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Meet the dedicated individuals who make innovation possible at our college.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.linkedin} className="text-gray-600 hover:text-primary">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.github} className="text-gray-600 hover:text-primary">
                    <Github size={20} />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-primary">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
