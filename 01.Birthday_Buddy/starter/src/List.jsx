import React from 'react'
import Person from './Person';

export  const List = ({people}) => {
  return (
<section>
{people.map((people)=>{
  return <Person key={people.id} {...people}/>
})}


</section>  )
}; 
