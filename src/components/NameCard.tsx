import React from 'react'

import { Card, VoteButtons } from 'components'
import { Name } from 'types'

type NameCardProps = {
  name: Name,
  onSelect: Function,
  [rest:string]: any
}

const NameCard = ({ name, onSelect, ...rest }: NameCardProps) => (
  <Card
    className='name-card main-card'
    title={name.name}
  >
    <p>
      {name.firstNamed} bera {name.name} sem fyrsta nafn.
      <br />
      {name.secondNamed} bera {name.name} sem annað nafn.
    </p>
    <VoteButtons
      onSelect={onSelect}
      {...rest}
    />
  </Card>
)

export default NameCard
