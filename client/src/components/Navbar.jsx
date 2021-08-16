import React from "react";
import axios from "axios";

function Navbar({ Code, setCode, starterCode }) {
  function handleRun() {
    if (Code.language === "cpp") {
      axios.post("/api/code/", Code).then((response) => {
        if (response.status === 200) {
          setCode((p) => ({ ...p, output: response.data.output }));
        } else {
          alert("Something went wrong..");
        }
      });
    } else {
      console.log("Language not available yet");
    }
  }

  const languages = ["cpp", "python", "javascript"];

  return (
    <div className="navbar">
      <div className="nav-brand">Online Compiler {"</>"}</div>
      <div className="menu">
        <button onClick={handleRun} className="menu-item-button">
          Run Code
        </button>
        <div class="dropdown">
          <button class="dropbtn">{Code.language}</button>
          <div class="dropdown-content">
            {languages.map((language) => (
              <div
                key={language}
                onClick={() => {
                  setCode({
                    code: starterCode[`${language}`],
                    language: language,
                  });
                }}
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
