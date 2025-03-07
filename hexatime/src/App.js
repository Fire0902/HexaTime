import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  const updateTime = () => {
    const date = new Date();
    setDay(date.getDate().toString(16).padStart(2, "0"));
    setMonth((date.getMonth() + 1).toString(16).padStart(2, "0"));
    setYear(date.getFullYear().toString(16).slice(-2));
    setHour(date.getHours().toString(16).padStart(2, "0"));
    setMinute(date.getMinutes().toString(16).padStart(2, "0"));
    setSecond(date.getSeconds().toString(16).padStart(2, "0"));
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Date : {day}/{month}/{year}</h1>
      <h1>Time : {hour}:{minute}:{second}</h1>
    </>
  );
}

export default App;
