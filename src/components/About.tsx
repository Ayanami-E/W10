import { useState, useEffect } from "react";

const About = () => {
  // 用于存储 API 数据
  const [data, setData] = useState<{ id: number; title: string; body: string }[]>([]);
  const [loading, setLoading] = useState(true);  // 是否正在加载
  const [error, setError] = useState<string | null>(null);  // 错误状态

  useEffect(() => {
    // API 地址（使用 JSONPlaceholder 测试 API）
    const API_URL = "https://jsonplaceholder.typicode.com/posts";

    // 发起请求
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData); // 更新数据状态
        setLoading(false); // 加载完成
      })
      .catch((err) => {
        setError(err.message); // 记录错误信息
        setLoading(false);
      });
  }, []); // 依赖数组为空，确保只在组件挂载时运行

  return (
    <div>
      <h2>About Page</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div>
        {data.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
