import create from 'zustand';
import {persist, devtools} from 'zustand/middleware'
export const usePosts = create(devtools(persist((set, get)=> ({
    list: [
        {id: 1, title: 'Lol', text: 'test'},
        {id: 2, title: 'Lol', text: 'test'},
        {id: 3, title: 'Lol', text: 'test'}
    ],
    addPost: post => {
        set(state=> [...state.list, post])
    },
}))))