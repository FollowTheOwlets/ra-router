import React, { useContext, useEffect, useRef } from 'react'
import { PostContext } from '../../context/PostContext'
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

export const EditPage = () => {
    const { post, setPost, clearContext } = useContext(PostContext);
    const [{ }, fetchNow] = useFetch();

    const area = useRef();

    const getHandleSave = (id) => {
        return id == 0 ? () => {
            fetchNow(`http://localhost:7070/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ author: "Petya", content: area.current.value })
            });
        } : () => {
            fetchNow(`http://localhost:7070/posts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ author: "Petya", content: area.current.value })
            });
        };
    };


    return (
        <div className="edit-form">
            <textarea key={post.id} ref={area} name="post" id="post-area" cols="30" rows="10" defaultValue={post.id == 0 ? "" : post.content} ></textarea>
            <div className="btns">
                <Link to="/" onClick={getHandleSave(post.id)}>
                    <div className="btn save">
                        {post.id == 0 ? "Сохранить" : "Опубликовать"}
                    </div>
                </Link>
                <Link to={post.id == 0 ? `/` : `/${post.id}`} onClick={() => clearContext()}>
                    <div className="btn back">
                        X
                    </div>
                </Link>
            </div>
        </div>
    )
}
