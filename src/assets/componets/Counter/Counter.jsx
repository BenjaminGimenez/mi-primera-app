import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
   
    const handleClick = () =>{
        console.log('agrego uno')
        setCount(count + 1)
        console.log(`ahora es ${count}`)
    }
  return (
    <section>
        <p>el contador va: {count}</p>
        <button onClick={handleClick}> + </button>
        <button>-</button>
    </section>
  )
}
export default Counter