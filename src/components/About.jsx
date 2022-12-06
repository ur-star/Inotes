// import { useEffect } from 'react'
import React,{useContext} from 'react'
import noteContext from '../context/notes/NoteContext'

export const About = () => {
  const a = useContext(noteContext)
  return (
    <div>This is About {a.name} and age {a.age}</div>
    
  )
}

export default About;