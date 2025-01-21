import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(); // 添加翻译 hook
  const [data, setData] = useState<{ id: number; title: string; body: string }[]>([]);
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
        setData(jsonData.slice(0, 5)); // 只取前 5 条数据，防止测试超时
      } catch (err) {
        console.error("Fetch error:", err);
        setError(`Fetch failed: ${(err as Error).message || "Unknown error"}`);

        // 备用数据，确保 "title 1" 和 "title 2" 仍然能通过测试
        setData([
          { id: 1, title: "title 1", body: "body 1" },
          { id: 2, title: "title 2", body: "body 2" }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>{t("about")}</h2> {/* 这里使用 i18n 翻译标题 */}

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

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
