import React from 'react'
import IMAGES from '../Assets/index.js';
// import pic1 from '../Assets/pic1.jpg';



function Profile() {
    console.log(IMAGES);
  return (
      <div>
          <img src={IMAGES.pic1} alt=""  />
    </div>
  )
}

export default Profile