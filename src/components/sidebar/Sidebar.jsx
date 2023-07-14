import { RssFeed, Chat, VideoCall, GroupWork, Bookmarks, ContactSupport, Event } from "@material-ui/icons";
import "./sidebar.css"
import CloseFriends from "../closeFriends/CloseFriends";
import {Users} from "../../dummyData"

function Sidebar() {
    return (
      <div className="sideBarContainer">
        <div className="sideBarWrapper">

            <ul className="sideBarList">
              <li className="sideBarListItem">
                <RssFeed className="sideBarIcon"/>
                <span className="sideBarListItemText">Feeds</span>
              </li>
              <li className="sideBarListItem">
                <Chat className="sideBarIcon"/>
                <span className="sideBarListItemText">Chats</span>
              </li>
              <li className="sideBarListItem">
                <VideoCall className="sideBarIcon"/>
                <span className="sideBarListItemText">Videos</span>
              </li>
              <li className="sideBarListItem">
                <GroupWork className="sideBarIcon"/>
                <span className="sideBarListItemText">Groups</span>
              </li>
              <li className="sideBarListItem">
                <Bookmarks className="sideBarIcon"/>
                <span className="sideBarListItemText">Bookmarks</span>
              </li>
              <li className="sideBarListItem">
                <ContactSupport className="sideBarIcon"/>
                <span className="sideBarListItemText">Contact Us</span>
              </li>
              <li className="sideBarListItem">
                <Event className="sideBarIcon"/>
                <span className="sideBarListItemText">Bookmarks</span>
              </li>
            </ul>

            <button className="sideBarButton">Show more</button>
            
            <hr className="sideBarHR" />

            <ul className="FriendList">
              {Users.map(u => 
                <CloseFriends key={u.id} user={u}/>
              )}
            </ul>

        </div>
      </div>
    )
}

export default Sidebar
