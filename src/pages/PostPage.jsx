import React from 'react';
import {Link, useParams} from "react-router-dom";

const PostPage = ({posts, handleDelete}) => {

    const {id} = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    return (
        <main className="PostPage">
            <article className="post">
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Article pas trouvé</h2>
                        <p>
                            <Link to="/">Retourner a l'acceuil</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    );
};

export default PostPage;