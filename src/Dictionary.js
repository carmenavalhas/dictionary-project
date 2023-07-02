import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }
 
  function search(event) {
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word={keyword}&key={key}`;
    let key = "442601ab0f43da939c1bto9077411c63";
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return <div className="Dictionary">
    <form onSubmit={search}>
      <input type="search" onChange={handleKeywordChange} />
    </form>
  </div>;
}