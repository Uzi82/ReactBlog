import { useState, useRef, useDeferredValue } from "react";
import { usePosts } from "./store";

export default function App() {
  const posts = usePosts(state=>{return{
    list: state.list,
    addPost: state.addPost
  }})
  useDeferredValue(posts.list)
  if(posts.list.length == 0) {
    return(
      <>
        <div>No posts yet...</div>
      </>
    )
  }
  else {
    let render = posts.list.map(el=>{
      return(
        <li key={el.id}>
          <h1>{el.title}</h1>
          <p>{el.text}</p>
        </li>
      )
    })
    return(
    <>
      <ul>{render}</ul>
    </>
    )
  }
}