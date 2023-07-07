import { usePosts } from "./store"
import { useRef } from 'react'

export default function Admin() {
    const title = useRef('')
    const text = useRef('')
    console.log(title.current, text.current)
    const posts = usePosts(state=>{return{
        list: state.list,
        addPost: state.addPost,
        clearPosts: state.clearPosts,
        deletePost: state.deletePost
    }})
    let render = <></>
    if(posts.list.length === 0) {
        render = <div className="noPosts">No posts yet...</div>
    }
    else {
        render = posts.list.map((el, index)=>{
            return(
                    <li key={Math.random()}>
                        <div className="post">
                            <h1 className="post__header">{el.title}</h1>
                            <div className="post__line" />
                            <p className="post__text">{el.text}</p>
                            <div className="post__delete">
                                <button className="post__delete-btn" onClick={()=>{
                                    posts.deletePost(index)
                                }}>Delete</button>
                            </div>
                        </div>
                    </li>
            )
        })
    }
    return(
        <>
            <div className='admin'>
                <h1 className='admin__header'>Create a post</h1>
                <div className='admin__line'></div>
                <input maxLength="20" placeholder="Header" onChange={(e)=>title.current = e.currentTarget.value} className="admin__input-header"/>
                <textarea maxLength="140" placeholder="Text" onChange={(e)=>text.current = e.currentTarget.value} className="admin__input-text"/>
                <div className="admin__buttons">
                    <div className="admin__buttons__addPost"><button onClick={()=>{
                        if(title.current !== '' && text.current !== '') {posts.addPost({title: title.current, text: text.current}); title.current = ''; text.current = ''; document.querySelector('.admin__input-header').value = ''; document.querySelector('.admin__input-text').value = ''}
                        else return
                    }} className="admin__buttons__addPost-btn">Add post</button></div>
                    <div className="admin__buttons__clearPosts"><button onClick={()=>posts.clearPosts()} className="admin__buttons__clearPosts-btn">Clear posts</button></div>
                </div>
                
            </div>
            <ul>{render}</ul>
        </>
    )
}