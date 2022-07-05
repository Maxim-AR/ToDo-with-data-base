import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
        <div className='navbar-brand'>
            Note App
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link"
                    to='/'
                    exact='true'
                >
                    Главная
                </Link>
            </li>
            <li className="nav-item">           
                <Link className="nav-link"
                    to='/about'>
                    Иформация
                </Link>
            </li>
        </ul>
    </nav>
)
