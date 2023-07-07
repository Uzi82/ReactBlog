import { usePosts } from "./store"
import { useRef } from "react"
import Post from "./Post"
export default function Admin() {
    const title = useRef('')
    const text = useRef('')
    const posts = usePosts(state=>{return{
        list: state.list,
        addPost: state.addPost,
        clearPosts: state.clearPosts
    }})
    let render = <></>
    if(posts.list.length === 0) {
        render = <div className="noPosts">No posts yet...</div>
    }
    else {
        render = posts.list.map(el=>{
            return(
                <Post key={Math.random()} title={el.title} text={el.text} />
            )
        })
    }
    return(
        <>
            <div className='admin'>
                <h1 className='admin__header'>Create a post</h1>
                <div className='admin__line'></div>
                <input onChange={(e)=>title.current = e.currentTarget.value} className="admin__header"/>
                <input onChange={(e)=>text.current = e.currentTarget.value} className="admin__text"/>
                <button onClick={()=>posts.addPost({title: title.current, text: text.current})} className="admin__addPost">Add post</button>
                <button onClick={()=>posts.clearPosts()} className="admin__clearPosts">Clear posts</button>
            </div>
            <ul>{render}</ul>
        </>
    )
}