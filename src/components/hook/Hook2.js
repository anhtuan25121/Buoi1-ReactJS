import { useState } from "react"

function Hook2() {
    console.log("render hook2")
    const [count, setCount] = useState(10)
    function handle_count_up() {
        setCount(count + 10)
    }
    return (
        <div>
            <h1>Tim hieu ve useState</h1>
            <p>count : {count}</p>
            <button onClick={handle_count_up}>Count Up</button>
        </div>
    )
}
export default Hook2;