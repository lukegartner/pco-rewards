import { pcoImg } from "../utils/images";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileSummary = () => {
  const { user, isAuthenticated } = useAuth0();
  const isUser = isAuthenticated && user;
  console.log(user);
  return (
    <section className="profile-summary-section">
      <div className="profile-summary-info">
        <h2>{isUser ? user.nickname : "user"}</h2>
        <img src={isUser ? user.picture : pcoImg} alt="profile picture" />
        <p>327pts</p>
      </div>
      <div className="profile-summary-history-container">
        <div className="prev-history">
          <p>last earn</p>
          <h4>March 26, 2023</h4>
          <p>Shakopee Sunday</p>
          <p>100pts</p>
        </div>
        <div className="next-history">
          <p>next earn</p>
          <h4>April 26, 2023</h4>
          <p>Lakeville Sunday</p>
          <p>100pts</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSummary;
