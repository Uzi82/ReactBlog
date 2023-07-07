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
        <Post key={Math.random()} title={el.title} text={el.text} Delete={false} index={null} />
      )
    })
  }
  return(
    <>
      <div className="HeadText">
        <h1 className="HeadText__header">My blog</h1>
        <div className="HeadText__line"></div>
        <p className="HeadText__text">Here I will put my posts</p>
      </div>
      <ul>{render}</ul>
    </>
  )
}