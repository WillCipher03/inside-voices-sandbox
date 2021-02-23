import "./styles.css";
import Routes from "./routes/Routes";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes className="layout-body" />
      </Router>
    </div>
  );
}
