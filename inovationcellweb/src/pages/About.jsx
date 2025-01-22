import Team from "../components/about/Team";
import Gallery from "../components/about/Gallery";

export default function About() {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto text-center">
              The Innovation Cell is a student-led initiative focused on fostering creativity, 
              entrepreneurship, and technological innovation within our college community. 
              We provide resources, mentorship, and opportunities for students to turn their 
              ideas into reality.
            </p>
          </div>
        </section>
  
        {/* Vision & Mission */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To become a leading hub of innovation and entrepreneurship, nurturing the next 
                  generation of changemakers who will solve real-world problems through technology 
                  and creativity.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To provide students with the resources, mentorship, and opportunities they need 
                  to develop innovative solutions, build successful startups, and make a positive 
                  impact on society.
                </p>
              </div>
            </div>
          </div>
        </section>
   */}
        {/* Team Component */}
        <Team />
  
        {/* Gallery Component */}
        <Gallery />
      </div>
    );
  }