import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
    <div className="Results">
      <section>
      <h2 className="the-word">{props.results.word}</h2>
      {props.results.meanings.map(function(meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
      </section>
      </div>
      );
  } else {
      return null;
  } 
}