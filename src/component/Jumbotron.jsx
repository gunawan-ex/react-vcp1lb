import React from 'react';
import '../css/Jumbotron.css';

export default function Jumbotron() {
  return (
    <>
    	<div className="bg-jumb cont">
        <h3 className="judul">HELLO JUMBOTRON</h3>
        <p className="paraf">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quasi fugiat velit repudiandae voluptatibus quisquam consectetur. Sit voluptatum culpa deleniti!</p>
        <div>
          <button className="btn btn-primary me-1">LOGIN</button>
          <button className="btn btn-warning ms-1">REGISTRASI</button>
        </div>
      </div>
    </>
  )
}