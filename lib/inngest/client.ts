import { Inngest } from "inngest"

export const inngest = new Inngest({
    id:'Trading Charts',
    ai: {gemini: {apiKey: process.env.GEMINI_API_KEY! }}
})