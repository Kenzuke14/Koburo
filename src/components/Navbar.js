import React from 'react'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center">
            <div>
                <a href="/" className='cursor-hand'>
                    <img src={require('../assets/logo.gif')} alt="" draggable={false} />
                </a>
            </div>
            
        </nav>
    )
}
