import { useId } from "react"

export default function Post({title, text}) {
    const id = useId()
    return(
        <div className="post" key={id}>
            <h1 className="post__header">{title}</h1>
            <div className="post__line" />
            <p className="post__text">{text}</p>
        </div>
    )
}