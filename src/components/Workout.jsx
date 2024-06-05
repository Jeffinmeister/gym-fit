import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExcerciseCard from './ExcerciseCard'

export default function Workout(props) {

  const {workout}=props
  return (
    <SectionWrapper header={"welcome to"} title={["The", "DANGER", "zome"]}>
      <div className='flex flex-col gap-4'>
    {workout.map((excercise,i)=>{
      return (
        <ExcerciseCard excercise={excercise} key={i}></ExcerciseCard>
      )
    })}

      </div>
    </SectionWrapper>
  )
}
