import {
  AccessDeniedError,
  FormError,
  InvalidCredentialsError,
  UnexpectedError
} from '~/domain/common/exceptions'
import { Either } from '~/domain/common/utils'

export type ResponseError =
  | AccessDeniedError
  | InvalidCredentialsError
  | UnexpectedError
  | FormError

export type Response<R = unknown> = Either<ResponseError, R>
