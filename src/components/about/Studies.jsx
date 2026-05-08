import React from 'react'
import uvm from '../../assets/logos/uvm.png'
import udg from '../../assets/logos/udg.png'
import graduado from '../../assets/graduado.png'
import { MdSchool } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

const Studies = () => {
  const { t } = useTranslation('global')

  const studies = [
    {
      title: 'Universidad del Valle de México',
      logo: uvm,
      period: '2018 – 2023',
      subtitle: t('studies.engineer'),
      details: t('about.uvm-dip')
    },
    {
      title: 'Universidad de Guadalajara',
      logo: udg,
      period: '2014 – 2018',
      subtitle: t('studies.engineer'),
      details: t('about.udg-dip')
    }
  ]

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-start">
      <div className="flex-shrink-0 flex justify-center md:justify-start">
        <div className="overflow-hidden rounded-lg">
          <img
            src={graduado}
            alt="graduation"
            className="w-full h-36 object-cover md:w-32 md:h-44 brightness-90"
          />
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {studies.map((item) => (
          <div key={item.title} className="figma-frame p-5 group">
            <div className="flex items-center gap-3">
              <img src={item.logo} alt="School logo" className="h-8 w-8 object-contain opacity-80" />
              <div className="flex h-8 w-8 items-center justify-center rounded bg-red-500/10 text-red-400">
                <MdSchool className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-white truncate">{item.title}</h3>
                <p className="text-xs text-white/40">{item.subtitle}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.06]">
              <p className="text-xs font-medium text-red-400 mb-2">{item.period}</p>
              <p className="text-xs text-white/50 leading-relaxed">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Studies
