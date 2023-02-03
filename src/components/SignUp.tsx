import Form from "./Form";
import {setUser} from "../store/slice/slice";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux-hooks";

function SignUp(props) {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }))
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <Form
            title='register'
            handleClick={handleRegister}
        />
    );
}

export default SignUp;