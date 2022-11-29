import {
    useState
} from "react";

export const useForm = (initialForm = {}) => {

    // {
    //     username: '',
    //     email: '',
    //     password: ''
    // }
    //manejar el formulario
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({
        target
    }) => {
        const {
            name,
            value
        } = target;
        //asignamos los valores nuevos al objeto
        //con propiedades computadas de los objetos -> leer
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        //desestructuro el formstate para poder envíar las propiedades del obj
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}