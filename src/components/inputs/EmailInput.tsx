import React, { useState } from 'react'
import { FaCheck, FaEnvelope } from 'react-icons/fa'
import * as yup from 'yup'

import { IconButton, Input, InputGroup, InputGroupAddon } from 'components'
import { ErrorUtils } from 'utils'

type EmailInputProps = {
  onSubmit?: Function,
  saving?: boolean,
  hasEmail?: boolean,
  [rest:string]: any
}

const schema = yup.object().shape({
  email: yup.string()
    .required('Þú verður að skrá netfang.')
    .email('Netfang er ekki á réttu formi.')
})

const EmailInput = ({ onSubmit, saving, hasEmail, ...rest }: EmailInputProps) => {
  const [email, setEmail]: [string, Function] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      await schema.validate({ email })
      onSubmit && onSubmit(email)
    } catch (e) {
      e.errors && ErrorUtils.displayErrors(e.errors)
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <InputGroup>
        <Input
          type='email'
          value={hasEmail ? 'Netfang skráð' : email}
          onChange={(value: string) => setEmail(value)}
          disabled={hasEmail}
          {...rest}
        />
        <InputGroupAddon addonType='append'>
          <IconButton
            icon={hasEmail ? <FaCheck /> : <FaEnvelope />}
            disabled={hasEmail}
            type='submit'
            loading={saving}
          />
        </InputGroupAddon>
      </InputGroup>
    </form>
  )
}

export default EmailInput
