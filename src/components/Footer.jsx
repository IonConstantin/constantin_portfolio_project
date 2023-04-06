import React from "react";

const Footer = () => {
  return (
    <div className='footer'>
      <a
        href='https://www.linkedin.com/feed/?trk=onboarding-landing'
        target='_blank'
        rel='noreferrer'
      >
        <button className='footerbutton'>
          <i class='fa-brands fa-linkedin-in fa-beat-fade'></i>
        </button>
      </a>

      <a
        href='https://www.facebook.com/matache.i.constantin'
        target='_blank'
        rel='noreferrer'
      >
        <button className='footerbutton'>
          <i class='fa-brands fa-facebook-f fa-beat-fade'></i>
        </button>
      </a>

      <a
        href='https://github.com/IonConstantin'
        target='_blank'
        rel='noreferrer'
      >
        <button className='footerbutton'>
          <i class='fa-brands fa-github fa-beat-fade'></i>
        </button>
      </a>
    </div>
  );
};

export default Footer;
