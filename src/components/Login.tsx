import Form from "./Form";
import {setUser} from "../store/slice/slice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux-hooks";


function Login(props) {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
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
            title='sign in'
            handleClick={handleLogin}
        />
    );
}

export default Login;