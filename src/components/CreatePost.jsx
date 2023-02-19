import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebase";
import "./styles/CreatePost.css";

const CreatePost = ({ isAuth }) => {
  const [title , setTitle] = useState("");
  const [text , setText] = useState("");

  const navigate = useNavigate();

  const createPost = async() => {
    await addDoc(collection(db, "posts"), {
      title: title,
      text: text,
      modDate: Date.now(),
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    });
    navigate("/");
  }

  useEffect(() => {
    if(!isAuth) {
      navigate("/login")
    }
  },[]);

  return (
    <div className="createPost">
      <div className="container">
        <h1>記事を投稿する</h1>
        <div className="postInput">
          <div>タイトル</div>
          <input type="text" placeholder="タイトルを入力" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="postInput">
          <div>記事</div>
          <textarea type="text" placeholder="投稿内容を入力" onChange={(e) => setText(e.target.value)} />
        </div>
        <button className="postButton" onClick={createPost}>投稿する</button>
      </div>
    </div>
  )
}

export default CreatePost