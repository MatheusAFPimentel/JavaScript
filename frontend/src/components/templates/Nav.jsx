import './Nav.css'
import Navitens from './Navitens'
import React from 'react'

export default props =>

    <aside className="menu-area">
        <nav className="menu">
            <Navitens href="/" icon="home" title="Início" />
            <Navitens href="users/" icon="users" title="Users" />
        </nav>
    </aside>