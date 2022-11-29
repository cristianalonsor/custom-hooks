import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState( initialValue )

    //exponer los metodos de un hook tiene varias formas
    const increment = (value = 1) => {
        setCounter(counter+value)
    }

    const decrement = (value = 1) => {
        setCounter(counter-value)
    }

    const reset = () => {
        setCounter(initialValue)
    }



    return {
        counter,
        increment,
        decrement,
        reset
    }
}