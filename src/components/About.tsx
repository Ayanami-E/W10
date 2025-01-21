import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const About = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div data-testid="pg-about">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {posts.map(post => (
          <div 
            key={post.id} 
            className="bg-gray-100 p-4 border border-gray-300 rounded-lg text-center shadow hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
