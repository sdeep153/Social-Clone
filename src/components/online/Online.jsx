import React from 'react'
import "./online.css"

function Online({user}) {
  return (
    <React.Fragment>
      <li className="rightBarFriend">
          <div className="rightBarProfileImgComtainer">
              <img src={user.profilePicture} alt="" className="rightBarProfileImg" />
              <span className="rightBarOnline"></span> 
          </div>
          <span className="rightBarUsername">{user.username}</span>
      </li>
    </React.Fragment>
  )
}

export default Online
