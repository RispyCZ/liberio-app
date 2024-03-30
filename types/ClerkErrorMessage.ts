type ClerkError = {
  code: string,
  message: string,
  longMessage: string,
  meta: ClerkErrorMeta[]
}

type ClerkErrorMeta = {
  paramName: string
}

type ClerkErrorMessage = {
  status: number,
  clerkError: boolean,
  errors: ClerkError[]
}

export { ClerkError, ClerkErrorMessage, ClerkErrorMeta }