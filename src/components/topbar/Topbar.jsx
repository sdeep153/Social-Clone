import { Chat, Notifications, Person, Search } from "@material-ui/icons"
import "./topbar.css"

function Topbar() {
  return (
    <div className = "topBarContainer">

        <div className="topBarLeft">
          <span className="logo">Social Site</span>
        </div>

        <div className="topBarCenter">
            <div className="searchBar">
              <Search className = "searchIcon"/>
              <input placeholder="Search anything" className="searchBarInput" />
            </div>
        </div>

        <div className="topBarRight">
          <div className="topBarLinks">
            <span className="topBarLink">Homepage</span>
            <span className="topBarLink">Timeline</span>
          </div>

          <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person/>
              <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat/>
              <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Notifications/>
              <span className="topBarIconBadge">1</span>
          </div>
            
        </div>

          <img src="/assets/person/4.webp" alt="" className="topBarImage" />
        </div>
    </div>
  )
}

export default Topbar

