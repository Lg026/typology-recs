import React, { useState } from 'react';
import { questions } from './questions';
import { recoMovies } from './movies';
import MovieCards from './MovieCards';
import Bargraph from './Bargraph';
import testStyles from '../styles/test.module.scss';

const Jungtest: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [functionCount, setFunctionCount] = useState<Record<string, number>>({
    'Ni': 0,
    'Ne': 0,
    'Te': 0,
    'Ti': 0,
    'Fe': 0,
    'Fi': 0,
    'Se': 0,
    'Si': 0
  });

  const handleClick = (type: string) => {
    setFunctionCount(prevCount => ({
      ...prevCount,
      [type]: prevCount[type] + 1
    }));
    setCurrentQuestion(currentQuestion + 1);
  };

  const getHighestFunction = (): string => {
    return Object.entries(functionCount).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  };

  const highestFunction = getHighestFunction();

  return (
    <>
      {currentQuestion < 15 ? (
        <div className={testStyles.questionsDiv}>
          <h2>Question: {currentQuestion + 1}</h2>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].answers.map((e, index) => (
              <li key={index} onClick={() => handleClick(e.type)}>{e.text}</li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <h2 className={testStyles.scoreIntro}>Your cognitive type is {highestFunction}</h2>
          <div className={testStyles.chartContainer}>
            <Bargraph data={functionCount} />
          </div>
          <p className={testStyles.funcdesc}>{recoMovies[highestFunction][0].funcDescription}</p>
          <h2 className={testStyles.recoheader}>Here are some recommended movies</h2>
          <div>
            {recoMovies[highestFunction].map((movie, index) => (
              <MovieCards
                key={index}
                title={movie.title}
                description={movie.description}
                imageUrl={movie.imageUrl}
                imdbLink={movie.imdbLink}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Jungtest;














