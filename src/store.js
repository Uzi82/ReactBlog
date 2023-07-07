import create from 'zustand';
import {persist, createJSONStorage, devtools} from 'zustand/middleware'
export const usePosts = create(
    devtools(persist(
        set => ({
            list: [],
            addPost: post => {
                set(state=> state.list = [...state.list, post])
            },
            clearPosts: ()=>{
                set((state)=> state.list = [])
            }
        }),
        {
            name: 'post-storage',
            storage: createJSONStorage(() => localStorage)
        }
    ))
)