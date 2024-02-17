import React from 'react'
import Particles from 'react-particles'
import {loadFireworksPreset} from 'tsparticles-preset-fireworks'
import {useState} from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Countdown from 'react-countdown'

const HomePage = () => {
  const [hbd,setHbd] = useState(["Hildan birthday"])
  const particleInitialization = async(engine) => {
    await loadFireworksPreset(engine)
  }
  const nambahUmur = () => {
    window.location.href = "/main"
  }
  function timeLeft(){
    const myHbd = new Date("March 16, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = myHbd - nowDate
    return remainingTime
  }
  return (
    <div>
      <Particles
      init={particleInitialization}
      options={{ preset: "fireworks"}}
      />
    <div className="flex flex-col justify-center items-center min-h-screen "><span className="text-4xl text-white  font-bold z-50">
      <Typewriter words={hbd} />
      </span>
      <div className="text-2xl font-bold text-white z-50">
        <Countdown date={Date.now() + timeLeft()} onComplete={() => nambahUmur() }/>
      </div>
      </div>
    </div>
    )
}

export default HomePage