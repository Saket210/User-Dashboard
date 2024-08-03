import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../types/Post";
import axios from "axios";
import "./UserActivities.css";
import { toast } from "react-toastify";

const UserActivities = () => {
  const params = useParams();
  const userId = params?.id;

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        setPosts(response.data);
      } catch (error) {
        toast.error('Failed to fetch user posts')
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [userId]);

  return (
    <div className="activity-container">
      <h1>User Posts</h1>
      {loading ? (
        <div className="loader"></div>
      ) : (
        posts.map((post) => {
          return (
            <div className="post-item-container" key={post.id}>
              <p className="post-title">Title: {post.title}</p>
              <p className="post-body">Body: {post.body}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UserActivities;
