import React, { useEffect, useState } from "react";
import axios from "axios";
import "./blog.css"; // Ensure you import your CSS styles here

type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  categories?: string[];
};

const Blog = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  // const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@krishnendubhowmick"
        );
        const items = res.data.items || [];
        const parsedPosts = items
          .filter((item: any) => item.title && item.link && item.pubDate)
          .map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            thumbnail: item.thumbnail,
            categories: item.categories || [],
          }))
          .slice(0, 12);
        setPosts(parsedPosts);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // const uniqueTags = Array.from(
  //   new Set(posts.flatMap((post) => post.categories || []))
  // );

  // const filteredPosts = activeTag
  //   ? posts.filter((post) => post.categories?.includes(activeTag))
  //   : posts;

  const filteredPosts = posts;

  // Loader Component
  const Loader = () => (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
      </div>
      <p className="loader-text">Loading amazing content...</p>
    </div>
  );

  return (
    <div className="blog-container">
      <h2 className="blog-title">📝 Latest from My Medium</h2>

      {/* Tag Filter - Commented out */}
      {/* {uniqueTags.length > 0 && (
        <div className="tag-filter">
          <button
            onClick={() => setActiveTag(null)}
            className={!activeTag ? "active" : ""}
          >
            All
          </button>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={activeTag === tag ? "active" : ""}
            >
              {tag}
            </button>
          ))}
        </div>
      )} */}

      {loading ? (
        <Loader />
      ) : (
        <ul className="blog-grid">
          {filteredPosts.map((post, idx) => (
            <li key={idx} className="blog-card">
              {post.thumbnail && (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="blog-thumbnail"
                />
              )}
              <div className="blog-content">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-link"
                >
                  {post.title}
                </a>
                <p className="blog-date">
                  {new Date(post.pubDate).toLocaleDateString()}
                </p>
                {/* Blog tags - Commented out */}
                {/* {post.categories && post.categories.length > 0 && (
                  <div className="blog-tags">
                    {post.categories.map((tag, i) => (
                      <span key={i} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )} */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blog;