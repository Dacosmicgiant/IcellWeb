import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import EventHighlights from '../components/home/EventHighlights';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <EventHighlights />
    </div>
  );
}