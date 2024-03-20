export function isPythonOrGradioAppPrompt(prompt: string) {
  const lowerCasePrompt = prompt.toLocaleLowerCase()
  return lowerCasePrompt.includes("python")
     || lowerCasePrompt.includes("gradio")
}