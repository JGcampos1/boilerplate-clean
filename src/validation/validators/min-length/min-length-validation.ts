import { InvalidFieldError } from '~/validation/errors'
import { FieldValidation, ValidationError } from '~/validation/protocols'

export class MinLegthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minLength: number) {}

  validate(input: object): ValidationError | undefined {
    return input[this.field]?.length < this.minLength
      ? new InvalidFieldError({
          name: 'exceptions:MIN_LENGTH',
          option: { length: this.minLength }
        })
      : undefined
  }
}
