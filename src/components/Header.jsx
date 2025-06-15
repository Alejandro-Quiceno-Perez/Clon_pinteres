import React, { useState } from 'react'
import { Logo } from './icons/Logo'
import { useBookStore } from '../store/bookStore';

export const Header = () => {
    const [value, setValue] = useState("cat");
    const updateValue = useBookStore(state => state.updateValue);

    const handleKey = (e) => {
        if ( e.key === "Enter") {
            // console.log(value);
            updateValue(value);
        }
    }

    return (
        <header>
            <ul>
                <li><a href=""><Logo /></a></li>
                <li><a href="">Inicio</a></li>
                <li><a href="">Hoy</a></li>
                <li><a href="">Crear</a></li>
                <li>
                    <input type="search" 
                    onChange={e => setValue(e.target.value)}
                    placeholder='Search'
                    onKeyDown={handleKey}/>
                </li>
                <li><a href=""><i className="bi bi-bell-fill"></i></a></li>
                <li><a href=""><i className="bi bi-chat-dots-fill"></i></a></li>
                <li><a href=""><i className="bi bi-person-circle"></i></a></li>
            </ul>
        </header>
    )
}
