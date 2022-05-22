// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
    <div className="App">
    <Navbar title ="Navbar" about="AboutUs"></Navbar>
{/*     
    <div className="container">
    <TextForm textbox="Write Any Text here"  ></TextForm>
    </div> */}
    <div class="container">
    <About></About>
    </div>
    </div>
    </>
  );
}

export default App;
