import React from 'react'

import { Button } from 'components'

import './IconButton.scss'

type IconButtonProps = {
  children?: any,
  icon: any,
  className?: string,
  [rest:string]: any
}

const IconButton = ({ children, icon, className, ...rest }: IconButtonProps) => {
  const classes = ['icon-button-component']
  className && classes.push(className)
  children && classes.push('has-children')

  return (
    <Button
      className={classes.join(' ')}
      {...rest}
    >
      {icon} {!!children && children}
    </Button>
  )
}

export default IconButton
