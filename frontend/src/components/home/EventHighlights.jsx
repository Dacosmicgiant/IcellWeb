export default function EventHighlights() {
    const events = [
      {
        title: "Innovation Hackathon 2025",
        date: "March 15-16, 2025",
        image: "/api/placeholder/400/200",
        description: "48-hour hackathon focused on solving real-world problems through technology."
      },
      {
        title: "Startup Weekend",
        date: "April 5-7, 2025",
        image: "/api/placeholder/400/200",
        description: "Turn your idea into a minimum viable product in just 54 hours."
      },
      {
        title: "Tech Talk Series",
        date: "Every Wednesday",
        image: "/api/placeholder/400/200",
        description: "Weekly sessions with industry experts on emerging technologies."
      }
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us in our upcoming events and be part of the innovation journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.title} 
                   className="rounded-xl overflow-hidden bg-white shadow-lg 
                            hover:shadow-xl transition-shadow duration-300">
                <img src={event.image} 
                     alt={event.title} 
                     className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-primary font-semibold mb-3">{event.date}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold
                           hover:bg-opacity-90 transition-all">
              View All Events
            </button>
          </div>
        </div>
      </section>
    );
  }