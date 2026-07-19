"use client";

import { FC, useState, useEffect } from "react";
import "./Header.scss";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        if (isScrolled) setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <section
      id="Header"
      className={isScrolled ? "scrolled" : ""}
      data-aos="fade-down"
    >
      <div className="container">
        <div className="Header">
          <h1 data-aos="fade-right" data-aos-delay="200">
            Дастан <span>.</span>
          </h1>

          <div className={`Header--block ${isOpen ? "active" : ""}`}>
            {/* Жаңы Next.js форматы: ашыкча <a> тегдери жана legacyBehavior алынып салынды */}
            <Link
              href="/#InvitationInfo"
              onClick={() => setIsOpen(false)}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Приглашение
            </Link>

            <Link
              href="#Location"
              onClick={() => setIsOpen(false)}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Место
            </Link>

            <Link
              href="#RSVP"
              onClick={() => setIsOpen(false)}
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Ответить
            </Link>

            <button className="Header--date-mobile">21 июля</button>
          </div>

          <button
            className="Header--date-desktop"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            21 июля
          </button>

          <div
            className={`Header--burger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="Header--overlay" onClick={() => setIsOpen(false)} />
      )}
    </section>
  );
};

export default Header;
