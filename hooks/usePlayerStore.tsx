import { Sound } from "expo-av/build/Audio"
import { create } from "zustand"

type PlayerState = {
  sound: Sound | null
  setSound: (sound: Sound) => void
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  sound: null,
  setSound: (sound) => set({ sound })
}))