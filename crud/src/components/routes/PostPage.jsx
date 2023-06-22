import React, { useContext, useEffect } from 'react'
import { Post } from '../Post'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { PostContext } from '../../context/PostContext'

export const PostPage = () => {

    const { id } = useParams();
    const [{ loading, data }, fetchNow] = useFetch(`http://localhost:7070/posts/${id}`);
    const { post, setPost, clearContext } = useContext(PostContext);

    const handleDelete = (id) => {
        fetchNow(`http://localhost:7070/posts/${id}`, { method: 'DELETE' });
    }

    if (loading) {
        return <>Loading...</>
    }

    return (
        <>
            {data && <Post key={data.post.id} post={data.post} >
                <div className="btns">
                    <Link to="/edit" onClick={() => setPost(data.post)}>
                        <div className="btn edit">
                            Изменить
                        </div>
                    </Link>
                    <Link to="/" onClick={() => { handleDelete(data.post.id); }}>
                        <div className="btn delete">
                            Удалить
                        </div>
                    </Link>
                    <Link to="/" onClick={() => clearContext()}>
                        <div className="btn back">
                            {"<-"}
                        </div>
                    </Link>
                </div>
            </Post>
            }
        </>
    )
}
