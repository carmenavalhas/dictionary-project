import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";



export default function Results(props) {
  if (props.results) {
    return (
    <div className="Results">
      <section>
      <h2 className="the-word">{props.results.word}</h2>
       {props.results.phonetics.map(function 
       (phonetic, index) {
        return (
          <div key={index}>
            <Phonetic phonetic={phonetic} />
          </div>
        );
       })}
       </section>       
      {props.results.meanings.map(function
      (meaning, index) {
        return (
          <div key={index}>
           <section>
            <Meaning meaning={meaning} />
            </section>
          </div>
        );
      })}
      </div>
      );
  } else {
      return null;
  } 
}