import React from 'react'
import { FaArrowRight, FaCopy } from 'react-icons/fa'
import copy from 'copy-to-clipboard'

import { IconButton, Input, InputGroup, InputGroupAddon } from 'components'



const LinkReadOnlyInput = ({ link }: { link: string }) => {
  const getUrl = (link: string): string => (
    `${window.location.origin}${link}`
  )

  const url = getUrl(link)

  return (
    <InputGroup>
      <Input readOnly value={url} />
      <InputGroupAddon addonType='append'>
        <IconButton
          icon={<FaCopy />}
          onClick={() => copy(url)}
          />
        <IconButton
          icon={<FaArrowRight />}
          link={link}
          />
      </InputGroupAddon>

    </InputGroup>
  )
}

export default LinkReadOnlyInput
