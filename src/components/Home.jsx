import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import "./styles/Home.css";
import { Btn } from "./atoms/Button";


const Home = ({ postList , setPostList }) => {
  

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      const newList = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
      setPostList(newList);
    }
    getPosts();
  },[]);

  const handleDelete = async (docid) => {
    await deleteDoc(doc(db, "posts", docid));
    setPostList(postList.filter((post) => post.id !== docid));
  }

  const sortedPostLists = postList.sort((a,b) => b.modDate - a.modDate);

  return (
    <div className="home">
      {sortedPostLists.map((post) => (
      <div key={post.id} className="homeContents">
        <div className="homeHeader">
          <h1>{post.title}</h1>
        </div>
      <div className="homeText">
        {post.text}
      </div>
      <div className="homeFlex">
          <div className="homeItems">
        <p>投稿者：{post.author.username}</p>
        <span>
          投稿日：{new Date(post.modDate).toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
        </span>
        </div>
        <div>
        <Link to={`/postcontent/${post.modDate}`}>
          <Btn>投稿を見る</Btn>
        </Link>
        {post.author.id === auth.currentUser?.uid && (
          <Btn onClick={() => handleDelete(post.id)}>削除</Btn>
        )}
        </div>
      </div>
      </div>
      ))}
    </div>
  )
}

export default Home