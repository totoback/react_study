import "./App.css";
import { useState } from "react";
import Page from "./components/Page";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App">
      <Page isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;
