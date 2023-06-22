import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { PostContext } from '../context/PostContext'

export const Menu = () => {
    const { post, setPost, clearContext } = useContext(PostContext);

    return (
        <div className="menu">
            <NavLink to="/" onClick={() => clearContext()}>
                <div className="menu__link">Главная</div>
            </NavLink>
            <NavLink to="/new" onClick={() => clearContext()}>
                <div className="menu__link">Новый пост</div>
            </NavLink>
        </div>
    )
}
