import React from 'react'
import {Link } from 'react-router-dom';

 function Header() {
    return (
        <div style={HeaderStyle}>
            <h1>TodoList</h1>
            <Link to="/" style={LinkStyle}>Home</Link> |
            <Link to="/about" style={LinkStyle}>About</Link>
        </div>
    )
}

const HeaderStyle = {
    background: '#5C6BC0',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'

}
const LinkStyle = {
    color: '#fff',
    textDecoration:'none'
}
export default Header