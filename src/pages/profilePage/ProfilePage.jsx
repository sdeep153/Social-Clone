import React from 'react'
import "./profilePage.css"
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'

function profilePage() {
  return (
    <React.Fragment>
        <Topbar/>

        <div className="profilePageContainer">
          <Sidebar/>

          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src="/assets/post/8.jpeg" alt="" className="profileCoverImg" />
                <img src="/assets/post/10.jpeg" alt="" className="profilePictureImg" />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoUsername">Deep Singh</h4>
                <span className="profileInfoDesc">Hello!</span>
              </div>
            </div>

            <div className="profileRightBottom">
              <Feed/>
              <Rightbar profile/>
            </div>
          </div>
          
        </div>

      </React.Fragment>
  )
}

export default profilePage
