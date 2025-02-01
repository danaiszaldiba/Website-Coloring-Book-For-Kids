import { Clock, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How Coloring Enhances Fine Motor Skills in Children',
    excerpt: 'Discover how regular coloring activities help develop crucial fine motor skills in young children.',
    content: 'Coloring helps children develop and strengthen the muscles in their fingers, hands, and wrists, which are crucial for writing, drawing, and other daily activities...',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3',
    date: 'March 15, 2024',
    category: 'Child Development',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'The Role of Coloring in Cognitive Development',
    excerpt: 'Learn how coloring activities stimulate brain development and enhance cognitive skills.',
    content: 'Coloring engages multiple areas of the brain, promoting focus, concentration, and pattern recognition skills...',
    image: 'https://images.unsplash.com/photo-1544767432-7035aadc5b96?ixlib=rb-4.0.3',
    date: 'March 12, 2024',
    category: 'Education',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'Color Recognition and Learning Through Art',
    excerpt: 'Understanding how coloring helps children learn and remember colors effectively.',
    content: 'Through coloring, children naturally learn to identify and differentiate colors, laying the foundation for advanced learning...',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3',
    date: 'March 10, 2024',
    category: 'Learning',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Creativity and Self-Expression in Children\'s Art',
    excerpt: 'How coloring fosters creativity and helps children express themselves.',
    content: 'Coloring provides a safe space for children to express their emotions and develop their unique creative voice...',
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3',
    date: 'March 8, 2024',
    category: 'Creativity',
    readTime: '5 min read'
  }
];

const Blog = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Coloring and Child Development
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Explore how coloring activities benefit your child\'s growth and development
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>{post.category}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="btn-secondary">Read More</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;