import BlogList from "../components/blog/BlogList";
import BlogCard from "../components/blog/BlogCard";

export default function Blog() {
    const posts = [
      {
        id: 1,
        title: "The Future of AI in College Innovation",
        slug: "future-of-ai-innovation",
        excerpt: "Explore how artificial intelligence is shaping the landscape of college innovation and entrepreneurship.",
        author: "Dr. Sarah Johnson",
        date: "January 20, 2025",
        readTime: 5,
        categories: ["AI", "Innovation"],
        image: "/api/placeholder/600/400"
      },
      {
        id: 2,
        title: "Building Successful Student Startups",
        slug: "student-startup-guide",
        excerpt: "A comprehensive guide to launching and growing your startup while still in college.",
        author: "John Smith",
        date: "January 18, 2025",
        readTime: 8,
        categories: ["Startups", "Entrepreneurship"],
        image: "/api/placeholder/600/400"
      },
      {
        id: 3,
        title: "Robotics Workshop Highlights",
        slug: "robotics-workshop-2025",
        excerpt: "Key takeaways from our recent robotics workshop featuring industry experts.",
        author: "Emma Davis",
        date: "January 15, 2025",
        readTime: 6,
        categories: ["Robotics", "Events"],
        image: "/api/placeholder/600/400"
      }
      // Add more blog posts as needed
    ];
  
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Innovation Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay updated with the latest in innovation, technology, and entrepreneurship. 
              Read insights from students, faculty, and industry experts.
            </p>
          </div>
        </section>
  
        {/* Featured Post Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
            <BlogCard post={posts[0]} />
          </div>
        </section>
  
        {/* Blog List Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
            <BlogList posts={posts} />
          </div>
        </section>
      </div>
    );
  }