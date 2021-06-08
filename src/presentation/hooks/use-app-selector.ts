import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppState } from '~/store/types'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
