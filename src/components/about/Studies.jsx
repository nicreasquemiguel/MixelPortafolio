import React from 'react'
import uvm from '../../assets/logos/uvm.png'
import udg from '../../assets/logos/udg.png'
import ListCard from './ListCard'
import { useTranslation } from 'react-i18next'

const Studies = () => {
    const {t, i18n} = useTranslation("global")
  return (
    <>

    <ListCard title="Universidad del Valle de Mexico" logo={uvm} desc={t("studies.engineer")}/>
    <ListCard title="Universidad de Guadalajara" logo={udg} desc={t("studies.engineer")} />
  
   </>
  )
}

export default Studies