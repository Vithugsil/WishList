import React from 'react'
import "./HeaderComponent.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const HeaderComponent = () => {
    return (
        <header className="header-container">
            <h1>Sua Lista de Desejos</h1>
            <button className='header-button'>
                <AddCircleIcon className='button-icon' fontSize='large'/>
                <b>Nova Lista</b>
            </button>
        </header>
    )
}