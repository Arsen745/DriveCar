import './Section.css'
import Logo from '../../assets/Logo.png'
import Vector from '../../assets/Vector.png'
import Button from '@mui/material/Button';
import { ButtonBase } from '@mui/material';


const Section = () => {
  return (
    <div style={{ backgroundImage: `url(${Logo})` }} className="container-section">
      <Button variant="outlined">Primary</Button>
      <ButtonBase/>

      <div className="cards">
        <div className="text">
          <h1>Наши услуги</h1>
        </div>
        <div className="card-content">

          <div className="card">
            <div className="icon">
              <img src={Vector} alt="" />
            </div>
            <div className="text-card">
              <h2>Оценка автомобиля</h2>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={Vector} alt="" />
            </div>
            <div className="text-card">
              <h2>Подготова к продаже </h2>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={Vector} alt="" />
            </div>
            <div className="text-card">
              <h2>Комиссионная продажа</h2>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={Vector} alt="" />
            </div>
            <div className="text-card">
              <h2>Консультатция по рынку</h2>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <img src={Vector} alt="" />
            </div>
            <div className="text-card">
              <h2>-Обмен старого автомобиля на новый с доплатой</h2>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={Vector} alt="" />
            </div>
            <div className="text-card">
              <h2>Фотосъемка и создание объявления</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section