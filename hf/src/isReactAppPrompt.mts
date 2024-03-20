export function isReactAppPrompt(prompt: string) {
  const lowerCasePrompt = prompt.toLocaleLowerCase()
  return lowerCasePrompt.includes("react")
     || lowerCasePrompt.includes("create react app")
     || lowerCasePrompt.includes("reactjs")
     || lowerCasePrompt.includes("next app")
     || lowerCasePrompt.includes("nextjs app")
     || lowerCasePrompt.includes("nextjs")
}