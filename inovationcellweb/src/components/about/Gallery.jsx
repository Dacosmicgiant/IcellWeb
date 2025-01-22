import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    {
      id: 1,
      src: "/api/placeholder/600/400",
      title: "Innovation Workshop 2024",
      description: "Students participating in our annual innovation workshop."
    },
    {
      id: 2,
      src: "/api/placeholder/600/400",
      title: "Startup Pitch Day",
      description: "Student entrepreneurs presenting their ideas to investors."
    },
    {
      id: 3,
      src: "/api/placeholder/600/400",
      title: "Maker Space",
      description: "Our state-of-the-art maker space facility."
    },
    {
      id: 4,
      src: "/api/placeholder/600/400",
      title: "Hackathon Winners",
      description: "Winners of our 2024 hackathon event."
    },
    {
      id: 5,
      src: "/api/placeholder/600/400",
      title: "Industry Visit",
      description: "Students visiting leading tech companies."
    },
    {
      id: 6,
      src: "/api/placeholder/600/400",
      title: "Project Exhibition",
      description: "Annual project showcase event."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Gallery</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Glimpses of our innovation journey and memorable moments.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer group relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-xl max-w-4xl w-full overflow-hidden" 
               onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-[60vh] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}