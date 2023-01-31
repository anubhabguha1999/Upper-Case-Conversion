import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title = "Upper or Lower Case" />
    <div className="container m-3">
    <TextForm heading ="Enter that you need to convert"/>
    
    </div>
    </>
  );
}

export default App;
