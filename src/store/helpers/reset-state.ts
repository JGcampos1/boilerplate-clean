import { createAction } from '@reduxjs/toolkit'
import { StoreProps } from '../types'

export const resetState = (sliceName: keyof StoreProps['reducers']) =>
  createAction(`${sliceName}/resetState`)()
