import { streamlitDoc } from "./streamlitDoc.mts";

export function getStreamlitApp(prompt: string) {
  const prefix = "# In app.py:\n```"

  const instructions = [
    {
      role: "system",
      content: [
        `You are a Python developer, expert at crafting Streamlit applications to deploy to Hugging Face.`,
        `Here is an extract from the Streamlit documentation:`,
        streamlitDoc
      ].filter(item => item).join("\n")
    },
    {
      role: "user",
      content: `Please write, file by file, the source code for a Streamlit app.

Please limit yourself to the following Python modules:
- numpy
- streamlit
- matplotlib

Don't forget to write a README.md with the following header:
\`\`\`
---
license: apache-2.0
title: <app name>
sdk: streamlit
emoji: 👀
colorFrom: green
colorTo: blue
---
\`\`\`

The app is about: ${prompt}`,
    }
  ]

  return { prefix, files: [], instructions }
}