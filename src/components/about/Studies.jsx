import React from 'react'
import uvm from '../../assets/logos/uvm.png'
import udg from '../../assets/logos/udg.png'
import ListCard from '../ListCard'


const Studies = () => {
  return (
    <>

    <ListCard title="Universidad del Valle de Mexico" logo={uvm} desc="Ingenieria de Sistemas (2021)" />
    <ListCard title="Universidad de Guadalajara" logo={udg} desc="Técnica en Informatica (2015)" />
  
   </>
  )
}

export default Studies