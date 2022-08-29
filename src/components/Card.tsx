import React from 'react'

import { GoComment } from 'react-icons/go'
import { AiOutlineLike, AiOutlineShareAlt, AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import { IoBanOutline, IoTrashOutline } from 'react-icons/io5'
import { CgMoreO } from 'react-icons/cg'
import { TiTick } from 'react-icons/ti'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { IDateType } from '../types'

import NoPostImage from '../assets/no-post-image.png'

import Moment from 'react-moment'

interface ICardProps {
  item: IDateType
}

const Card: React.FC<ICardProps> = (props) => {
  const { item } = props
  return (
    <div className='card bg-white flex rounded-md overflow-hidden border border-[#e5e6ee]'>
      <div className={`w-10 h-full flex items-center justify-center ${item.status === 0 ? 'bg-brand-needApproval' : item.status === 1 ? 'bg-brand-scheduled' : item.status === 2 ? 'bg-brand-notes' : item.status === 3 ? 'bg-brand-published' : item.status === 4 ? 'bg-brand-error' : ''}`}>
        {item.account.channel === 'facebook' ? <FaFacebookF size={24} className="text-white" /> : item.account.channel === 'instagrambusiness' ? <FaInstagram size={24} className="text-white" /> : item.account.channel === 'twitter' ? <FaTwitter size={24} className="text-white" /> : ''}
      </div>
      <div className='flex-1 px-5 py-6 gap-5 flex flex-wrap flex-col'>
        <div className='flex items-center justify-between'>
          <div className="date text-xs text-[#acacac]">
            <Moment format="DD MMM YYYY - HH:mm">{!item?.is_published ? item?.created_at : item?.published_at}</Moment>
          </div>
          <ul className='buttons flex flex-wrap items-center justify-center gap-2'>
            <li>
              {item.status === 0 ? <TiTick size={18} className="text-[#d5d5d5]" /> : item.status === 1 ? <IoBanOutline size={18} className="text-[#d5d5d5]" /> : ''}
            </li>
            <li>
              <IoTrashOutline size={18} className="text-[#d5d5d5]" />
            </li>
            <li>
              <CgMoreO size={18} className="text-[#d5d5d5]" />
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-brand-deepGray text-xs font-medium'>
            {item.entry.message}
          </p>
          <img
            className='border border-brand-deepGray w-[325px] h-[325px] object-cover'
            src={item.entry.image[0]}
            alt='post'
            onError={({ currentTarget }) => {
              currentTarget.onerror = null
              currentTarget.src = NoPostImage
            }}
            width={325}
            height={325}
          />
          <ul className='flex items-center justify-start gap-2'>
            <li className='flex items-center justify-center gap-1'>
              {item.account.channel === 'twitter' ? <AiOutlineHeart size={17} className="text-brand-deepGray" /> : <AiOutlineLike size={17} className="text-brand-deepGray" />}
              <span className="text-brand-deepGray">0</span>
            </li>
            <li className='flex items-center justify-center gap-1'>
              <GoComment size={17} className="text-brand-deepGray" />
              <span className="text-brand-deepGray">0</span>
            </li>
            <li className='flex items-center justify-center gap-1'>
              <AiOutlineShareAlt size={17} className="text-brand-deepGray" />
              <span className="text-brand-deepGray">0</span>
            </li>
            <li className='flex items-center justify-center gap-1'>
              <AiOutlineEye size={17} className="text-brand-deepGray" />
              <span className="text-brand-deepGray">0</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
