import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-primary min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Innovate. Create. Transform.
          </h1>
          <p className="text-xl mb-8">
            Join the college innovation cell and be part of the next big breakthrough. 
            Transform your ideas into reality with our resources and mentorship.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold 
                           flex items-center gap-2 hover:bg-opacity-90 transition-all">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold
                           hover:bg-white hover:text-primary transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 
                    bg-gradient-to-t from-white to-transparent"/>
    </div>
  );
}