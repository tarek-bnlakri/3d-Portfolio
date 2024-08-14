import React, { Suspense ,useState,useEffect,useRef} from 'react'
import Loader from '../Components/Loader'
import { Canvas } from '@react-three/fiber'
import Island from '../models/island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../Components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'
function Home() {
  const audioRef=useRef(new Audio(sakura))
  audioRef.current.volume=0.4
  audioRef.current.loop=true
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage,setCurrentStage]=useState(1)
  useEffect(() => {
    if(isPlayingMusic)
      audioRef.current.play()
  
    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])
  
  const adjustIslandForScreen=()=>{
    let screenScale=null;
    let screenPostion=[0,-6.5,-43];
    let rotation =[0.1,4.7,0];

    if(window.innerWidth<768){
      screenScale=[0.9,0.9,0.9]
    }else{
      screenScale=[1,1,1]
    }
    return [screenScale,screenPostion,rotation]
  }
  const adjustPlaneForScreen=()=>{
    let screenScale;
    let screenPosition;
    

    if(window.innerWidth<768){
      screenScale=[1,1,1]
      screenPosition=[0,-1.5,0]
    }else{
      screenScale=[1.8,1.8,1.8]
      screenPosition=[0.5,-3,-3.5]
    }
    return [screenScale,screenPosition]
  }
  const [planeScale,planeScreenPosition]=adjustPlaneForScreen()
  const [islandScale,islandPostion,rotation]=adjustIslandForScreen()
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage &&<HomeInfo currentStage={currentStage}/>}
      </div>
        <Canvas className={`w-full h-screen bg-transparent ${isRotating?`cursor-grabbing`:`cursor-grab`}`}
        camera={{near:0.1,far:1000}}
        >
          <Suspense fallback={<Loader/>}>
              <directionalLight intensity={2} position={[1,1,1]}/>

              <ambientLight intensity={0.5} />
              <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>
              <Bird/>
              <Sky isRotating={isRotating}/>
              <Island 
              setCurrentStage={setCurrentStage}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              position={islandPostion}
              scale={islandScale}
              rotation={rotation}/>
              <Plane
              isRotating={isRotating}
              scale={planeScale}
              position={planeScreenPosition}
              rotation={[6,20,0.8]}
              />
          </Suspense>
        </Canvas>
        <div className='absolute bottom-2 left-2'>
          <img src={isPlayingMusic? soundoff : soundon} alt="sound" 
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={()=>setIsPlayingMusic(!isPlayingMusic)}
          />
        </div>
      </section>
  )
}

export default Home