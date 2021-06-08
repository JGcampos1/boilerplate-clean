import { InvalidFieldError } from '~/validation/errors'
import { FieldValidation, ValidationError } from '~/validation/protocols'

export class CompareFieldsValidation implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly fieldToCompare: string
  ) {}

  validate(input: object): ValidationError | undefined {
    return input[this.field] !== input[this.fieldToCompare]
      ? new InvalidFieldError({
          name: 'exceptions:MISMATCH_FIELD'
        })
      : undefined
  }
}
