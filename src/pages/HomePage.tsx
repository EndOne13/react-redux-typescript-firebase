import {Navigate} from "react-router-dom";
import {useAuth} from "../hooks/use-auth";
import {removeUser} from "../store/slice/slice";
import {useAppDispatch} from "../hooks/redux-hooks";

function HomePage(props) {
    const dispatch = useAppDispatch()
    const {isAuth, email} = useAuth()

    return isAuth ? (
        <div>
            <h1>Welcome</h1>

            <button onClick={() => dispatch(removeUser())}>
                Log out from {email}
            </button>
        </div>
    ) : (
        <Navigate replace to='/login'/>
    )
}

export default HomePage;