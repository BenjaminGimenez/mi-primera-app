import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
   
  //   const handleSum = () =>{
  //       console.log('agrego uno')
  //       setCount(count + 1)
  //       console.log(`ahora es ${count}`)
  //   }

  //   const handleLess = () =>{
  //     console.log('resto uno')
  //     setCount(count - 1)
  //     console.log(`ahora es ${count}`)
  // }

  const handleClick =(operator)=>{
    let newValue = 0;
    if(operator === 'sum')
      newValue = count +1;
    else{
      newValue = count -1;
    }
    setCount(newValue);
  }

  return (
    <section>
        <p>el contador va: {count}</p>
        <button onClick={()=>handleClick('sum')}> + </button>
        <button onClick={()=>handleClick('less')}>-</button>
    </section>
  )
}
export default Counter