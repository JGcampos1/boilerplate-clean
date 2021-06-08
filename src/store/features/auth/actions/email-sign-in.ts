import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit'
import { getDependencies } from '~/ioc/helpers'
import { InfraTypes, ServicesTypes } from '~/ioc/types'
import { QueryStatus } from '~/store/types'
import { EmailSignIn } from '~/domain/usecases'
import { CacheStorage } from '~/application/protocols/cache'
import { AUTH_SLICE_ACTIONS, AuthSliceState } from '../types'

const [emailSignInService, cacheStorage] = getDependencies<
  [EmailSignIn, CacheStorage]
>([ServicesTypes.AUTH.EMAIL_SIGN_IN, InfraTypes.CACHE_STORAGE])

export const emailSignIn = createAsyncThunk(
  AUTH_SLICE_ACTIONS.EMAIL_SIGN_IN,
  async (params: { email: string; password: string }, { rejectWithValue }) => {
    const responseOrError = await emailSignInService.auth(params)

    if (responseOrError.isSuccess()) {
      cacheStorage.set('@app/token', responseOrError.value)
      return responseOrError.value
    }
    return rejectWithValue(responseOrError.value.message)
  }
)

export const emailSignInReducer = (
  builder: ActionReducerMapBuilder<AuthSliceState>
) => {
  builder
    .addCase(emailSignIn.pending, (state) => {
      state.emailSignIn.error = ''
      if (!state.emailSignIn.preventLoading) {
        state.emailSignIn.status = QueryStatus.LOADING
      }
    })
    .addCase(emailSignIn.fulfilled, (state, { payload }) => {
      state.emailSignIn.status = QueryStatus.SUCCESS
      state.emailSignIn.preventLoading = false
      state.token = payload
    })
    .addCase(emailSignIn.rejected, (state, { error }) => {
      state.emailSignIn.error = error.message as string
      state.emailSignIn.status = QueryStatus.ERROR
    })
}
