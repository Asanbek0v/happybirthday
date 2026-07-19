import { FC } from "react";
import "./InvitationInfo.scss";
import bg from "@/src/assets/aframe.jpg";

const InvitationInfo: FC = () => {
  return (
    <section id="InvitationInfo">
      <div className="container">
        <div className="info-grid">
          
          {/* Сол жактагы тексттер блогу */}
          <div className="info-grid__left">
            {/* Башкы сөз солдон оңго карай чыгат */}
            <h2 
              className="info-grid__title"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Присоединяйтесь к нам в <br />
              этот <span className="gold-text">особенный летний</span> <br />
              вечер
            </h2>

            {/* Сүрөттөмө текст бир аз кечигип чыгат */}
            <p 
              className="info-grid__description"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Дорогие друзья и близкие! Я буду искренне рад видеть вас на
              праздновании моего дня рождения. Впереди вечер, наполненный
              смехом, историями и моментами, которые останутся в памяти. Жду вас
              в уютном A-frame доме!
            </p>

            {/* Бөлүүчү сызык ортосунан эки жакка жайылгандай эффект берет */}
            <hr 
              className="info-grid__divider" 
              data-aos="zoom-in"
              data-aos-delay="400"
            />

            {/* Кошумча маалыматтар (Качан, Дресс-код) төмөндөн өйдө көтөрүлүп чыгат */}
            <div className="info-grid__details">
              <div 
                className="info-grid__detail-item"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span className="label">КОГДА</span>
                <p className="value">Вторник, 17:00</p>
              </div>

              <div 
                className="info-grid__detail-item"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <span className="label">ДРЕСС-КОД</span>
                <p className="value">Ваша улыбка и отличное настроение</p>
              </div>
            </div>
          </div>

          {/* Оң жактагы сүрөт бөлүгү */}
          <div className="info-grid__right">
            {/* 
               Сүрөт оң тараптан жумшак кирип келет.
               data-aos-duration="1200" менен сүрөттүн чыгыш убактысын бир аз жайыраак кылдык.
            */}
            <div
              className="info-grid__image-wrapper"
              style={{ backgroundImage: `url(${bg.src})` }}
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1200"
            ></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default InvitationInfo;