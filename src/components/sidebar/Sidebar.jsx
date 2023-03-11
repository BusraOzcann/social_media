import "./sidebar.css"
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"
import {RssFeed, School, Event, WorkOutline, HelpOutline, Bookmark, Group, PlayCircleFilledOutlined, Message} from "@mui/icons-material"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
          <ul className="sidebarList">

            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon"/>
              <span className="sidebarListItemText">Akış</span>
            </li>

            <li className="sidebarListItem">
              <Message className="sidebarIcon"/>
              <span className="sidebarListItemText">Mesajlar</span>
            </li>

            <li className="sidebarListItem">
              <PlayCircleFilledOutlined className="sidebarIcon"/>
              <span className="sidebarListItemText">Videolar</span>
            </li>

            <li className="sidebarListItem">
              <Group className="sidebarIcon"/>
              <span className="sidebarListItemText">Gruplar</span>
            </li>

            <li className="sidebarListItem">
              <Bookmark className="sidebarIcon"/>
              <span className="sidebarListItemText">Kaydedilenler</span>
            </li>

            <li className="sidebarListItem">
              <HelpOutline className="sidebarIcon"/>
              <span className="sidebarListItemText">Sorular</span>
            </li>

            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon"/>
              <span className="sidebarListItemText">İşler</span>
            </li>

            <li className="sidebarListItem">
              <Event className="sidebarIcon"/>
              <span className="sidebarListItemText">Etkinlikler</span>
            </li>

            <li className="sidebarListItem">
              <School className="sidebarIcon"/>
              <span className="sidebarListItemText">Kurslar</span>
            </li>

          </ul>

          <button className="sidebarButton">Daha Fazla Göster</button>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">

            {Users.map(u => (
              <CloseFriend key={u.id} user={u}/>
            ))}
            
          </ul>
      </div>
    </div>
  )
}

export default Sidebar