"use client"

import { useRef } from "react"

export type MomentT = {
  image: string,
  audio: string,
  subtitle: string
}

export default function Moment({
  image,
  audio,
  subtitle
}: MomentT) {

  const audioRef = useRef<HTMLAudioElement>(null)

  function playAudio() {
    const audioEl = audioRef.current
    if(audioEl) {
      audioEl.play()
    }
  }
  return(<>
  <div className="bg-black min-h-screen">
    <div className={`
      mx-auto p-4 aspect-[16/9] max-h-screen
      flex justify-center items-end
      bg-black bg-cover bg-center bg-no-repeat `}
      style={{backgroundImage: `url(${image})`}}
    >
      <div onClick={playAudio}
          className={`
          py-3 px-4 rounded-xl max-w-50
          bg-black bg-opacity-60 hover:bg-opacity-70
          text-white text-xl cursor-pointer `}
      >
        {subtitle}
        {
          audio ?  <audio autoPlay className="hidden" ref={audioRef} src={audio}/>:null
        }
       
      </div>
    </div>
  </div>
  </>)
}