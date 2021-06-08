import { RequiredFieldError } from '~/validation/errors'
import { FieldValidation, ValidationError } from '~/validation/protocols'

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: object): ValidationError | undefined {
    return input[this.field]
      ? undefined
      : new RequiredFieldError({
          name: 'exceptions:REQUIRED_FIELD'
        })
  }
}
