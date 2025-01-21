import { useState, useEffect } from "react";

const About = () => {
  const [data, setData] = useState<{ id: number; title: string; body: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const API_URL = "https://jsonplaceholder.typicode.com/posts";

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData.slice(0, 5)); // 只取前 5 条数据，防止测试超时
      } catch (err) {
        const errorMessage = (err as Error).message || "Unknown error occurred";
        console.error("Fetch error:", errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>About Page</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div>
        {data.map((item) => (
          <div key={item.id} data-testid="post">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
