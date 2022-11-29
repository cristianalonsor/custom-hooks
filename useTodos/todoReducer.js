export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[Todo] Add Todo':
            //siempre debo regresar un nuevo state
            /**
             * se que si tengo una accion del tipo 'Add Todo'
             * agregaré un nuevo elemento al arreglo
             * que viene dentro del action.payload
             */
            return [...initialState, action.payload]
        
        case '[Todo] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload )

        case '[Todo] Toggle Todo'  :

            return initialState.map( todo => {
                
                if( todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                
                return todo
            })  
            
        default:
            return initialState;
    }
}