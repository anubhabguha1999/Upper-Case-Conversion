import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title = "Upper Case" />
    <div className="container m-3">
    <TextForm heading ="Enter that you want to convert in Upper Case"/>
    
    </div>
    </>
  );
}

export default App;
