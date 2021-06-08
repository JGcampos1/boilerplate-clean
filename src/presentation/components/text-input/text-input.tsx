import React from 'react'
import { Controller, Control } from 'react-hook-form'
import { TextField, TextFieldProps } from '@material-ui/core'
import { ValidationErrorType } from '~/presentation/common/protocols'
import { useTranslation } from '~/presentation/hooks'

type Props = TextFieldProps & {
  name: string
  control: Control<any>
  label: string
}

const TextInput = ({
  name,
  defaultValue,
  control,
  label,
  ...inputProps
}: Props) => {
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
