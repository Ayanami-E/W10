import { useEffect, useState } from 'react'
import '../styles/about.css'  

interface Post {
  id: number
  title: string
  body: string
}

const About = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [visibleCount, setVisibleCount] = useState(12)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
    fetchPosts()
  }, [])

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 12)
  }

  return (
    <div data-testid="pg-about">
      <div className="grid-container">
        {posts.slice(0, visibleCount).map(post => (
          <div key={post.id} className="grid-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      {visibleCount < posts.length && (
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <button onClick={handleShowMore}>Show more</button>
        </div>
      )}
    </div>
  )
}

export default About
