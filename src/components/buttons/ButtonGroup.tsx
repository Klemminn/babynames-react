import React from 'react'
import { ButtonGroup as BootstrapButtonGroup } from 'reactstrap'

type ButtonGroupProps = {
  className?: string,
  [rest:string]: any
}

const ButtonGroup = ({ className, ...rest }: ButtonGroupProps) => (
  <BootstrapButtonGroup
    className={['flex-wrap', className].join(' ')}
    {...rest}
  />
)

export default ButtonGroup
