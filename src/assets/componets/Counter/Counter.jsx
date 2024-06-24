import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [countSecundario] = useState(0)
   
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


  //caso prohibido -> no pasarle un arreglo de dependencias
  

  //caso 1 
  //se ejecuta 1 vez el callback cuando el componente de monta
  useEffect(()=>{
    console.log('me estoy ejecutando cuando se monta el componente')
  },[]);

  //caso 2 -> depende de una variable o una funcion
  //se ejecuta el callback cuantas veces la variable o funcion cambie
  useEffect(()=>{
    console.log(count)
  },[count]);

  //caso 2 -> depende de una o mas variables o funciones
  //se ejecuta el callback cuantas veces las variables o funciones cambien
  //con que 1 se actualice ya es suficiente para correr el callback
  useEffect(()=>{
    console.log('count es ', count)
    console.log('count secundario es ', countSecundario)
  },[count, countSecundario]);



  return (
    <section>
        <p>el contador va: {count}</p>
        <button onClick={()=>handleClick('sum')}> + </button>
        <button onClick={()=>handleClick('less')}>-</button>
    </section>
  )
}
export default Counter