import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    );
};

export default ThemeToggle;