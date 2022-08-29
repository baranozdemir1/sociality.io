import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'

import Moment from 'react-moment'

import avatar from './assets/avatar.jpg'

import { IDataType } from './types'

import { useAppDispatch, useAppSelector } from './app/hooks'
import { setApiData } from './app/apiDataReducer'
import Card from './components/Card'

const App: React.FC = () => {
  const dataFromState = useAppSelector(state => state.apiData)
  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState<boolean>(true)

  const getData: any = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get<IDataType>('https://api.jsonbin.io/v3/b/62ed1523e13e6063dc6cd5ee', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-ACCESS-KEY': '$2b$10$smpejxmp4gmvulslxzJAs.gQ4v4PXntI/WeSCOOFXAd3KZl7LFJcW'
        }
      })
      dispatch(setApiData(data))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App bg-brand-home">
      <Layout>
        <div className='flex items-center justify-between mb-8'>
          <ul className='flex flex-wrap gap-5'>
            <li className='flex items-center justify-center gap-2 text-sm'>
              <span className='block w-2 h-2 rounded-full text-[#444444] bg-brand-published'></span>
              Published
            </li>
            <li className='flex items-center justify-center gap-2 text-sm'>
              <span className='block w-2 h-2 rounded-full text-[#444444] bg-brand-scheduled'></span>
              Scheduled
            </li>
            <li className='flex items-center justify-center gap-2 text-sm'>
              <span className='block w-2 h-2 rounded-full text-[#444444] bg-brand-needApproval'></span>
              Need Approval
            </li>
            <li className='flex items-center justify-center gap-2 text-sm'>
              <span className='block w-2 h-2 rounded-full text-[#444444] bg-brand-error'></span>
              Error
            </li>
            <li className='flex items-center justify-center gap-2 text-sm'>
              <span className='block w-2 h-2 rounded-full text-[#444444] bg-brand-notes'></span>
              Notes
            </li>
          </ul>
          <div className='w-16 h-16 bg-white border border-[#e5e6ee] rounded-full overflow-hidden'>
            <img src={avatar} height={64} width={64} alt='avatar' />
          </div>
        </div>
        {loading
          ? <div className='flex justify-start items-center'>
              <div className='rounded-lg border border-brand-default py-2 px-5 flex items-center justify-center'>Data is fetching...</div>
            </div>
          : (
          <>
            <div className='postsByDate mb-5'>
              <span className='text-brand-deepGray'>
                <Moment format="DD MMMM YYYY">2021-07-01</Moment>
              </span>
              <div className='cards grid grid-flow-row grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3'>
                {dataFromState?.record?.posts_by_date['2021-07-01']?.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
            </div>
            <div className='postsByDate mb-5'>
              <span className='text-brand-deepGray'>
                <Moment format="DD MMMM YYYY">2021-06-17</Moment>
              </span>
              <div className='cards grid grid-flow-row grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3'>
                {dataFromState?.record?.posts_by_date['2021-06-17']?.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
            </div>
          </>
            )}
      </Layout>
    </div>
  )
}

export default App
