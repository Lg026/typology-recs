import React from 'react';
import cardStyles from '../styles/cards.module.scss';

interface MovieCardsProps {
  title: string
  description: string
  imageUrl: string
  imdbLink: string
}

const MovieCards: React.FC<MovieCardsProps> = ({ title, description, imageUrl, imdbLink }) => {
  return (
    <div className={cardStyles.cardContainer}>
      <a href={imdbLink} target='_blank'>
      <h2 className={cardStyles.title}>{title}</h2>
      <img className={cardStyles.imgs} src={imageUrl} alt={title} />
      <p>{description}</p>
      </a>
    </div>
  );
}

export default MovieCards;



