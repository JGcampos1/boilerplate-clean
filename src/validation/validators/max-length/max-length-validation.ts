import { InvalidFieldError } from '~/validation/errors'
import { FieldValidation, ValidationError } from '~/validation/protocols'

export class MaxLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly maxLength: number) {}

  validate(input: object): ValidationError | undefined {
    const inputData = input[this.field] as string
    return inputData?.length > this.maxLength
      ? new InvalidFieldError({
          name: 'exceptions:MAX_LENGTH',
          option: { length: this.maxLength }
        })
      : undefined
  }
}
