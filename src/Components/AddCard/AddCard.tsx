import React, { useState } from "react";
import styles from "./style.module.scss";
import { TWord } from "../../App";

type TProps = {
  onClose: () => void;
  addWord: (word: TWord) => void;
};

export const AddCard = ({ onClose, addWord }: TProps) => {
  const [newword, setNewWord] = useState({
    word: "",
    translate: "",
    tip: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof TWord
  ) => {
    setNewWord((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.inputContainer}>
        <h2>Добавить слово</h2>
        <span>Слово</span>
        <input onChange={(e) => handleInputChange(e, "word")} />
        <span>Перевод</span>
        <input onChange={(e) => handleInputChange(e, "translate")} />
        <span>Подсказка</span>
        <input onChange={(e) => handleInputChange(e, "tip")} />
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => addWord(newword)}>Добавить</button>
        <button onClick={onClose}>Отмена</button>
      </div>
    </div>
  );
};
