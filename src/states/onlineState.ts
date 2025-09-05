import { create } from "zustand"

type StateAction = {
    setIsOnline: (payload: boolean) => void
}

type StateData = {
    isOnline: boolean
}

const useOnlineState = create<StateData & StateAction>((set) => ({
  isOnline: true,
  setIsOnline: (payload: boolean) => set((state) => { 
    return { isOnline: payload }
  })
}))

export default useOnlineState