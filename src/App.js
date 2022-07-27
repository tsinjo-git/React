import logo from './logo.svg';
import './App.css';
import Inscription  from './composants/Inscription/Inscription';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <Inscription/>
    </div>
    
  );
}

export default App;
