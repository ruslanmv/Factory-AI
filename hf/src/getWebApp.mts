import { alpine } from "./alpine.mts"
import { daisy } from "./daisy.mts"

export function getWebApp(prompt: string) {
  const prefix = `# In index.html:\n\`\`\`
<html><head><link href="https://cdn.jsdelivr.net/npm/daisyui@3.1.6/dist/full.css" rel="stylesheet" type="text/css" /><script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script><script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio"></script><script defer src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.156.1/three.min.js"></script><script type="module" src="main.js"></script><title>`

  const instructions = [
    {
      role: "system",
      content: [
        `You are a JavaScript developer, expert at crafting applications using AlpineJS, DaisyUI and Tailwind.`,
        `Here is an extract from the AlpineJS documentation:`,
        alpine,
        `Here is an extract from the DaisyUI documentation:`,
        daisy
      ].filter(item => item).join("\n")
    },
    {
      role: "user",
      content: `Please write, file by file, the source code for a HTML JS app.

Here are some recommended librairies:
- AlpineJS (use "https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js")
- DaisyUI (use "https://cdn.jsdelivr.net/npm/daisyui@3.1.6/dist/full.css")
- Tailwind (use "https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio")
- Three.js (use "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.156.1/three.min.js")

Those library will be globally exposed thanks to the <script> dependencies, so you do not need to write "import ... from ..".

Some remarks:
- DO NOT USE VUE.JS

Remember, you need to write the index.html but also the app.js and/or the style.css files!
DO NOT WRITE AN EXAMPLE! WRITE THE FULL CODE!!

Don't forget to write a README.md with the following header:
\`\`\`
---
license: apache-2.0
title: <app name>
sdk: static
emoji: 👨‍💻
colorFrom: yellow
colorTo: green
---
\`\`\`

The app is about: ${prompt}`,
    }
  ]

  return { prefix, files: [], instructions }
}