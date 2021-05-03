import React from 'react';
import './CardList.css';
import Card from './Card';

const CardList = props => {
  return (
    <div className='CardList'>
      { props.kitties.map(kitty => {
          return (
            <Card
              key={kitty.id}
              id={kitty.id}
              name={kitty.name}
              email={kitty.email}
              phone={kitty.phone}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
