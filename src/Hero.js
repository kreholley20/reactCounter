import { useState } from "react";

export default function Hero() {
    const [count, setCount] = useState(0)

    const incrementCount = () => {setCount(count + 1)}
    const decrementCount = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }
    const resetCount = () => {setCount(0)}

    return(
        <div className="hero">
            <h3>Keep count by pressing the buttons below.</h3>
            <p>{count}</p>
            <div className="buttons">  
                <button className="increment" onClick={incrementCount}>Increment</button>
                <button className="decrement" onClick={decrementCount}>Decrement</button>
            </div>
          <button onClick = {resetCount} className="reset">Reset</button>
        </div>
    );
}