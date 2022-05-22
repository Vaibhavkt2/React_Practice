import incrementAction from "../actions/increment_action"
import decrementAction from "../actions/decrement_action";
import { useDispatch, useSelector } from "react-redux"

const Count = (props) => {
    let dispatcher = useDispatch();
    let currentCountValue = useSelector((state)=>state);
    const incrementHandler = () => {   //Closure Function
        //myStore.dispatch(incrementAction())
        dispatcher(incrementAction(currentCountValue));
    }

    const decrementHandler = () => {
        dispatcher(decrementAction(currentCountValue));
    }

    return  <div>
        <h1>Count= {currentCountValue} </h1>
        <input type="button" value="INCREMENT" onClick={incrementHandler}></input>
        <br></br> <br></br>
        <input type="button" value="DECREMENT" onClick={decrementHandler}></input>
    </div>
        
    
}

export default Count