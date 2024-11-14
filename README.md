# assemblyai_001

## basic examples from the official website https://www.assemblyai.com
```
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
```
The result of parsing sports_injuries from : https://assembly.ai/sports_injuries.mp3 with the assemblyai 
```
assemblyai_001>node index.js
Happy developing ✨
Runner's Knee Runner's knee is a condition characterized by pain behind or around the kneecap. It is caused by overuse, muscle imbalance and inadequate stretching. Symptoms include pain under or around the kneecap. Pain when wal
king sprained ankle 1 nil the ligaments of the ankle holds the ankle bones and joint in position. They protect the ankle from abnormal movements such as twisting, turning and rolling of the foot. A sprained ankle happens when th
e foot twists, rolls or turns beyond its normal motions. If the force is too strong, the ligaments can tear. Symptoms include pain and difficulty moving the ankle, swelling around the ankle and bruising. Meniscus TEAR I think so
me of it was just being scared, but this guy like you want to go after. Patrick each of your knees has two menisci c shaped pieces of cartilage that act like a cushion between your shin bone and your thigh bone. A meniscus tear 
happens when you forcibly twist or rotate your knee, especially when putting the pressure of your full weight on it, leading to a torn meniscus. Symptoms include stiffness and swelling. Pain in your knee Catching or locking of y
our knee Rotator CUFF Tear Cuff goby traveling to Los Angeles today to be examined by teen doctors on the rotator cuff attaches the humerus to the shoulder blade and helps to lift and rotate your arm. A rotator cuff tear is caus
ed by a fall onto your arm or if you lift a heavy object too fast, the tendon can partially or completely tear off of the humerus head Symptoms include pain when lifting and lowering your arm, weakness when lifting or rotating y
our arm, pain when lying on the affected shoulder. ACL TEAR Here's Rosario on the break now and watch Nerlands go up with a left hand. Block the shot and then on landing, there came the the ACL runs diagonally in the middle of t
he knee and provides stability. Anterior cruciate ligament tear occurs when your foot is firmly planted on the ground and a sudden force hits your knee while your leg is straight or slightly bent. This can happen when you are ch
anging direction, rapidly slowing down. When running or landing from a jump, the ligament completely tears into two pieces, making the knee unstable. Symptoms include severe pain and tenderness in knee, loss of full range of motion, swelling around the knee.
```
