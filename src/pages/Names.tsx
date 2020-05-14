import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ButtonGroup, Button, Card, Col, Input, Row, NameCard } from 'components'
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

const defaultName: Name = {
  name: '',
  firstNamed: 0,
  secondNamed: 0
}

let startsWith = ''
const Names = ({ history }: NamesProps) => {
  const [type, setType]: [string, Function] = useState('random')
  const [name, setName]: [Name, Function] = useState(defaultName)
  const [count, setCount]: [Count, Function] = useState(defaultCount)
  const [loading, setLoading]: [boolean, Function] = useState(false)
  const [saving, setSaving]: [boolean, Function] = useState(false)
  const { isMale, code }: { isMale: string, code: string} = useParams()

  useEffect(() => {
    checkGroup()
    startsWith = ''
    // eslint-disable-next-line
  }, [])

  const checkGroup = async () => {
    setLoading(true)
    try {
      if (!code) {
        const group = await AnswerService.createNewGroup()
        history.replace(`/names/${isMale}/${group.code}`)
      } else {
        const data = await NamesService.getNameCount({ code, isSender: 1 })
        setCount(data)
      }
      await getName(type)
    } catch (e) {
      ErrorUtils.displayError(e.data)
    } finally {
      setLoading(false)
    }
  }

  const getName = async (nameType: string) => {
    try {
      const response = await NamesService.getNames({ isMale, code, type: nameType, startsWith })
      setName(response[0] || defaultName)
    } catch (e) {
      ErrorUtils.displayError(e.data)
    }
  }

  const handleSelect = async (isApproved: boolean) => {
    setSaving(true)
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
      setSaving(false)
    }
  }

  const onSelectType = (nameType: string) => {
    setType(nameType)
    getName(nameType)
  }

  const handleStartsWithChange = (newStartsWith: string) => {
    startsWith = newStartsWith
    getName(type)
  }

  return loading ? null : (
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
      <Input
        placeholder='Nafn byrjar á...'
        className='mb-4'
        onChangeDelay={800}
        onChange={(value: string) => handleStartsWithChange(value)}
      />
      <Row>
        <Col md={6}>
          <NameCard
            name={name}
            onSelect={(isApproved: boolean) => handleSelect(isApproved)}
            disabled={saving}
            continueButton={count.liked ? code : undefined}
          />
        </Col>
        <Col md={6} className='d-none d-md-block'>
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
