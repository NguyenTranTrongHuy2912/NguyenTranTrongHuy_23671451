import React from 'react'
import { atom } from 'recoil'

const ThemeAtom = atom({
    key: 'themeAtom',
    default: localStorage.getItem('theme') || 'light',

    effects: [({ onSet }) => {
        onSet((newTheme) => {
            localStorage.setItem('theme', newTheme);
        });
    }],
});

export default ThemeAtom
