"use client";
import { FC, useState, FormEvent } from "react";
import "./Confirmation.scss";
import { ToastContainer, toast } from "react-toastify";

const Confirmation: FC = () => {
  const [name, setName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const TELEGRAM_BOT_TOKEN = "8727904747:AAG2ndoJpQ8xzDbCa6i20CWxqnxFahKyppk";
  const TELEGRAM_CHAT_ID = "@happyBirthdayDastan";

  const triggerSuccessToast = () => {
    toast.success("Замечательно! Ждем нашей встречи! ❤️", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSubmit = async (e: FormEvent, choice: string) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.info("Пожалуйста, введите ваше имя ✍️", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    if (choice === "decline") {
      toast.error("Не принимаем! Отказ не принимается 🙅‍♂️😘", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    setIsLoading(true);
    const statusText = "✅ Приду";
    const message = `🔔 *Новый ответ на приглашение!*\n\n👤 *Имя:* ${name}\n❓ *Статус:* ${statusText}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        },
      );

      if (response.ok) {
        triggerSuccessToast();
        setIsSubmitted(true);
      } else {
        toast.warning("Произошла ошибка при отправке. Попробуйте еще раз.", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Ошибка:", error);
      toast.warning("Не удалось связаться с сервером. Проверьте интернет.", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="Confirmation">
      <ToastContainer />

      <div className="container">
        {/* Бүтүндөй блок жумшак чоңоюп чыгат */}
        <div 
          className="confirm-block"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Баш сөз өйдөдөн ылдый түшөт */}
          <h2 
            className="confirm-block__title"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Подтвердите участие
          </h2>

          {!isSubmitted ? (
            <>
              <form className="confirm-block__form">
                {/* Инпут талаасы 300мс кечигүү менен өйдө көтөрүлөт */}
                <div 
                  className="confirm-block__input-wrapper"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="confirm-block__input"
                    disabled={isLoading}
                  />
                </div>

                {/* Баскычтар блогу дагы бир аз кечигип (400мс) өйдө жылат */}
                <div 
                  className="confirm-block__buttons"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, "attend")}
                    className="confirm-block__btn confirm-block__btn--accept"
                    disabled={isLoading}
                  >
                    {isLoading ? "ОТПРАВКА..." : "ПРИДУ"}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, "decline")}
                    className="confirm-block__btn confirm-block__btn--decline"
                    disabled={isLoading}
                  >
                    НЕ СМОГУ
                  </button>
                </div>
              </form>
            </>
          ) : (
            // Ийгиликтүү жөнөтүлгөндөгү блок анимациясыз эле дароо ачылганы жакшы (клиент күтпөшү үчүн)
            <div className="confirm-block__success">
              <div className="confirm-block__success-circle">
                <svg
                  viewBox="0 0 24 24"
                  className="confirm-block__success-icon"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <p className="confirm-block__success-text">
                Спасибо! Ответ записан.
              </p>
            </div>
          )}

          {/* Футер эң аягында акырын пайда болот */}
          <footer 
            className="confirm-block__footer"
            data-aos="fade-in"
            data-aos-delay="600"
            data-aos-anchor="#Confirmation"
          >
            Жду встречи, Дастан
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;