
import EventList from "../components/events/EventList";

export default function Events() {
    const events = [
      {
        id: 1,
        title: "Innovation Hackathon 2025",
        description: "48-hour hackathon focused on solving real-world problems through technology.",
        date: "March 15-16, 2025",
        time: "9:00 AM - 9:00 AM",
        venue: "Main Campus, Innovation Hub",
        status: "upcoming",
        image: "/api/placeholder/600/400"
      },
      {
        id: 2,
        title: "Startup Weekend",
        description: "Turn your idea into a minimum viable product in just 54 hours.",
        date: "April 5-7, 2025",
        time: "6:00 PM - 9:00 PM",
        venue: "Engineering Block, Conference Hall",
        status: "upcoming",
        image: "/api/placeholder/600/400"
      },
      {
        id: 3,
        title: "AI Workshop Series",
        description: "Learn about artificial intelligence and machine learning fundamentals.",
        date: "Ongoing",
        time: "Every Wednesday, 5:00 PM",
        venue: "Virtual Event",
        status: "ongoing",
        image: "/api/placeholder/600/400"
      },
      {
        id: 4,
        title: "Tech Talk: Future of Innovation",
        description: "Industry experts discuss emerging technologies and future trends.",
        date: "January 15, 2025",
        time: "3:00 PM - 5:00 PM",
        venue: "Auditorium",
        status: "completed",
        image: "/api/placeholder/600/400"
      }
    ];
  
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Events & Programs</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join us for exciting events, workshops, and programs designed to foster innovation 
              and entrepreneurship in our college community.
            </p>
          </div>
        </section>
  
        {/* Events Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <EventList events={events} />
          </div>
        </section>
      </div>
    );
  }