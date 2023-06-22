import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { PostContext } from '../context/PostContext';

export const Post = ({ post, children }) => {
    return (
        <div className="post">
            <div className="author">
                {post.author}
            </div>
            <div className="content">
                {post.content}
            </div>
            {children}
        </div>
    )
}
