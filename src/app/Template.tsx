'use client'
import React from "react";
import {motion} from "framer-motion";

const Template = ({children}: {children:React.ReactNode}) => {
  return(
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{ease:"linear",duration:0.5}}>
      {children}
    </motion.div>
  )
}

export default Template;