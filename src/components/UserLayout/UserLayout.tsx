import Users from "../Users/Users";
import './UserLayout.css'

const UserLayout = ({
  children,
  activeUserId,
}: {
  children: React.ReactNode;
  activeUserId: number;
}) => {
  return (
    <div className="dashboard-split-container">
      <Users activeUserId={activeUserId} />
      <div className="dashboard-routes">{children}</div>
    </div>
  );
};

export default UserLayout;
