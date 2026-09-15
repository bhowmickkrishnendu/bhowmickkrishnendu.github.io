import { useEffect, useState } from "react";
import axios from "axios";
import { PROFILE } from "../data/content";

type Post = {
  title: string;
  link: string;
  pubDate: string;
  categories?: string[];
  content?: string;
};

const FEED =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@krishnendubhowmick";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatDate = (raw: string): string => {
  const d = new Date(raw.replace(" ", "T"));
  if (isNaN(d.getTime())) return raw;
  return `${String(d.getDate()).padStart(2, "0")} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
};

const topicOf = (post: Post): string => {
  const hay = `${post.title} ${(post.categories || []).join(" ")}`.toLowerCase();
  if (/kubernetes|k8s|eks|ingress|helm|cluster|pod/.test(hay)) return "Kubernetes";
  if (/\baws\b|s3|ec2|\biam\b|lambda|cloudwatch/.test(hay)) return "AWS";
  if (/cve|vulnerab|security|attack|exploit|rce|breach/.test(hay)) return "Security";
  if (/python|poetry|\bdns\b|script/.test(hay)) return "Python";
  if (/terraform|devops|ci\/cd|pipeline|docker|jenkins/.test(hay)) return "DevOps";
  return "Engineering";
};

const readTime = (post: Post): string => {
  const text = (post.content || "").replace(/<[^>]*>/g, " ").trim();
  const words = text ? text.split(/\s+/).length : 0;
  const mins = words ? Math.max(1, Math.round(words / 200)) : 5;
  return `${mins} min read`;
};

const Writing = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let live = true;
    axios
      .get(FEED)
      .then((res) => {
        if (!live) return;
        const items: Post[] = (res.data?.items || [])
          .filter((i: Post) => i.title && i.link && i.pubDate)
          .slice(0, 12);
        if (items.length === 0) setFailed(true);
        setPosts(items);
      })
      .catch(() => {
        if (live) setFailed(true);
      })
      .finally(() => {
        if (live) setLoading(false);
      });
    return () => {
      live = false;
    };
  }, []);

  return (
    <section data-step>
      <div className="wrap">
        <div className="sec-head" id="writing">
          <span className="label">Writing</span>
          <h2>Latest from Medium</h2>
          <p>
            Troubleshooting guides, AWS deep dives and security breakdowns, read by more than 50,000
            people.
          </p>
        </div>

        <div className="feedbar">
          <span className="live">
            <i></i> Live feed
          </span>
          <span className="src">{PROFILE.mediumHandle}</span>
          <a href={PROFILE.medium} target="_blank" rel="noopener noreferrer">
            All posts →
          </a>
        </div>

        {loading ? (
          <ul className="posts">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <li className="post post--skeleton" key={i} aria-hidden="true">
                <div className="post__in">
                  <span className="sk sk--tag"></span>
                  <span className="sk sk--line"></span>
                  <span className="sk sk--line sk--short"></span>
                </div>
              </li>
            ))}
          </ul>
        ) : failed ? (
          <p className="feed-fallback">
            The feed isn't responding right now.{" "}
            <a href={PROFILE.medium} target="_blank" rel="noopener noreferrer">
              Read the posts on Medium
            </a>
            .
          </p>
        ) : (
          <ul className="posts">
            {posts.map((post) => (
              <li className="post" key={post.link}>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <div className="post__in">
                    <span className="post__tag">{topicOf(post)}</span>
                    <span className="post__t">{post.title}</span>
                    <span className="post__meta">
                      <time dateTime={post.pubDate}>{formatDate(post.pubDate)}</time>
                      <span>{readTime(post)}</span>
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Writing;
