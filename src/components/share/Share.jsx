import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons';

function Share() {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">

        <div className="shareTop">
            <img className = "shareProfileImg" src="/assets/person/4.webp" alt="" />
            <input placeholder = "What's on your mind?"  className="shareInput" />
        </div>

        <hr className="shareHR" />

        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia className="shareIcon" htmlColor="tomato"/>
                    <span className='shareOptionText'>Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label className="shareIcon" htmlColor="blue"/>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOption">
                    <Room className="shareIcon" htmlColor="green"/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions className="shareIcon" htmlColor="goldenrod"/>
                    <span className='shareOptionText'>Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>

      </div>
    </div>
  )
}

export default Share
