import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';

export function Menu() {
    const getClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'menu__item menu__item-active' : 'menu__item');
    return (
        <nav className="menu">
            <NavLink className={getClass} to="/">Главная</NavLink>
            <NavLink className={getClass} to="/drift">Дрифт-такси</NavLink>
            <NavLink className={getClass} to="/timeattack">Time Attack</NavLink>
            <NavLink className={getClass} to="/forza">Forza Karting</NavLink>
        </nav>
    );
}





