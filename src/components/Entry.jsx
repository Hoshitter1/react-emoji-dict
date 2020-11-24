import React from "react";
import Term from "./Terms";
import emojis from "../emojipedia";

function Entry() {
  return (
    <dl className="dictionary">
      {emojis.map((emoji) => (
        <Term
          name={emoji.name}
          emoji={emoji.emoji}
          key={emoji.id}
          meaning={emoji.meaning.substring(0, 100)}
        />
      ))}
    </dl>
  );
}

export default Entry;
