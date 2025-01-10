"use client"

import { useEffect, useState } from "react"
import Moment, {MomentT} from "./Moment"
import PrevNext from "./PrevNext"

type Player = {
  src: string,
  record: string,
  audioEx: string,
  imageEx: string
}

export default function Player({
  src,
  record,
  audioEx,
  imageEx
}: Player) {

  const [page, setPage] = useState<number>(1)
  const [moments, setMoments] = useState<Array<MomentT>>([])
  const [loaded, setLoaded] = useState<boolean>(false)

    async function getMoments() {
      if(loaded) { return }
      const url = `${src}/${record}.txt`
      const res = await fetch(url)
      if(!res.ok) {
        return
      }
    
      let text = await res.text()
      text =  (text || "").trim()
      let lines = text.split("\n")

      const moments2 = []
      for(let line of lines) {
        line = (line || "").trim()
        if(!line) { continue }
        const arr = line.split("|")
        if(!arr || arr.length < 2) { continue }
        const id = (arr[0] || "").trim()
        const subtitle = (arr[1] || "").trim()
        const image = `${src}/${record}-${id}.${imageEx}`
        const audio = `${src}/${record}-${id}.${audioEx}`
        const moment: MomentT = { image, audio, subtitle }
        moments2.push(moment)
      }
      setLoaded(true)
      setMoments(moments2)
    }

    function getMoment() {
      if(!moments || moments.length < 1 || 
        page < 1 || page > moments.length) {
        return { image: "", audio:"", subtitle:""}
      }
      return moments[page-1]
    }
  
    useEffect(() => {
      console.log("load")
      getMoments()
    }, [])

  const totalPage = moments.length
  const moment = getMoment()

  return(<>
    <PrevNext page={page} totalPage={totalPage} setPage={setPage}/>
    <Moment image={moment.image} audio={moment.audio} 
      subtitle={moment.subtitle}/>
  </>)
}