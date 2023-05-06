import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Hero from "./Components/hero/Hero";
import "./App.css";
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
  };
  useEffect(() => {
    if (theme === "dark") {
      setSwitchBtn(true);
    }
  }, [theme]);
  return (
    <div className="main">
      <Header theme={theme} toggleTheme={toggleTheme} switchBtn={switchBtn} />
      <Hero theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
