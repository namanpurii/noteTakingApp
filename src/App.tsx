import React, { useState } from "react"
import { useEffect } from "react"

function App() {
  let isDown = false
  let canvas: HTMLCanvasElement|null, ctx:CanvasRenderingContext2D|null, canvasX, canvasY
  canvas = document.getElementById("main-canvas") as HTMLCanvasElement
  if(canvas){
    ctx = canvas.getContext("2d") 
    if(ctx) {
      ctx.fillStyle = "#FFFFFF"
      ctx.lineWidth = 5
      ctx.fillRect(0,0, window.innerWidth, window.innerHeight)
    }
  }

  function handleMouseDown(e:MouseEvent) {
    isDown = true
    if(canvas && ctx) {
        canvasX = e.pageX
        canvasY = e.pageY
        ctx.beginPath()
        ctx.moveTo(canvasX, canvasY)
    }
  }

  function handleMouseMove(e:MouseEvent) {
    if(isDown && canvas && ctx) {
      canvasX = e.pageX 
      canvasY = e.pageY
      ctx.lineTo(canvasX, canvasY)
      ctx.strokeStyle = "#000000"
      ctx.stroke()
    }
  }
  function handleMouseUp(e:MouseEvent) {
    isDown = false
    ctx?.save()
  }

  return (
    <>
      <div className="overflow-hidden">
        <canvas id="main-canvas" width={window.innerWidth} height={window.innerHeight} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>Canvas is not supported by your broswer</canvas>
      </div>
    </>
  )
}

export default App
