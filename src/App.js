import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        {/* Header */}
        <Main />
        <Footer />
    </div>
  );
}

export default App;
