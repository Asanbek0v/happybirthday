import { FC } from "react";
import "./Location.scss";

const Location: FC = () => {
  // Өзүңүздүн 2GIS дарегиңиздин кыскартылган шилтемеси
  const tgisLink = "https://go.2gis.com/Or3Zw";

  return (
    <section id="Location">
      <div className="container">
        <div className="location-block">
          
          {/* Картанын баш сөз бөлүгү төмөндөн өйдө жай көтөрүлүп чыгат */}
          <div 
            className="location-block__header"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="location-block__subtitle">МЕСТО ВСТРЕЧИ</span>
            <h2 className="location-block__title">Атакулова Курманбубу</h2>
            <p className="location-block__address">
              ул. Атакулова Курманбубу, дом 1 (A-frame дом)
            </p>
          </div>

          {/* 
             Бүтүндөй карта зонасы жумшак чоңоюп (zoom-in) ачылат.
             data-aos-duration="1200" картанын жайыраак жана кооз ачылышын камсыз кылат.
          */}
          <a
            href={tgisLink}
            target="_blank"
            rel="noopener noreferrer"
            className="location-block__map-wrapper"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            {/* Итерактивдүү Google Карта */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.349793848491!2d74.64694407595057!3d42.717486571161935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38994be4cb441a51%3A0x972e31575df256c7!2sAframe.Arashan!5e0!3m2!1sru!2skg!4v1784478083350!5m2!1sru!2skg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>

            {/* Картаны басууга шарт түзүүчү жана iframe'ди жаап туруучу тунук катмар */}
            <div className="location-block__map-overlay"></div>

            {/* 2GIS баскычы карта ачылгандан кийин оң жактан жумшак жылып кирет */}
            <div 
              className="location-block__2gis-btn"
              data-aos="fade-left"
              data-aos-delay="800"
              data-aos-anchor="#Location" // Анимация ушул блокко скролл болгондо эле даяр турат
            >
              Открыть в 2GIS
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M14 3h7v7h-2V6.41l-9 9L8.59 14l9-9H14V3zm-2 11H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7v2z" />
              </svg>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Location;