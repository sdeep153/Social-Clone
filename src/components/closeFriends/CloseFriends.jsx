import React from 'react'
import "./closeFriends.css"

function CloseFriends({user}) {
  return (
    <React.Fragment>
        <li className="Friend">
            <img src={user.profilePicture} alt="" className="FriendImg" />
            <span className="FriendName">{user.username}</span>
        </li>
    </React.Fragment>
  )
}

export default CloseFriends
