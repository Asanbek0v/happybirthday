import { FC } from "react";
import "./Hero.scss";

const Hero: FC = () => {
  return (
    <section id="Hero">
      {/* 
         Арткы карта бир аз чоңоюп (zoom-in) чыгат.
         data-aos-duration менен бул элементке өзгөчө убакыт берсек болот.
      */}
      <div 
        className="Hero__card"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        {/* Арткы кооз фондук катмар */}
        <div className="Hero__bg-overlay"></div>
        
        <div className="Hero__content">
          {/* Субтитр жогорудан ылдый түшөт */}
          <span 
            className="Hero__subtitle"
            data-aos="fade-down"
            data-aos-delay="300" // 300мс кечигет
          >
            ПРИГЛАШЕНИЕ НА СОБЫТИЕ
          </span>

          {/* Аты негизги убакытта (delay'сиз) "zoom" болуп чыгат */}
          <h1 
            className="Hero__title"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            Дастан
          </h1>

          {/* Дата блогу төмөндөн өйдө чыгат */}
          <div 
            className="Hero__date-wrapper"
            data-aos="fade-up"
            data-aos-delay="600" // Баарынан кеч чыгат
          >
            <span className="Hero__line"></span>
            <p className="Hero__date">21 Июля</p>
            <span className="Hero__line"></span>
          </div>
        </div>
        
        {/* Скролл иконкасы эң аягында акырын пайда болот */}
        <div 
          className="Hero__scroll"
          data-aos="fade-in"
          data-aos-delay="1000"
          data-aos-anchor="#Hero" // Анимация ушул секторго киргенде эле башталсын
        >
          <span>ЛИСТАЙТЕ ВНИЗ</span>
          <div className="Hero__scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;