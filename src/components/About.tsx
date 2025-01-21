import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Post {
  id: number;
  title: string;
  body: string;
}

const About = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { t } = useTranslation();

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
    <div>
      <h2>{t('About')}</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
