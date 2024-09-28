import '../styles/Button.css';
import React from 'react';

function Button({ title, img, link }) {
  const data = {
    title: title,
    img: img,
    link: link
  };

  return (
    <div>
      <img src={data.img} alt='Error' />
      {data.title}
    </div>
  );
}

export default Button