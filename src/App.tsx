import React, { useState } from "react";
import "./App.css";
import { Card } from "./Components/Card/Card";
import { AddCard } from "./Components/AddCard/AddCard";

export type TWord = {
  word: string;
  translate: string;
  tip: string;
};

const arrWord: TWord[] = [
  {
    word: "world",
    translate: "Мир",
    tip: "что-то",
  },
  {
    word: "Meat",
    translate: "Мясо",
    tip: "что-то",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const [addCardOpen, setAddCardOpen] = useState(false);
  const addNewWord = (word: TWord) => {
    if (!word) return;
    arrWord.push(word);
    console.log(arrWord);
  };

  const handleClick = () => {
    setIndex(index + 1);
  };

  const handleRestart = () => {
    setIndex(0);
  };

  const words = arrWord[index];

  return (
    <>
      {index <= arrWord.length - 1 ? (
        <>
          {addCardOpen ? (
            <AddCard
              onClose={() => setAddCardOpen(false)}
              addWord={addNewWord}
            />
          ) : (
            <>
              <Card
                word={words}
                handleClick={handleClick}
                handleRestart={handleRestart}
              />
              <button onClick={() => setAddCardOpen(!addCardOpen)}>
                Добавить слово
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <div>True!</div>
          <button onClick={() => handleRestart()}>Restart</button>
        </>
      )}
    </>
  );
}

export default App;
