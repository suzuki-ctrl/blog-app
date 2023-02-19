import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Btn } from "./atoms/Button";

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();

    const loginGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        })
    }

  return (
    <div style={{textAlign:"center"}}>
        <p>ログインして始めるには、下記のボタンをクリックして下さい！</p>
        <p>※記事を投稿するには、ログインが必要となります。</p>
        <Btn onClick={loginGoogle}>Googleでログイン</Btn>
    </div>
  )
}

export default Login;