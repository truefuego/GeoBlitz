import { create } from  'zustand'

const data = [
    {
        video: 'https://www.youtube.com/watch?v=cxlIUOMUrS4',
        lat: 30.7344815,
        lng: 79.0643602
    },
    {
        video: 'https://www.youtube.com/watch?v=GEO-rIPbcfs',
        lat: 21.2161986,
        lng: 81.3051948
    },
    {
        video: 'https://www.youtube.com/watch?v=p1J2XpKcvTE',
        lat: 28.5244945,
        lng: 77.1806468
    }
]

const gameStore = (set) => ({
    userScore: 0,
    rounds: 1,
    correctLocation: {lat: null,lng: null},
    guessedLocation: {lat: null,lng: null},

    addScore:(value) =>{
        set((state)=>({
            userScore : state.userScore + value
        })) 
    },

    addRound:() =>{
        set((state)=>({
            rounds : state.rounds + 1
        })) 
    },

    randomizeLocation: () => {
        set((state) => ({
            correctLocation: data[Math.floor(Math.random() * data.length)]
        }))
    },

    markLocation: (lat,lng) => {
        set((state) => ({
            guessedLocation: {lat,lng}
        }))
    },

    refresh: () => {
        set((state) => ({
            correctLocation: data[Math.floor(Math.random() * data.length)],
            guessedLocation: {lat: null,lng: null},
        }))
    }
})

const useGameStore = create(gameStore)

export default useGameStore