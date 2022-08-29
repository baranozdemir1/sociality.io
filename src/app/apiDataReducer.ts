import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDataType } from '../types'

const initialState: IDataType = {
  record: {
    posts_by_date: {
      '2021-01-01': [
        {
          published_at: '2021-01-01T00:00:00.000Z',
          is_published: true,
          status: 1,
          entry: {
            type: 'text',
            message: 'Hello World',
            image: []
          },
          updated_at: '2021-01-01T00:00:00.000Z',
          created_at: '2021-01-01T00:00:00.000Z',
          link: 'https://example.com',
          account: {
            name: 'Example',
            username: 'example',
            image: 'https://example.com/image.png',
            link: 'https://example.com',
            channel: 'example'
          }
        }
      ]
    }
  },
  metadata: {
    id: '',
    private: true,
    createdAt: '2022-08-05T13:03:31.180Z'
  }
}

export const apiData = createSlice({
  name: 'apiData',
  initialState,
  reducers: {
    setApiData: (state: IDataType, action: PayloadAction<IDataType>) => {
      state.record = action.payload.record
      state.metadata = action.payload.metadata
    }
  }
})

export const { setApiData } = apiData.actions

export default apiData.reducer
