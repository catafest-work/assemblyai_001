// npm install assemblyai

import { AssemblyAI } from 'assemblyai'

const client = new AssemblyAI({
    apiKey: "2ffe61dc5e4c479885a3df253ef81e0d"
})

const audioUrl =
    'https://assembly.ai/sports_injuries.mp3'

const config = {
    audio_url: audioUrl
}

const run = async () => {
    const transcript = await client.transcripts.transcribe(config)
    console.log(transcript.text)
}
console.log('Happy developing ✨')
run()