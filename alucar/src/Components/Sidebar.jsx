//import '../../../Project_Files/CSS/patterns.css'
import './Components_styles/Sidebar.css'
import { LuCalendarCheck } from "react-icons/lu"
import { FaTelegramPlane } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { useContext } from 'react'
import { userContext } from '../Context/userContext'

function Sidebar() {
  const { loggedUser } = useContext(userContext)
  return(
    <>
      <div className="sidebar">
        <div className="user-container">
          <p>São Paulo - SP</p>
          <img src="./src/assets/1h.png" alt="imagem do usuário" />
          <h3>{loggedUser.name}</h3>
          <p className='since'><LuCalendarCheck /><span>Membro desde 2024</span></p>
        </div>
        <div className="like-container">
          <div className="liked">
            <p><span>Curtiu</span> <span className='like-number'>42</span></p>
          </div>
          <div className="likes">
            <p><span>Curtidas</span> <span className='like-number'>210</span></p>
          </div>
        </div>
        <p className="avaliation">Avaliações (120)</p>
        <div className="icons">
          <FaTelegramPlane />
          <FaWhatsapp />
          <FaInstagram />
        </div>
      </div>
    </>
  )
}

export default Sidebar