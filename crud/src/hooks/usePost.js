
import React, { useEffect, useState } from 'react'

export const usePost = () => {
    const [post, setPost] = useState({ id: 0 });

    function clearContext() {
        setPost({ id: 0 });
    };

    useEffect(() => {
        clearContext();
    }, []);

    return { post, setPost, clearContext };
}
