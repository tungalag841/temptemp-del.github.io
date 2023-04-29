import React from "react";
import Logo from '../assets/logo.png'
import { MdPlace, MdPhone } from 'react-icons/md'
import { TiMail } from 'react-icons/ti'

import './footer.css'

const Footer = () => {

  return (
    <div>
      <div className='footer'>
        <div className='footer__content-logo'>
          <figure className='footer__content-logo_figure'>
            <img className='footer__content-logo_img' src={Logo} alt='NoLogo' />
          </figure>
        </div>

        <div className='footer__content_infos'>
          <div className='footer__content-info'>
            <div className='footer__icon-bg'>
              <MdPhone size={25} color='white' />
            </div>

            <span className='footer__text'>
              88112045
              <br />
              99768575
            </span>
          </div>

          <div className='footer__content-info'>
            <div className='footer__icon-bg'>
              <TiMail size={25} color='white' />
            </div>

            <span className='footer__text'> bestinfo@gmail.com</span>
          </div>

          <div className='footer__content-info'>
            <div className='footer__icon-bg'>
              <MdPlace size={25} color='white' />
            </div>

            <span className='footer__text'>
              Монгол улс, Улаанбаатар хот, <br /> Сүхбаатар дүүрэг, Ерөнхий сайд{' '}
              <br /> Амарын гудамж-3, ТВ-9 телевизийн <br /> байр, 1 давхар
            </span>
          </div>
        </div>
      </div>

      <div className='copy-rigth'>
        <div className='copy-rigth__content'>
          <font>
            © Зохиогчийн эрх хуулиар хамгаалагдсан. Мэдээлэл хуулбарлах
            хориотой.
          </font>
        </div>
      </div>
    </div>
  )
}

// function Footer() {
//   return (
//     // <footer>
//     //   <div className='footer'>
//     //     <div className='footer__content-logo'>
//     //       <figure className='footer__content-logo_figure'>
//     //         <img className='footer__content-logo_img' src={Logo} alt='NoLogo' />
//     //       </figure>
//     //     </div>

//     //     <div className='footer__content_infos'>
//     //       <div className='footer__content-info'>
//     //         <div className='footer__icon-bg'>
//     //           <MdPhone size={25} color='white' />
//     //         </div>

//     //         <span className='footer__text'>
//     //           88112045
//     //           <br />
//     //           99768575
//     //         </span>
//     //       </div>

//     //       <div className='footer__content-info'>
//     //         <div className='footer__icon-bg'>
//     //           <TiMail size={25} color='white' />
//     //         </div>

//     //         <span className='footer__text'> bestinfo@gmail.com</span>
//     //       </div>

//     //       <div className='footer__content-info'>
//     //         <div className='footer__icon-bg'>
//     //           <MdPlace size={25} color='white' />
//     //         </div>

//     //         <span className='footer__text'>
//     //           Монгол улс, Улаанбаатар хот, <br /> Сүхбаатар дүүрэг, Ерөнхий сайд{' '}
//     //           <br /> Амарын гудамж-3, ТВ-9 телевизийн <br /> байр, 1 давхар
//     //         </span>
//     //       </div>
//     //     </div>
//     //   </div>

//     //   <div className='copy-rigth'>
//     //     <div className='copy-rigth__content'>
//     //       <font>
//     //         © Зохиогчийн эрх хуулиар хамгаалагдсан. Мэдээлэл хуулбарлах
//     //         хориотой.
//     //       </font>
//     //     </div>
//     //   </div>
//     // </footer>

//     <div>
//       <h1>helllooooooooooooo</h1>
//     </div>
//   )
// }

export default Footer
