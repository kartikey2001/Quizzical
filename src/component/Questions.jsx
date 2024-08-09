import React from "react";
import { decode } from "html-entities";
import './Questions.css'

export default function Questions({ ques }) {
    console.log({ques})
  return (
    <>
      {ques.map((pre) => {
        const newArr = []
        const { question ,correct_answer,incorrect_answers } = pre;
        for(let i = 0 ; i < incorrect_answers.length;i++){
            newArr.push(incorrect_answers[i])
        }
        newArr.push(correct_answer)
        const quest = decode(question);
        return (
            <><div className="Quest_s">{quest} </div>
            <div>{newArr}</div></>
      )})}
    </>
  );
}
