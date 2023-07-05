import React from "react";


export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="text">{props.phonetic.text}</div>
    
    <figure className="d-flex justify-content-center">
    <audio className="mt-2"
        controls
        src={props.phonetic.audio}>
    </audio>
    </figure>

    </div>

    
  );

}