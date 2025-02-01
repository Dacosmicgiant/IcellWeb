import DevCard from '../components/developers/DevCard';

export default function Developers() {
  const developers = [
    {
      name: "Alex Turner",
      role: "Lead Developer",
      image: "/api/placeholder/400/400",
      skills: ["React", "Node.js", "Python", "AWS"],
      bio: "Full-stack developer with a passion for building scalable web applications and mentoring junior developers.",
      github: "https://github.com/alexturner",
      linkedin: "https://linkedin.com/in/alexturner",
      email: "alex@innovationcell.edu",
      portfolio: "https://alexturner.dev"
    },
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      image: "/api/placeholder/400/400",
      skills: ["React", "TypeScript", "Tailwind CSS", "UI/UX"],
      bio: "Creative developer focused on building beautiful and intuitive user interfaces with modern web technologies.",
      github: "https://github.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      email: "sarah@innovationcell.edu",
      portfolio: "https://sarahchen.dev"
    },
    {
      name: "Marcus Rodriguez",
      role: "Backend Developer",
      image: "/api/placeholder/400/400",
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      bio: "Backend specialist with expertise in building robust APIs and managing database architectures.",
      github: "https://github.com/marcusrod",
      linkedin: "https://linkedin.com/in/marcusrod",
      email: "marcus@innovationcell.edu",
      portfolio: "https://marcusrod.dev"
    },
    {
      name: "Priya Patel",
      role: "Mobile Developer",
      image: "/api/placeholder/400/400",
      skills: ["React Native", "Flutter", "Firebase", "iOS/Android"],
      bio: "Mobile app developer passionate about creating seamless cross-platform experiences.",
      github: "https://github.com/priyapatel",
      linkedin: "https://linkedin.com/in/priyapatel",
      email: "priya@innovationcell.edu",
      portfolio: "https://priyapatel.dev"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Developers</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The talented team behind Innovation Cell's technical success. Our developers bring diverse 
            skills and expertise to create innovative solutions.
          </p>
        </div>
      </section>

      {/* Team Stats Section
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">15k+</div>
              <div className="text-gray-600">Lines of Code</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Developers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developers.map((developer) => (
              <DevCard key={developer.name} developer={developer} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Development Team</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you passionate about coding and innovation? We're always looking for talented 
            developers to join our team.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold 
                         hover:bg-opacity-90 transition-all inline-flex items-center gap-2">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}