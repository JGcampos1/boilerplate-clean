import { Controller, Control } from 'react-hook-form'

import { TextField, TextFieldProps } from '@mui/material'

import { ValidationErrorType } from '~/app/presentation/common/protocols'
import { useTranslation } from '~/app/presentation/hooks'

type Props = TextFieldProps & {
  name: string
  control?: Control<any>
  label: string
}

const TextInput = ({ name, control, label, ...inputProps }: Props) => {
  const { translate } = useTranslation('exceptions')
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      render={({ field, fieldState: { error, invalid } }) => {
        const errorState = error as unknown as ValidationErrorType

        const errorMessage = errorState?.name || ''
        const errorOption = errorState?.option

        return (
          <TextField
            {...inputProps}
            {...field}
            value={field.value ?? ''}
            label={translate(label)}
            fullWidth
            error={invalid}
            helperText={invalid ? translate(errorMessage, errorOption) : ''}
          />
        )
      }}
    />
  )
}

export default TextInput
