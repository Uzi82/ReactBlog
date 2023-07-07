import { useId } from "react"

export default function Post({title, text}) {
    const id = useId()
    return(
        <li className="post" key={id}>
            <h1 className="post__header">{title}</h1>
            <p className="post__text">{text}</p>
        </li>
    )
    
}