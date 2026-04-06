import React from 'react'
import { atom } from 'recoil'

const CounterAtom = atom({
    key: 'counterAtom',
    default: 0,
});

export default CounterAtom
