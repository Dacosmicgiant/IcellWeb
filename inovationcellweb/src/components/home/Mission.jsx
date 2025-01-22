export default function Mission() {
    const missions = [
      {
        title: "Innovation Hub",
        description: "A space where creativity meets technology. Our innovation hub provides state-of-the-art facilities for prototyping and experimentation.",
        icon: "🚀"
      },
      {
        title: "Mentorship",
        description: "Connect with industry experts and experienced innovators who guide you through your entrepreneurial journey.",
        icon: "👥"
      },
      {
        title: "Collaboration",
        description: "Work with like-minded individuals and form teams to tackle real-world challenges through innovative solutions.",
        icon: "🤝"
      }
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering students to innovate and create solutions that make a difference in the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission) => (
              <div key={mission.title} 
                   className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl 
                            transition-shadow duration-300">
                <div className="text-4xl mb-4">{mission.icon}</div>
                <h3 className="text-xl font-bold mb-3">{mission.title}</h3>
                <p className="text-gray-600">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  