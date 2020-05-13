import React from 'react'
import { Card as BootstrapCard, CardBody, CardTitle } from 'reactstrap'

import './Card.scss'

type CardProps = {
  title?: string,
  [rest:string]: any
}

const Card = ({ className, children, title, ...rest }: CardProps) => {
  const classes = ['card-component']
  className && classes.push(className)

  return (
    <BootstrapCard className={classes.join(' ')} {...rest}>
      <CardBody>
        {title && <CardTitle>{title}</CardTitle>}
        {children}
      </CardBody>
    </BootstrapCard>
  )
}

export default Card
