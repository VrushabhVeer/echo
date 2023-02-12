import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
