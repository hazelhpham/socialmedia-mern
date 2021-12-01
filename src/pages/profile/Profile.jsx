import "./profile.css";
import Topbar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/RightBar";

const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F9cover.com%2Fimages%2Fccovers%2F1365344189nature-green-trees-and-snow.jpg&f=1&nofb=1"
                alt=""
                className="profileCoverImg"
              />
              <img src="assets/7.jpeg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Hazel Huong Pham</h4>
              <span className="profileInfoDesc">Welcome to my world! </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
