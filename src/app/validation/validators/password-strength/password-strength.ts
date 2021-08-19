import { InvalidFieldError } from '~/app/validation/errors'
import { FieldValidation, ValidationError } from '~/app/validation/protocols'

export class PasswordStrengthValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: FieldValidation.Params): ValidationError | undefined {
    const passwordRegex =
      /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    return !input[this.field] || passwordRegex.test(input[this.field])
      ? undefined
      : new InvalidFieldError({
          name: 'exceptions:PASSWORD_STRENGTH'
        })
  }
}
