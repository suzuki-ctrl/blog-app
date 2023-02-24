import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { db } from '../firebase';
import { Link, useParams } from 'react-router-dom';
import "./styles/PostContent.css";
import { Btn } from './atoms/Button';

const PostContent = ({ postList, setPostList }) => {

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      const newList = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
      setPostList(newList);
    }
    getPosts();
  },[]);

  const params = useParams();

  return (
    <div className='postcontent'>
      {postList
      .filter((post) => post.modDate === parseInt(params.id))
      .map((post) => (
        <div key={post.id} className="postcontentContain">
          <p>投稿者：{post.author.username}</p>
          <p>
            投稿日：{new Date(post.modDate).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
          </p>
          <h1>{post.title}</h1>
          <hr />
          <p className='postcontent-text'>{post.text}</p>
          <Link to="/">
          <Btn>←ホームに戻る</Btn>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PostContent;