import React from 'react';
import './CardList.css';
import Card from './Card';

const CardList = props => {
  return (
    <div className='CardList'>
      { props.kittens.map(kitten => {
          return (
            <Card
              id={kitten.id}
              name={kitten.name}
              email={kitten.email}
              phone={kitten.phone}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
