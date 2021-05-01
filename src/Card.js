import React from 'react';
import './Card.css';

const Card = ({ name, email, phone, id }) => {
  return (
    <div className='container'>
      <div className='card fl w-third ba br3 grow'>
        <img
          className='kittenImg'
          src={`https://robohash.org/${id}?set=set4`}
          alt='A cute kitten'
        />
        <p className='f3'>{name}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>

    </div>
  );
}

export default Card;