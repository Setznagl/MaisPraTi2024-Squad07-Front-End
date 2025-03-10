import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import alucarLogo from '../assets/AlucarLogo.png'
import './Components_styles/Navbar_style.css'
import personIcon from '../assets/person.png'
import lockIcon from '../assets/lock.png'

function Navbar() {
  const navigate = useNavigate()
  const goTo = (path) => {
    navigate(`/${path}`)
  }

    return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <div className="container-fluid">
          <img className='navbar-brand p-0' src={alucarLogo} alt="AluCar Logo" style={{ height: '80px' }}/>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className='d-flex flex-grow-1 justify-content-around' id='menuLinks'>
              <ul className="w-100 navbar-nav d-flex justify-content-around text-nowrap">
                <li className="nav-item">
                  <a className="nav-link" href="#encontre-seu-carro" id='link'>Encontre seu carro</a>
                </li>
                <li className='nav-item'>
                  <a className="nav-link" href="#como-funciona" id='link'>Como funciona</a>
                </li>
                <li className='nav-item'>
                  <a className="nav-link" href="#contato" id='link'>Contato</a>
                </li>
              </ul>
            </div>
              <div className="d-flex ms-auto" id='btnLinks'>
                  <button 
                    className="btn btn-dark me-2 rounded-1 d-flex align-items-center justify-content-center" 
                    id='btn1'
                    onClick={() => goTo('login')}>
                      <img className='me-2' src={personIcon} style={{ height: '15px' }}/>
                      Login
                    </button>
                  <button 
                    className="btn rounded-1 d-flex align-items-center justify-content-center" 
                    id='btn2'
                    onClick={() => goTo('cadastro')}>
                    <img className='me-2' src={lockIcon} style={{ height: '18px' }}/>
                    Cadastrar
                  </button>
              </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar