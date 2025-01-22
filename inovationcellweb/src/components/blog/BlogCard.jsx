import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((category) => (
            <span 
              key={category}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
        
        {/* Meta information */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4">{post.excerpt}</p>

        {/* Read More Link */}
        <Link 
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
        >
          Read More <ArrowRight size={18} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}