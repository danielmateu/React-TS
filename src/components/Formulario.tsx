
import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
    edad: number;
}


export const Formulario = () => {

    const { formulario, handleChange } = useForm<FormData>({
        email: 'danielmateu@gmail.com',
        nombre: 'Daniel Mateu',
        edad: 36,
    });

    const { email, nombre, edad } = formulario;

    // const [formulario, setFormulario] = useState({
    //     email: '',
    //     nombre: '',
    // });

    // const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {

    //     const {name,value} = target;

    //     setFormulario({
    //         ...formulario,
    //         [name]: value
    //     })

    // }

    return (
        <form autoComplete='off'>
            <div className="mb-3">
                <label htmlFor="" className='form-label'>email:</label>
                <input type="email"
                    className="form-control"
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
                <label htmlFor="" className='form-label mt-2'>nombre:</label>
                <input type="text"
                    className="form-control "
                    name='nombre'
                    value={nombre}
                    onChange={handleChange}
                />
                <label htmlFor="" className='form-label mt-2'>edad:</label>
                <input type="text"
                    className="form-control "
                    name='Edad'
                    value={edad}
                    onChange={handleChange}
                />
            </div>

            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}
