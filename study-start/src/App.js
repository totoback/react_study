import "./App.css";
import { useState } from "react";
import Page from "./components/Page";
import { ThemaContext } from "./contexts/ThemaContext";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={"사용자"}>
      <ThemaContext.Provider value={{ isDark, setIsDark }}>
        <Page />
        {/* <Page isDark={isDark} setIsDark={setIsDark} /> */}
      </ThemaContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
