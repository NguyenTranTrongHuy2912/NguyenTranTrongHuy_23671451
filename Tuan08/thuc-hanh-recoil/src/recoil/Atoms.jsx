import { atom, selector } from 'recoil'

export const width = atom({
    key: 'width',
    default: 0,
})

export const height = atom({
    key: 'height',
    default: 0,
})

export const area = selector({
    key: 'area',
    get: ({ get }) => {
        const w = get(width)
        const h = get(height)
        return w * h
    },
})

export const cart = atom({
    key: 'cart',
    default: [],
})