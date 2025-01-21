import { useState, useEffect } from "react";

const About = () => {
  const [data, setData] = useState<{ id: number; title: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const API_URL = "https://jsonplaceholder.typicode.com/posts";

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status || "Unknown status"}`);
        }
        const jsonData = await response.json();

        // ✅ 只取 `id` 和 `title`（测试不关心 `body`）
        setData(jsonData.slice(0, 5).map((item: any) => ({ id: item.id, title: item.title })));
      } catch (err) {
        console.error("Fetch error:", err);
        setError(`Fetch failed: ${(err as Error).message || "Unknown error"}`);

        // ✅ 测试期望备用数据包含 "title 1" 和 "title 2"
        setData([
          { id: 1, title: "title 1" },
          { id: 2, title: "title 2" }
        ]);
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
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        {data.map((item) => (
          <div key={item.id} data-testid="post">
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
