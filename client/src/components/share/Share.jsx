import { useContext, useRef, useState } from "react"
import "./share.css"
import axios from "axios"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
import { AuthContext } from "../../context/AuthContext"

function Share() {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef();
    const [file, setFile] = useState(null)

    const submitHandler = async(e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if(file){
            const data = new FormData();
            data.append("file", file);
            try{ 
                var res = await axios.post("http://localhost:8800/api/upload", data);
                newPost.img = res.data.name;
                window.location.reload()
            }catch(err){
                console.log(err)
            }
        }

        try{
            await axios.post("http://localhost:8800/api/posts", newPost)
        }catch(err){}
    }

  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImage" src={user.profilePicture ? PF + user.profilePicture : PF+"person/noavatar.svg"} alt="" />
                <input className="shareInput" ref={desc} placeholder={user.username + " düşüncelerini bizimle paylaş."}/>
            </div>
            <hr className="shareHr"/>
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Foroğraf veya Video</span>
                        <input style={{display: "none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])} />
                    </label>
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
                <button className="shareButton" type="submit">Paylaş</button>
            </form>
        </div>
    </div>
  )
}

export default Share