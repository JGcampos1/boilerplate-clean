import { useForm as useFormRHF, Resolver, FieldValues } from 'react-hook-form'
import { Validation } from '../common/protocols'
import { useValidationResolver } from './use-validation-resolver'

type UseFormParams = {
  validationSchema?: Validation
  mode: 'all' | 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched'
}

export const useForm = <T extends FieldValues>({
  validationSchema,
  mode
}: UseFormParams) => {
  const resolver = useValidationResolver(
    validationSchema
  ) as unknown as Resolver<T, object>

  const { control, handleSubmit } = useFormRHF<T>({ resolver, mode })

  return { control, handleSubmit }
}
