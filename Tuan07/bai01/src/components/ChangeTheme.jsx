import React from 'react'
import { useRecoilState } from 'recoil';
import ThemeAtom from '../atom/ThemeAtom';

function ChangeTheme() {
    const [theme, setTheme] = useRecoilState(ThemeAtom);
    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={handleToggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ChangeTheme
