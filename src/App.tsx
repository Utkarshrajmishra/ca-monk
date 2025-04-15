import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import questionData from "./data/sample.json";

import Question from "./component/Question";
import { useTimer } from "./hooks/useTimer";
function App() {
    const [currentQuestion, setCurrentQuestion]=useState(0)
    const {timer}=useTimer()
  return (
    <>
      <main className="bg-zinc-50 flex items-center justify-center h-screen w-full">
        <Question timer={timer} questions={questionData.data.questions} currentQuestion={currentQuestion}/>
      </main>
    </>
  );
}

export default App;
