import React, { useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import Cropper from 'react-easy-crop'
import reportWebVitals from './reportWebVitals';
import './index.css'


const App = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])
  return (
    <div className="App">
      <div className="crop-container">
        <Cropper
          image="https://picsum.photos/1200/800"
          crop={crop}
          zoom={zoom}
          aspect={1 / 1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div className="controls">
        <input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e) => {
            setZoom(e.target.value)
          }}
          className="zoom-range"
        />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
reportWebVitals();