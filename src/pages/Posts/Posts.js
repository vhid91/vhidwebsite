import React, { useEffect, useState } from "react";
import Post from "../../services/Posts/Posts";
import "./style.scss";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";

const Posts = (props) => {
    const [post, setPost] = useState({});
    useEffect(() => {
        Post.get(props.match.params.id).then(
            (res) => {
                if (res.data) {
                    console.log(res.data.content);
                    setPost({ ...res.data });
                }

                if (res.data.length <= 0) {
                    props.history.push("/404");
                }
            },
            () => {
                props.history.push("/404");
            }
        );
    }, []);

    if (post.title != null) {
        return (
            <>
                <Navbar />
                <div className="posts">
                    <h1>{post.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>
            </>
        );
    } else {
        return <Loading />;
    }
};

export default Posts;
