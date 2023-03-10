import {FC, useState} from 'react';

type FormProps = {
    title: string,
    handleClick: (email: string, pass: string) => void
}


const Form: FC<FormProps> =({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div>
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
            <button onClick={() => handleClick(email, pass)}>
                {title}
            </button>
        </div>
    );
}

export default Form;