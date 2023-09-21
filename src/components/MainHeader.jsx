import React from 'react'
import partnerLogo1 from '../assets/img/logo 1.svg';
import partnerLogo2 from '../assets/img/logo 2.svg';
import partnerLogo3 from '../assets/img/logo 3.svg';
import partnerLogo4 from '../assets/img/logo 4.svg';
import partnerLogo5 from '../assets/img/logo 5.svg';
import homePhoto1 from '../assets/img/tour-img/home-1.jpg';
import '../pages/Main.css';

const MainHeader = () => {
  return (
    <section>
    <section className="header__sections">
        <section className="header__left">
          <h1 className="header__left__heading">
            The world's largest chain of travel agencies is Best Western
          </h1>
          <p className="header__left__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit
            sed pretium, egestas sed sit orem ipsum dolor sit amet
          </p>
        </section>
      </section>
      <section className="header__right">
        <img src={homePhoto1} alt="girl in canoe" />
      </section>
      <section className="header__partners">
        <ul className="header__partners__list">
          <li><img src={partnerLogo1} alt="partner-1"/></li>
          <li><img src={partnerLogo2} alt="partner-2"/></li>
          <li><img src={partnerLogo3} alt="partner-3"/></li>
          <li><img src={partnerLogo4} alt="partner-4"/></li>
          <li><img src={partnerLogo5} alt="partner-5"/></li>
        </ul>
      </section>
      </section>
  )
}

export default MainHeader