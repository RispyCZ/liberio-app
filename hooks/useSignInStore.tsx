import { create } from "zustand"

type SignInState = {
  fistName: string | null
  lastName: string | null
  emailAddress: string | null
  password: string | null
  setfirstName: (value: string) => void
  setLastName: (value: string) => void
  setEmailAddress: (value: string) => void
  setPassword: (value: string) => void
}

export const useSignInStore = create<SignInState>((set) => ({
  fistName: null,
  lastName: null,
  emailAddress: null,
  password: null,
  setfirstName: (value) => set({ fistName: value }),
  setLastName: (value) => set({ lastName: value }),
  setEmailAddress: (value) => set({ emailAddress: value }),
  setPassword: (value) => set({ password: value })
}))