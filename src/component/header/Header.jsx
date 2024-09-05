import rull from '../../assets/rull.svg'
import './header.css'
import elec from '../../assets/electr.svg'
import gaz from '../../assets/mdi_gasoline.svg'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div className="container">
      <header>
        <div className='header-head'>
          <div className='logo-head'>
            <img src={rull} alt="" />
            <h3>AUTO</h3>
          </div>
          <div className='ashka-head'>
            <NavLink to='/about'>
              О нас
            </NavLink>
            <NavLink to='/admin'>
              Админ часть
            </NavLink>
            <a href="#">О компании</a>
            <a href="#">Услуги</a>
          </div>
        </div>
        <div className='best-head'>
          <h1>ВЫБЕРИ ЛУЧШИЙ АВТОМОБИЛЬ</h1>
          <p>Bishkek, Kyrgyzstan</p>
        </div>

        <div className="all-head">
          <div className="electr">
            <img src={elec} alt="" />
            <p>Electric car</p>
          </div>
          <div className="start-head">
            Start
          </div>
          <div className='Gaz-head'>
            <img src={gaz} alt="" />
            <p>Hybrid Electric</p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header