// ThemeToggle.js
import React from 'react';
import { useTheme } from './ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <div className="theme-toggle">
            <label className="switch">
                <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
                <span className='button'>{isDarkTheme ?'Light Theme ' : 'Dark Theme'}</span>
            </label>
            

        </div>
    );
};

export default ThemeToggle;
