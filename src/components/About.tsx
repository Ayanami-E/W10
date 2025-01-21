import { useEffect, useState } from 'react';
import '../style/About.css';

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
      <div className="grid-container">
        {posts.map(post => (
          <div key={post.id} className="grid-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
