import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./Users.css";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/User";
import { toast } from "react-toastify";

const Users = ({activeUserId}:{activeUserId:number}) => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const navigate = useNavigate();
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activeUserId) {
      const tabIndex = users.findIndex((item) => item.id === activeUserId);
      itemsRef.current[tabIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeUserId, users]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Array<User>>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      toast.error('Failed to fetch users')
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="users-container">
      <h1>Users</h1>
      <div className="cards-container">
      {loading?<div className="loader"></div>:users.map((user, index) => {
        return (
          <div
            onClick={()=> navigate(`/users/${user.id}`)}
            key={user.id}
            className={activeUserId===user.id ? "user-card-div active" : "user-card-div"}
            ref={(elementRef) => itemsRef.current[index] = elementRef}
          >
            <div className="user-avatar"><h1>{user.name.charAt(0)}</h1></div>
            <div className="card-details">
            <p>{user.name}</p>
            <p>{user.email}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Users;
