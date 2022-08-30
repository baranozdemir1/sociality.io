import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import Logo1 from '../assets/logo-1.jpg'
import Logo2 from '../assets/logo-2.jpg'
import Logo3 from '../assets/logo-3.jpg'
import Logo4 from '../assets/logo-4.png'
import Logo5 from '../assets/logo-5.png'
import Logo6 from '../assets/logo-6.png'

interface ILayoutProps {
  children: JSX.Element | JSX.Element[]
}

interface ISVGIconProps {
  className: string
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  const [brandActive, setBrandActive] = useState<Number | null>(null)
  const [isMenuActive, setIsMenuActive] = useState<Number | null>(null)

  const brands = [
    {
      name: '100% Organic',
      logo: Logo1,
      notification: 0
    },
    {
      name: '100% Organic',
      logo: Logo2,
      notification: 99
    },
    {
      name: '100% Organic',
      logo: Logo3,
      notification: 0
    },
    {
      name: '100% Organic',
      logo: Logo4,
      notification: 0
    },
    {
      name: '100% Organic',
      logo: Logo5,
      notification: 0
    },
    {
      name: '100% Organic',
      logo: Logo6,
      notification: 0
    }
  ]

  const SummaryIcon: React.FC<ISVGIconProps> = (props) => {
    return (
      <svg className={`${props.className} h-5 w-5`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    )
  }

  const PublishIcon: React.FC<ISVGIconProps> = (props) => {
    return (
      <svg className={`${props.className} h-5 w-5`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    )
  }

  const EngageIcon: React.FC<ISVGIconProps> = (props) => {
    return (
      <svg className={`${props.className} h-5 w-5`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    )
  }

  const ListenIcon: React.FC<ISVGIconProps> = (props) => {
    return (
      <svg className={`${props.className} h-5 w-5`} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    )
  }

  const ReportIcon: React.FC<ISVGIconProps> = (props) => {
    return (
      <svg className={`${props.className} h-5 w-5`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    )
  }

  const PlusIcon: React.FC<ISVGIconProps> = (props) => {
    return (
      <svg className={`${props.className} h-5 w-5`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    )
  }

  const MinusIcon: React.FC<ISVGIconProps> = (props) => {
    return (
      <svg className={`${props.className} h-5 w-5`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
      </svg>
    )
  }

  const menuItems = [
    {
      id: 0,
      name: 'SUMMARY',
      icon: <SummaryIcon className={isMenuActive === 0 ? 'text-white' : 'text-brand-default'} />,
      subMenu: [
        {
          name: 'Compose',
          link: '/publish/compose'
        },
        {
          name: 'Feed',
          link: '/publish/feed'
        }
      ]
    },
    {
      id: 1,
      name: 'PUBLISH',
      icon: <PublishIcon className={isMenuActive === 1 ? 'text-white' : 'text-brand-default'} />,
      subMenu: [
        {
          name: 'Compose',
          link: '/publish/compose'
        },
        {
          name: 'Feed',
          link: '/publish/feed'
        }
      ]
    },
    {
      id: 2,
      name: 'ENGAGE',
      icon: <EngageIcon className={isMenuActive === 2 ? 'text-white' : 'text-brand-default'} />,
      subMenu: [
        {
          name: 'Compose',
          link: '/publish/compose'
        },
        {
          name: 'Feed',
          link: '/publish/feed'
        }
      ]
    },
    {
      id: 3,
      name: 'LISTEN',
      icon: <ListenIcon className={isMenuActive === 3 ? 'text-white' : 'text-brand-default'} />,
      subMenu: [
        {
          name: 'Compose',
          link: '/publish/compose'
        },
        {
          name: 'Feed',
          link: '/publish/feed'
        }
      ]
    },
    {
      id: 4,
      name: 'REPORT',
      icon: <ReportIcon className={isMenuActive === 4 ? 'text-white' : 'text-brand-default'} />,
      subMenu: [
        {
          name: 'Compose',
          link: '/publish/compose'
        },
        {
          name: 'Feed',
          link: '/publish/feed'
        }
      ]
    }
  ]

  return (
    <>
      <div className='flex '>
        <div className='md:flex hidden fixed flex-col w-64 h-screen bg-brand-dark3'>
          <div className='bg-brand-dark2 flex items-center justify-center py-3'>
            <img src={Logo} alt="logo" width={140} height={30} />
          </div>
          <div className='flex w-full h-full'>
            <div className='w-16 bg-brand-dark flex flex-col  justify-start gap-2 pt-5'>
              {
                brands.map((brand: any, index: number) => (
                  <div key={index} className={`brand relative pt-2 cursor-pointer flex ${brandActive === index ? 'brandActive' : ''}`} onClick={() => setBrandActive(index)}>
                    <img src={brand.logo} alt={brand.name} width={37} height={37} className="rounded-lg ml-2" />
                    {brand.notification > 0 && <span className='absolute top-0 right-2 bg-[#3ac1a9] h-[18px] w-[18px] text-[10px] text-center rounded-full text-white flex items-center justify-center'>{brand.notification}</span>}
                  </div>
                ))
              }
            </div>
            <div className='flex-1'>
              <ul className='flex flex-col w-full'>
                <li>
                  <a className='flex justify-between items-center p-3'>
                    <div className='flex items-center justify-center gap-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brand-default">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                      </svg>
                      <span className='text-white text-xs col-span-2'>NOTIFICATIONS</span>
                    </div>
                    <span className='text-white text-xs border border-[#73d9c7] py-2 px-4 h-0 w-0 rounded-md flex items-center justify-center'>29</span>
                  </a>
                </li>
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <div className={`relative flex items-center justify-between p-3 ${isMenuActive === item.id ? 'bg-brand-default' : ''}`} onClick={() => setIsMenuActive(item.id)}>
                      {isMenuActive === item.id && item.subMenu !== undefined && <span className='activeMark'></span>}
                      <div className='flex items-center justify-center gap-3'>
                        {item.icon}
                        <span className='text-white text-xs'>{item.name}</span>
                      </div>
                      {isMenuActive !== item.id && item.subMenu !== undefined ? <PlusIcon className={`${isMenuActive === item.id ? 'text-white' : 'text-black'}`} /> : <MinusIcon className={`${isMenuActive === item.id ? 'text-white' : 'text-black'}`} />}
                    </div>
                    {item.subMenu !== undefined && isMenuActive === item.id && (
                      <ul className='bg-[#32363a] px-8 list-disc'>
                        {item.subMenu?.map((subItem, index) => (
                          <li key={index} className='px-2 py-3 text-xs text-white hover:text-brand-default'>
                            <a href={subItem.link}>
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='px-10 py-8 flex-1 md:ml-64'>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Layout
