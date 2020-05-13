import React from 'react'

import { Button } from 'components'

import './IconButton.scss'

type IconButtonProps = {
  icon: any,
  className?: string,
  [rest:string]: any
}

const IconButton = ({ icon, className, ...rest }: IconButtonProps) => {
  const classes = ['icon-button-component']
  className && classes.push(className)

  return (
    <Button
      className={classes.join(' ')}
      {...rest}
    >
      {icon}
    </Button>
  )
}

export default IconButton
