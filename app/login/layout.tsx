'use client'

import {useRef, useEffect} from 'react'

import gsap from 'gsap'

const LoginLayout = ({children}: {children: React.ReactNode}) => {
   const ref = useRef<HTMLDivElement>(null)
   useEffect(() => {
      gsap.from(ref.current,
         {opacity:1, duration: .5, autoAlpha:0}
      )

      gsap.fromTo(ref.current!.childNodes, 
         {opacity: 0, y: 5},
         {duration: .25, y:0, opacity: 1, stagger: .2, delay: .05, ease: "power1.out"}  
      )
   }, [])

   return (
      <div className="overflow-auto h-full flex flex-col items-center justify-center gap-2 shadow-inner p-2 rounded-md invisible" ref={ref}>
         {children}
      </div>
  )
}

export default LoginLayout