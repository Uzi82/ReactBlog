import { usePosts } from "./store";
import Post from "./Post";

export default function App() {
  const posts = usePosts(state=> state.list)
  let render = <></>
  if(posts.length === 0) {
    render = <div className="noPosts">No posts yet...</div>
  }
  else {
    render = posts.map(el=>{
      return(
        <Post key={Math.random()} title={el.title} text={el.text} />
      )
    })
  }
  return(
    <ul>{render}</ul>
  )
}