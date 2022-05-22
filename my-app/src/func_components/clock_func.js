import { useEffect, useState } from "react";

const ClockFunc = (props) => {
    //console.log("Clockfunc Called")

    //const [state_variable, update_state_variable_func] = useState(initial_value_of_state)
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());   //React Hook
    const [count, setCount] = useState(5);

    useEffect(() => {    //React hook
        // console.log("UseEffect Called");
        setInterval(() => {
            setCurrentTime(new Date().toLocaleString())
        }, 1000)
    }, [count, currentTime]);

    const buttonAction = () => {  //Closure
        console.log("buttonAction called");
    }


    return <div>
        <h1>{currentTime}</h1>
        <input type="button" value="SUBMIT" onClick={buttonAction}></input>
    </div>
}

export default ClockFunc;