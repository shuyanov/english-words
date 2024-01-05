import React, { useState } from "react";
import styles from "./style.module.scss";
import { TArrWord } from "../../App";

type TCardProps = {
  word: TArrWord;
  handleClick: () => void;
  handleRestart: () => void;
};

export const Card = ({ word, handleClick }: TCardProps) => {
  const [answer, setAnswer] = useState("");

  const checkAnswers = (word: string, answer: string) => {
    if (word === answer) {
      handleClick();
      return true;
    } else {
      return false;
    }
  };

  const onChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <div className={styles.card}>
      <h3>{word?.word}</h3>
      <input onChange={onChangeAnswer}></input>
      <div>
        <button onClick={() => checkAnswers(word.translate, answer)}>
          Ответить
        </button>
        <button>Подсказать</button>
      </div>
    </div>
  );
};
