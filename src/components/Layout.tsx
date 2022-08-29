import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import Logo1 from '../assets/logo-1.jpg'
import Logo2 from '../assets/logo-2.jpg'
import Logo3 from '../assets/logo-3.jpg'
import Logo4 from '../assets/logo-4.png'
import Logo5 from '../assets/logo-5.png'
import Logo6 from '../assets/logo-6.png'

import { MdOutlineNotificationsActive } from 'react-icons/md'
import { AiOutlineFundProjectionScreen, AiOutlineForm, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FiActivity } from 'react-icons/fi'
import { FaRegComments } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'

interface ILayoutProps {
  children: JSX.Element | JSX.Element[]
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
      notification: 99
    },
    {
      name: '100% Organic',
      logo: Logo4,
      notification: 99
    },
    {
      name: '100% Organic',
      logo: Logo5,
      notification: 99
    },
    {
      name: '100% Organic',
      logo: Logo6,
      notification: 99
    }
  ]

  const menuItems = [
    {
      id: 0,
      name: 'SUMMARY',
      icon: <AiOutlineFundProjectionScreen size={20} className={isMenuActive === 0 ? 'text-white' : 'text-brand-default'} />,
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
      icon: <AiOutlineForm size={20} className={isMenuActive === 1 ? 'text-white' : 'text-brand-default'} />,
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
      icon: <FaRegComments size={20} className={isMenuActive === 2 ? 'text-white' : 'text-brand-default'} />,
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
      icon: <FiActivity size={20} className={isMenuActive === 3 ? 'text-white' : 'text-brand-default'} />,
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
      icon: <BsGraphUp size={20} className={isMenuActive === 4 ? 'text-white' : 'text-brand-default'} />,
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
                    <span className='absolute top-0 right-2 bg-[#3ac1a9] h-[18px] w-[18px] text-[10px] text-center rounded-full text-white flex items-center justify-center'>{brand.notification}</span>
                  </div>
                ))
              }
            </div>
            <div className='flex-1'>
              <ul className='flex flex-col w-full'>
                <li>
                  <a className='flex justify-between items-center p-3'>
                    <div className='flex items-center justify-center gap-3'>
                      <MdOutlineNotificationsActive size={20} className='text-brand-default' />
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
                      {isMenuActive !== item.id && item.subMenu !== undefined ? <AiOutlinePlus size={20} className={`${isMenuActive === item.id ? 'text-white' : 'text-black'}`} /> : <AiOutlineMinus size={20} className={`${isMenuActive === item.id ? 'text-white' : 'text-black'}`} />}
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
