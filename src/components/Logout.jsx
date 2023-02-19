import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Btn } from "./atoms/Button";

const Logout = ({ setIsAuth }) => {
    const navigate = useNavigate();

    const logout = () => {
      signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        navigate("/login");
      })
        }
    

  return (
    <div style={{textAlign:"center"}}>
        <p>ログアウトする場合は、下記のボタンをクリックして下さい！</p>
        <Btn onClick={logout}>ログアウト</Btn>
    </div>
  )
}

export default Logout;