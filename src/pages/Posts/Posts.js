import React, { useEffect, useState } from 'react'
import Post from '../../services/Posts/Posts'
import './style.scss'

const Posts = props => {
    const [post, setPost] = useState({});
    useEffect(()=>{
        Post.get(props.match.params.id).then(
            res=>{
                if(res.data){
                    setPost({...res.data}) 
                }

                if(res.data.length <= 0){
                    props.history.push("/404")
                }
            },
            ()=>{
                props.history.push("/404")
            }
        )
    },[])

    if(post.title != null){
        return (
            <div className="posts">
                <h1>{post.title}</h1>
                <div>{post.content}</div>
            </div>
        )
    }else{
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    
}

export default Posts