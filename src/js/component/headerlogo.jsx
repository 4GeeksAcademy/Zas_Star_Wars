import React from 'react'
 import { Link } from 'react-router-dom';




export const Headerlogo = () => {
  return (
    <div className='container d-flex justify-content-center mt-5'>
           <Link to="/">
          <img
            className="navbar-logo animate__animated animate__zoomIn"
            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
          />
        </Link>
    </div>
  )
}
export default Headerlogo;
