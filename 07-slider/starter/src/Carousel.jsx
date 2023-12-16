import React from 'react'
import {shortList,list,longList} from './data'
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import {useState,useEffect} from 'react'

const Carousel = () => {
    const[people,setPeople]=useState(longList);
    const[currentPerson,setCurrentPerson]=useState(0);
    
    const PrevSlide=()=>{

        setCurrentPerson((oldPerson) =>
        {
            const result =(oldPerson-1+people.length)%people.length
            return result; })
            
    };


    
    const NextSlide=()=>{
        setCurrentPerson((oldPerson) =>
        {
            const result =(oldPerson+1)%people.length
            return result; })
            
    };

    useEffect(()=>{
      
     let sliderId=   setInterval(()=>{
            NextSlide();
        },3000);
        return ()=>{
            clearInterval(sliderId);
        };


    },[currentPerson]);

  return (
    <section className = "slider-Container" >
        {people.map((person,personIndex)=>{
            const {image,name,title,quote,id}=person ;
            return ( <article className='slide'key={id} style={{
                transform : `translateX(${100*(personIndex-currentPerson)}%)`, 
                opacity: personIndex===currentPerson?1:0,
            }}>
                  <img src={image} alt={name} className="person-img" />
                  <p className="name">{name}</p>
                  <h5 className='title'>{title}</h5>
                  <p className='text'>{quote}</p>
                  <FaQuoteRight className='icon'/>
                  </article> 

            )
        })}
        <button type='button' className="next" onClick={NextSlide}><FiChevronRight/></button> 
        <button type='button' className="prev" onClick={PrevSlide}><FiChevronLeft/></button> 
    </section>
      
  )}
export default Carousel 