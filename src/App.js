import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Weather city="Kyiv" />
          <footer className="coder">
            <a
              href="https://github.com/KettySalt/project-weather-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Kateryna Gavryliuk
          </footer>
        </div>
      </div>
    </div>
  );
}
