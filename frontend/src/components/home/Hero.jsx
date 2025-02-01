// src/components/home/Hero.jsx
import { ArrowRight } from 'lucide-react';

import '../../styles/components/animation.css'


export default function Hero() {
  return (
    <div className="hero-container">
      {/* Animated Background */}
      <div className="hero-background">
        {/* Animated Circles */}
        <div className="circles-container">
          <div className="floating-circle circle-1" />
          <div className="floating-circle circle-2" />
          <div className="floating-circle circle-3" />
        </div>

        {/* Moving Gradient Overlay */}
        <div className="gradient-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="content-wrapper">
          <h1 className="hero-title fade-in">
            Innovate. Create. Transform.
          </h1>
          <p className="hero-description fade-in delay-200">
            Join the college innovation cell and be part of the next big breakthrough. 
            Transform your ideas into reality with our resources and mentorship.
          </p>
          <div className="button-group fade-in delay-400">
            <button className="primary-button">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="secondary-button">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="bottom-fade" />
    </div>
  );
}