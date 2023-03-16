import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImage" src="assets/person/1.jpeg" alt="" />
                <input className="shareInput" placeholder="Düşüncelerini paylaş..."/>
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Foroğraf veya Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Etiket</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Konum</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Hissettiklerin</span>
                    </div>
                </div>
                <button className="shareButton">Paylaş</button>
            </div>
        </div>
    </div>
  )
}

export default Share