import React, { useState } from "react";
import { useEffect } from "react";
import './Nav.css'

function Nav() {

    const [show, setShow] = useState(false)
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                setShow(true)
            }else{
                setShow(false)
            }
        })
        return function removing () {
            window.removeEventListener("scroll",removing)
        }
    }, [])
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netflix Logo"
        className="nav_logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/120px-Netflix-avatar.png?20201013161117"
        alt="Smiley Logo"
        className="nav_avatar"
      />
    </div>
  );
}

export default Nav;
