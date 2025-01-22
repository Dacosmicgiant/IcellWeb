export default function Map() {
    return (
      <div className="h-80 rounded-lg overflow-hidden shadow-lg">
        {/* Replace with actual Google Maps iframe */}
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <img 
            src="/api/placeholder/800/400" 
            alt="Location Map" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }