import React from 'react';
import { footer } from './data';
import logo from '../assets/logo.svg';

function antCloudFooter() {
  const children = footer.map((item, i) => (
    <div key={i}>
      <a href={item.src}>{item.text}</a>
    </div>
  ));
  return (
    <div>
      <div className="logo" key="logo">
        <img src={logo} width="72" height="82" alt="Neuro Bangla Logo" />
      </div>
      <div key="nav" className="home-footer-nav-wrapper">
        {children}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="home-layout-wrapper home-footer-wrapper">
      <div className="home-layout">
        {antCloudFooter()}
        <p key="cop" className="copy">
          Copyright © {new Date().getFullYear()} Neuro Bangla | All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
