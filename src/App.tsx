import React from "react"
import { useEffect } from "react"

function App() {
  useEffect(()=>{
    const canvas = document.getElementById("main-canvas") as HTMLCanvasElement
    if(canvas){
      const ctx = canvas.getContext("2d") 
      if(ctx) {
        ctx.fillStyle = "#121212"
        ctx.fillRect(0,0, window.innerWidth, window.innerHeight)
        ctx.fillStyle = "#BB86FC"
        ctx.font = "30px Arial";
        ctx.fillText("Note Taking App", 10, 50);
      }
    }
  }, [])
  return (
    <>
      <div className="overflow-hidden">
        <h1 className="text-xl">Work in Progress ...</h1>
        <canvas id="main-canvas" width={window.innerWidth} height={window.innerHeight}>this is the main canvas</canvas>
      </div>
    </>
  )
}

export default App
