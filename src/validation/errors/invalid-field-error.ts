import { ValidationErrorType } from '~/presentation/common/protocols'
import { ValidationError } from '../protocols'

export class InvalidFieldError extends ValidationError {
  constructor(error: ValidationErrorType) {
    super('InvalidFieldError', error)
  }
}
