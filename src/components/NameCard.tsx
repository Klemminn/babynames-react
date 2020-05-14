import React from 'react'
import { FaCheck } from 'react-icons/fa'

import { Card, IconButton, VoteButtons } from 'components'
import { Name } from 'types'

type NameCardProps = {
  name: Name,
  onSelect: Function,
  continueButton?: string,
  unanswered?: number,
  [rest:string]: any
}

const NameCard = ({ name, onSelect, continueButton, unanswered, ...rest }: NameCardProps) => (
  <Card
    className='name-card main-card'
    title={name.name}
  >
    {continueButton && (
      <IconButton
        className='continue-button d-md-none'
        color='primary'
        link={`/send/${continueButton}`}
        icon={<FaCheck />}
      >
        Ljúka vali
      </IconButton>
    )}
    {!!unanswered && (
      <div className='unanswered d-md-none'>
        Ósvarað: {unanswered}
      </div>
    )}
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
