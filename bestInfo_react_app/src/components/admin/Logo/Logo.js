import React from 'react';

// webpack handles the image with a module added to webpack config  and it will handle the image
// and copy it over to the destination directory it creates only in memory during development
// and will optimize  the image. The burgerLog will receive the path of the image where webpack will copy it to.
import companyLogo from '../../admin/assets/images/BestInfoLogo.png';
import './Logo.css';

const Logo = () => (
  <div className='Logo-container'>
    <img src={companyLogo} alt="companyLogo" />
  </div>
);

export default Logo;
