import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../../types/User";
import "./UserProfile.css";
import { toast } from "react-toastify";

const UserProfile = ({
  setActiveUserId,
}: {
  setActiveUserId: Dispatch<SetStateAction<number>>;
}) => {
  const params = useParams();
  const userId = params?.id;
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    if (userId && isNaN(parseInt(userId))) {
      toast.error('Invalid userId')
      navigate('/');
      return;
    } else if (!userId) {
      return;
    }
    setLoading(true);
    setActiveUserId(+userId);
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        toast.error('Failed to fetch user profile')
      } finally{
        setLoading(false);
      }
    };
    fetchUsers();
  }, [userId, setActiveUserId, navigate]);

  return (
    <div className="profile-container">
      <div className="profile-details-container">
        <h1>User Profile</h1>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <div className="profile-details">
            <p>
              Name: <span>{user?.name}</span>
            </p>
            <p>
              Username: <span>{user?.username}</span>
            </p>
            <p>
              Email: <span>{user?.email}</span>
            </p>
            <p>
              Address:{" "} 
              <span>
                {user?.address.street}{" "}
                {user?.address.suite}{" "}
                {user?.address.city}{" "}
                {user?.address.zipcode}
              </span>
            </p>
            <p>
              Phone: <span>{user?.phone}</span>
            </p>
            <p>
              Website: <span>{user?.website}</span>
            </p>
            <p>
              Company: <span>{user?.company.name}</span>
            </p>
            <div className="button-container">
              <button onClick={()=> navigate(`/users/${userId}/activity`)} className="user-activity-btn">View User Posts</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
