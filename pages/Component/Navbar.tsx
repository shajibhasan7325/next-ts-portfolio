import Link from "next/link"
import { useRouter } from "next/router"
import { FunctionComponent, useEffect, useState } from "react"


const NavItem:FunctionComponent<{
 activeItem:string,
 setActiveItem:Function,
 name:string,
 route:string
}>=({activeItem,name,route,setActiveItem})=>{
  return(
    
      activeItem !== name ?  (<Link href={route}>
      <a>
         <span onClick={()=>setActiveItem(name)} className='hover:text-green' >{name}</span> 
      </a>
  </Link>
    
  ):null
  )
}





const Navbar = () => {
    const [activeItem, setActiveItem]=useState <string>('')
    const {pathname}= useRouter()
    useEffect(() => {
    if(pathname === '/' ) setActiveItem('About')
    if(pathname === '/project' ) setActiveItem('Project')
    if(pathname === '/resume' ) setActiveItem('Resume')
    
     
    }, [])



  return (
    <div className="flex justify-between px-5 py-3 my-3 ">
        <span className="text-xl font-bold border-b-4 text-green border-green">{activeItem}</span>
        <div  className="flex space-x-5 text-lg md:text-2xl " >
  <NavItem activeItem={activeItem} name='About' route="/" setActiveItem={setActiveItem} />
  <NavItem activeItem={activeItem} name='Project' route="/project" setActiveItem={setActiveItem} />
  <NavItem activeItem={activeItem} name='Resume' route="/resume" setActiveItem={setActiveItem} />

           
        </div>
    </div>
  )
}

export default Navbar