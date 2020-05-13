import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ButtonGroup, Button, Card, Col, Row, NameCard } from 'components'
import { AnswerService, NamesService } from 'services'
import { ErrorUtils } from 'utils'
import type { Name, Count } from 'types'

import './Names.scss'

const nameTypes = [
  {
    label: 'Handahófskennd',
    value: 'random'
  },
  {
    label: 'Algeng',
    value: 'common'
  },
  {
    label: 'Óalgeng',
    value: 'uncommon'
  },
  {
    label: 'Stutt',
    value: 'short'
  },
  {
    label: 'Löng',
    value: 'long'
  }
]

type NamesProps = {
  history: any
}

const defaultCount: Count = {
  liked: 0,
  disliked: 0,
  hasEmail: false
}

const Names = ({ history }: NamesProps) => {
  const [type, setType]: [string, Function] = useState('random')
  const [name, setName]: [Name, Function] = useState({})
  const [count, setCount]: [Count, Function] = useState(defaultCount)
  const [loading, setLoading]: [boolean, Function] = useState(false)
  const { isMale, code }: { isMale: string, code: string} = useParams()

  useEffect(() => {
    checkGroup()
    // eslint-disable-next-line
  }, [])

  const checkGroup = async () => {
    try {
      if (!code) {
        const group = await AnswerService.createNewGroup()
        history.push(`/names/${isMale}/${group.code}`)
      } else {
        const data = await NamesService.getNameCount({ code, isSender: 1 })
        setCount(data)
      }
    } catch (e) {
      ErrorUtils.displayError(e.data)
    }
    getName(type)
  }

  const getName = async (nameType: string) => {
    try {
      const response = await NamesService.getNames({ isMale, code, type: nameType })
      setName(response[0])
    } catch (e) {
      ErrorUtils.displayError(e.data)
    }
  }

  const handleSelect = async (isApproved: boolean) => {
    setLoading(true)
    try {
      await AnswerService.newAnswer({
        code,
        isApproved,
        name: name.name || ''
      })
      const newCount = { ...count }
      if (isApproved) {
        newCount.liked += 1
      } else {
        newCount.disliked += 1
      }
      setCount(newCount)
      getName(type)
    } catch (e) {
      ErrorUtils.displayError(e)
    } finally {
      setLoading(false)
    }
  }

  const onSelectType = (nameType: string) => {
    setType(nameType)
    getName(nameType)
  }

  return (
    <div className='names-page'>
      <ButtonGroup className='type-buttons'>
        {nameTypes.map(({ label, value }) => (
          <Button
            key={value}
            onClick={() => onSelectType(value)}
            color='light'
            active={type === value}
          >
            {label}
          </Button>
        ))}
      </ButtonGroup>
      <Row>
        <Col md={6}>
          <NameCard
            name={name}
            onSelect={(isApproved: boolean) => handleSelect(isApproved)}
            disabled={loading}
          />
        </Col>
        <Col md={6}>
          <Card className='main-card'>
            <div className='status'>
              Valin nöfn: {count.liked}
              <br />
              Heildar svör: {count.liked + count.disliked}
            </div>
            {(count.liked > 0) && (
              <Button
                className='finish'
                color='primary'
                link={`/send/${code}`}
              >
                Ljúka vali
              </Button>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Names
