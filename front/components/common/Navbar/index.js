"use client";
import Link from 'next/link';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import classes from './navbar.module.scss';
import Collapse from 'react-bootstrap/Collapse';
import { useRouter } from 'next/router';
import navbarData from '@/service/constants/navbar';
const logo = require('../../../assets/images/logo-4.png');


export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [color, setColor] = useState('transparent');
  const router = useRouter();

  useEffect(() => {
    const listenScrollEvent = (e) => {
      if (window.scrollY > 50) {
        setColor('#14689b');
      } else {
        setColor('transparent');
      }
    };
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const handleScroll = (e, title) => {
    if (title === 'SEND ENQUIRY') {
      e && e.preventDefault();
      const ele = document.getElementById('EnquiryForm');
      if (ele) {
        window.scrollTo({
          top: ele.offsetTop - 60,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${classes.navbar}`}
      style={{ background: showMenu ? 'rgb(20, 104, 155)' : color }}
    >
      <div className="container-fluid">
        <div className={classes.navbarHeader}>
          <Link href="/home" className={classes.navbarBrand}>
              <Image className="img-fluid" src={logo} alt="toshniwal-logo" />
          </Link>
          <button
            type="button"
            className={`navbar-toggler ${
              showMenu ? classes.closeIcon : classes.navbarHamburger
            }`}
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <span className={classes.srOnly}>Toggle navigation</span>
            <span className={`${classes.iconBar} ${classes.topBar}`}></span>
            <span className={`${classes.iconBar} ${classes.middleBar}`}></span>
            <span className={`${classes.iconBar} ${classes.bottomBar}`}></span>
          </button>
          <Collapse in={showMenu} dimension="height">
            <div
              id="navbarScroll"
              className={`collapsed navbar-collapse ${classes.navlist}`}
            >
              <ul className={`navbar-nav ms-auto my-2 my-lg-0 ${classes.menu}`}>
                {navbarData.map((navItem) => {
                  return (
                    <li
                      key={navItem.title}
                      className={`nav-item ${navItem.submenu && 'dropdown'} ${
                        classes.navItem
                      }`}
                    >
                      <Link
                        aria-current="page"
                        href={navItem?.path ? navItem?.path : '#'}
                        className={`nav-link active ${classes.link} ${
                          navItem.submenu && 'dropdown-toggle'
                        }`} onClick={(e) => handleScroll(e, navItem.title)}
                      >
                          {navItem.title}
                      </Link>
                      {navItem.submenu && (
                        <ul className={`dropdown-menu ${classes.show}`}>
                          {navItem.submenu?.map((sub) => {
                            return (
                              <li key={sub.title}>
                                <a className={`dropdown-item ${classes[sub.class]}`} >
                                  {sub.title}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Collapse>
        </div>
      </div>
    </nav>
  );
}
