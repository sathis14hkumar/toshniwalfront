import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import logo from 'assets/images/logo-4.png'
import { FaPhoneSquareAlt, FaEnvelope } from "react-icons/fa"

const FooterComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.foot1}>
        <div className="row m-0">
          <div className="col-lg-3 col-md-12">
            <Image className={`img-fluid ${styles.footerImage}`} src={logo} alt="footer image" />
          </div>
          <div className={`col-lg-3 col-md-12 float-xl-start ${styles.contactContainer}`}>
            <h4 className={styles.contactUsTxt}>CONTACT US</h4>
            <p className={styles.address}>
              Toshniwal Instruments (Madras) Pvt. Ltd, 267, Kilpauk Garden Road
              Chennai, Tamil Nadu - 600 010 (India)
            </p>
          </div>
          <div className={`col-lg-3 col-md-12 ${styles.rdpartfoot}`}>
            <a href="tel:+914426445626"> <FaPhoneSquareAlt />&nbsp;+(91)-(44)-26445626/26448983 </a>
            <a href="tel:+914426448558">  <FaPhoneSquareAlt />&nbsp;+(91)-(44)-26448558</a>
            <a href="mailto:sales@toshniwal.net"> <FaEnvelope /> &nbsp;sales@toshniwal.net </a>
          </div>
          <div className={`col-lg-3 col-12 float-xl-start ${styles.translationlink}`}>
            <p>
              <a className="english" data-lang="English">
                <span className={styles.notranslate}>English</span>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="arabic" data-lang="Arabic">
                <span className={styles.notranslate}>العربية</span>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="german" data-lang="German">
                <span className={styles.notranslate}>Deutsch</span>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="spanish" data-lang="Spanish">
                <span className={styles.notranslate}>Espanõl</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.foot2}>
        <div className={styles.footer2}>
          <div className={styles.containerfluid}>
            <p>©Toshniwal - All Rights Reserved</p>
            <ul>
              <li>
                <a >Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
