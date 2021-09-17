import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {postDeleted, postEdited} from "./postsSlice";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch()
  const onDeleteClicked = (id)=>{
    dispatch(postDeleted({id}))
  }
  const onEditClicked = id=>{
    dispatch(postEdited({id}))
  }

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content}</p>
      <button onClick={()=>onDeleteClicked(post.id)}>删除</button>
      <button onClick={()=>onEditClicked(post.id)}>编辑</button>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
