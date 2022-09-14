import { useState } from 'react';


interface User {
    uid: string;
    name: string;
}

const tempUser: User = {
    uid: 'UXY321',
    name: 'Silvia Cazorla'
}


export const Usuario = () => {

    const [user, setUser] = useState<User>(tempUser);

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Daniel Mateu'
        })
    }

    return (
        <div>
            <h3>Usuario - useState</h3>
            <button
                onClick={login}
                className="btn btn-outline-primary mb-2">
                Login
            </button>
            {
                (!user) ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>
            }
            
        </div>
    )
}
