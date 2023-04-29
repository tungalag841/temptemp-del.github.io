import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

import "./navigationItems.css"

const NavigationItems = ({hide}) => {
  return (
    <ul className="navItems">
      <div className="navItems__container">
        <div className="navItems__dropdown">
          <NavigationItem link="/" exact>
            <div className="navItems__title" >нүүр</div>
          </NavigationItem>
        </div>
        <div className="navItems__dropdown">
          <NavigationItem link="#">
            <div className="navItems__title" >мэдээ</div>
          </NavigationItem>
          <ul>
            <NavigationItem link={`/category/1`}>
              <div className="navItems__categories" onClick={()=>{window.location.replace('/category/1')}}>мэдээ</div>
            </NavigationItem>
            <NavigationItem link={`/category/2`}>
              <div className="navItems__categories" onClick={()=>{window.location.replace('/category/2')}}>ярилцлага</div>
            </NavigationItem>
            <NavigationItem link="/category/3">
              <div className="navItems__categories" onClick={()=>{window.location.replace('/category/3')}}>сурвалжилга</div>
            </NavigationItem>
            <NavigationItem link="/category/4">
              <div className="navItems__categories" onClick={()=>{window.location.replace('/category/4')}}>аян замын тэмдэглэл</div>
            </NavigationItem>
            <NavigationItem link="/video">
              <div className="navItems__categories" onClick={hide}>video live</div>
            </NavigationItem>
          </ul>
        </div>

        <div className="navItems__dropdown">
          <NavigationItem link="/category/6">
            <div className="navItems__title" onClick={()=>{window.location.replace('/category/6')}}>хөрөг найруулал</div>
          </NavigationItem>
        </div>

        <div className="navItems__dropdown">
          <NavigationItem link="#">
            <div className="navItems__title" >өмгөөлөгчийн лавлагаа</div>
          </NavigationItem>
          <ul>
            <NavigationItem link="/category/8">
              <div className="navItems__categories" onClick={()=>{window.location.replace('/category/8')}}>
                өмгөөлөгчийн зөвлөгөө
              </div>
            </NavigationItem>
            <div className="navItems__link" >
              <a href="http:www.ama.org.mn/өмгөөлөгчдийн-лавлагаа/" >
                <div className="navItems__categories">
                  өмгөөлөгчийн лавлагаа
                </div>
              </a>
            </div>
          </ul>
        </div>

        <div className="navItems__dropdown">
          <NavigationItem link="#">
            <div className="navItems__title">нийтлэл</div>
          </NavigationItem>
          <ul>
            <NavigationItem link="/category/9">
              <div className="navItems__categories" onClick={()=>{window.location.replace('/category/9')}}>
                асуудал дэвшүүлсэн өгүүлэл
              </div>
            </NavigationItem>
            <NavigationItem link="/category/10">
              <div className="navItems__categories" onClick={()=>{window.location.replace('/category/10')}}>нийтлэл</div>
            </NavigationItem>
          </ul>
        </div>

        <div className="navItems__dropdown">
          <NavigationItem link="#">
            <div className="navItems__title">утга зохиол</div>
          </NavigationItem>
          <ul>
            <NavigationItem link="/category/11">
              <div className="navItems__categories" onClick={()=>{window.location.replace('/category/11')}}>шүлэг, яруу найраг</div>
            </NavigationItem>
            <NavigationItem link="/category/12">
              <div className="navItems__categories" onClick={()=>{window.location.replace('/category/12')}}>өгүүллэг</div>
            </NavigationItem>
          </ul>
        </div>
      </div>
    </ul>
  );
}
export default NavigationItems;
