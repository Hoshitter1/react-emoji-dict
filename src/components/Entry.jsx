import React from "react";
import Term from "./Terms";
import emojis from "../emojipedia";

function createTerms(props) {
  return (
    <Term
      name={props.name}
      emoji={props.emoji}
      key={props.key}
      meaning={props.meaning}
    />
  );
}

function Entry() {
  return <dl className="dictionary">{emojis.map(createTerms)}</dl>;
}

export default Entry;
