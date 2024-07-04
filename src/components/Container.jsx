import Textarea from "./Textarea.jsx";
import Stats from "./Stats.jsx"
import { useState } from "react";
import {INSTAGRAM_MAX_CHARACTERS, FACEBOOK_MAX_CHARACTERS} from "../lib/constants.js"

export default function Container() {
  const [text, setText] = useState('');
  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharsLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharsLeft: FACEBOOK_MAX_CHARACTERS - text.length
  }

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats}/>
    </main>
  );
}
