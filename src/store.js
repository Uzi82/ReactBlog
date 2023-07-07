import { create } from 'zustand';
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
            },
            deletePost: (index)=>{
                set((state)=>{
                    if(state.list !== []) {
                        let list = state.list
                        list.splice(index, 1);
                        return list
                    }
                    else return
                })
            }   
        }),
        {
            name: 'post-storage',
            storage: createJSONStorage(() => localStorage)
        }
    ))
)