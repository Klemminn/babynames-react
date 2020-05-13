import React from 'react'
import { Input as BootstrapInput } from 'reactstrap'

type InputProps = {
  onChange?: Function,
  [rest:string]: any
}

const Input = ({ onChange, ...rest }: InputProps) => (
  <BootstrapInput
    onChange={(e) => {
      onChange && onChange(e.target.value)
    }}
    {...rest}
  />
)

export default Input
