import {React} from "react"
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

function rightbar({profile}) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
            <img src="/assets/birthday.jpg" alt="" className="birthdayImg" />
            <span className="birthdayText"> <b>Paula Bose</b> and <b>3 others</b> have a B'day today</span>
        </div>

        <img src="/assets/ad.png" alt="" className="rightBarAd" />
        
        <h4 className="rightBarTitle">Online Friends</h4>

        <ul className="rightBarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Info</h4>
        
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City :</span>
            <span className="rightBarInfoValue">Lucknow</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From :</span>
            <span className="rightBarInfoValue">India</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">House no :</span>
            <span className="rightBarInfoValue">SS 407</span>
          </div>

          <h4 className="rightBarTitle">Friends</h4>

          <div className="rightBarFollowers">
            <div className="rightBarFollower">
              <img src="/assets/post/1.jpeg" alt="" className="rightBarFollowerImg" />
              <span className="rightBarFollowerName">John Carter</span>
            </div>
            <div className="rightBarFollower">
              <img src="/assets/post/2.jpeg" alt="" className="rightBarFollowerImg" />
              <span className="rightBarFollowerName">John Carter</span>
            </div>
            <div className="rightBarFollower">
              <img src="/assets/post/3.jpeg" alt="" className="rightBarFollowerImg" />
              <span className="rightBarFollowerName">John Carter</span>
            </div>
            <div className="rightBarFollower">
              <img src="/assets/post/4.jpeg" alt="" className="rightBarFollowerImg" />
              <span className="rightBarFollowerName">John Carter</span>
            </div>
            <div className="rightBarFollower">
              <img src="/assets/post/5.jpeg" alt="" className="rightBarFollowerImg" />
              <span className="rightBarFollowerName">John Carter</span>
            </div>
            <div className="rightBarFollower">
              <img src="/assets/post/6.jpeg" alt="" className="rightBarFollowerImg" />
              <span className="rightBarFollowerName">John Carter</span>
            </div>
            <div className="rightBarFollower">
              <img src="/assets/post/7.jpeg" alt="" className="rightBarFollowerImg" />
              <span className="rightBarFollowerName">John Carter</span>
            </div>
            <div className="rightBarFollower">
              <img src="/assets/post/8.jpeg" alt="" className="rightBarFollowerImg" />
              <span className="rightBarFollowerName">John Carter</span>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  return (
    <div className="rightBarContainer">
        <div className="rightBarWrapper">
          {profile ? <ProfileRightBar/> : <HomeRightBar/>}
        </div>
    </div>
  )
}

export default rightbar
