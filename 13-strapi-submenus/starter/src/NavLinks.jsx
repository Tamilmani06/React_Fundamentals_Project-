import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './Context'

const NavLinks = () => {
   const{setPageId}= useGlobalContext();
  return (
    <div className='nav-links'>
        {sublinks.map((link)=>{
            const {page,pageId}=link
            return(
                <button onMouseEnter={()=>setPageId(pageId)} className='nav-link'key={pageId}>{page}</button>
            )
        })}
    </div>
  )
}

export default NavLinks