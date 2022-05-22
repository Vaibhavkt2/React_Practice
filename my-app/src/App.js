import logo from './logo.svg';
import './App.css';
import {Hello} from './components/hello';
import {Clock} from './components/clock';
import HelloFunc from './func_components/hello_func';
import ClockFunc from './func_components/clock_func';
import Count from './func_components/count';

function App() {
  let str = 'Tom';
 // let str = 25;    //generate warning on console
  return (
    
    <div className="App">
       {/* <Clock></Clock>  */}
       {/* <Hello firstName="Vaibhav"></Hello> */}
       {/* <HelloFunc></HelloFunc> */}
       {/* <ClockFunc></ClockFunc> */}
       <Count></Count>
      
    </div>
  );
}

export default App;

