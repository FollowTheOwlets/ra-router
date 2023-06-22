import React from 'react'
import { Post } from '../Post';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

export const PostsList = () => {
    const [{ data, loading }] = useFetch('http://localhost:7070/posts');

    if (loading) {
        return <>Loading...</>;
    }

    return (
        <>
            {data && data.map((post) =>
                <Post key={post.id} post={post} >
                    <Link to={`/${post.id}`}>
                        <div className="btn open">
                            Открыть
                        </div>
                    </Link>
                </Post>
            )}
        </>
    )
}
