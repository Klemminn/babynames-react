import React from 'react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

import { IconButton, ButtonGroup } from 'components'

import './VoteButtons.scss'

type VoteButtonsProps = {
  onSelect: Function,
  [rest:string]: any
}

const VoteButtons = ({ onSelect, ...rest }: VoteButtonsProps) => (
  <ButtonGroup className='vote-buttons-component'>
    {[true, false].map((isApproved, index) => (
      <IconButton
        key={index}
        color={isApproved ? 'success' : 'danger'}
        icon={isApproved ? <FaThumbsUp /> : <FaThumbsDown />}
        onClick={() => onSelect(isApproved)}
        {...rest}
      />
    ))}
  </ButtonGroup>
)

export default VoteButtons
