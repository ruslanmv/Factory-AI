export function isStreamlitAppPrompt(prompt: string) {
  const lowerCasePrompt = prompt.toLocaleLowerCase()
  return lowerCasePrompt.includes("streamlit")
}