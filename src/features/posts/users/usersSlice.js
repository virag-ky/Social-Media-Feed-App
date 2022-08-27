import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Bob Miller' },
  { id: '1', name: 'Jane Doe' },
  { id: '2', name: 'Mary Beth' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
