import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const maxScore = (set) => ({
    mxScore: 0,

    updateMaxScore: (value) => {
        set((state) => ({
            mxScore: Math.max(state.mxScore,value)
        }))
    }
})

const useMaxScore = create(
    devtools(
        persist(maxScore,{
            name: 'maxScore'
        })
    )
)

export default useMaxScore