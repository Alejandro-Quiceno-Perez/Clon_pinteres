import React, { useState } from 'react'
import { Logo } from './icons/Logo'

export const Header = () => {
   

    return (
        <header>
            <ul>
                <li><a href=""><Logo /></a></li>
                <li><a href="">Inicio</a></li>
                <li><a href="">Hoy</a></li>
                <li><a href="">Crear</a></li>
                <li><input type="search" /></li>
                <li><a href=""><i className="bi bi-bell-fill"></i></a></li>
                <li><a href=""><i className="bi bi-chat-dots-fill"></i></a></li>
                <li><a href=""><i className="bi bi-person-circle"></i></a></li>
            </ul>
        </header>
    )
}
