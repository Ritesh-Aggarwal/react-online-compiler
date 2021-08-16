import { useState } from "react";
import "./App.css";
import MainCodeArea from "./components/MainCode";
import Navbar from "./components/Navbar";

function App() {
  const starterCode = {
    cpp: '#include<iostream>\nusing namespace std;\n\nint main()\n{\n\tcout<<"Hello world!";\n\treturn 0;\n}',

    python: "# Python is not supported yet\nprint('Hello World!')",
    nodejs: "//Javascript is not supported yet\nconsole.log('Hello World!');",
  };
  const [Code, setCode] = useState({
    language: "cpp",
    code: starterCode["cpp"],
    output: "",
  });

  return (
    <div className="App-header">
      <Navbar Code={Code} setCode={setCode} starterCode={starterCode} />
      <MainCodeArea Code={Code} setCode={setCode} />
    </div>
  );
}

export default App;
