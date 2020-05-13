import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Row, Col, Card, NameCard } from 'components'
import type { Name } from 'types'
import { AnswerService, NamesService } from 'services'
import { ErrorUtils } from 'utils'

type AnswerProps = {
  history: any
}

const Answer = ({ history }: AnswerProps) => {
  const [names, setNames]: [Name[], Function] = useState([])
  const [loading, setLoading]: [boolean, Function] = useState(false)
  const [saving, setSaving]: [boolean, Function] = useState(false)
  const { code } = useParams()

  useEffect(() => {
    getUnfinishedNames()
    // eslint-disable-next-line
  }, [])

  const getUnfinishedNames = async () => {
    setLoading(true)
    try {
      const response = await NamesService.getUnfinished(code)
      setNames(response)
    } catch (e) {
      ErrorUtils.displayError(e)
    } finally {
      setLoading(false)
    }
  }

  const handleSelect = async (isApproved: boolean) => {
    setSaving(true)
    try {
      await AnswerService.finishAnswer({
        code,
        isApproved,
        name: names[0].name || ''
      })
      if (names.length > 1) {
        setNames(names.slice(1))
      } else {
        history.push(`/results/${code}`)
      }
    } catch (e) {
      ErrorUtils.displayError(e)
    } finally {
      setSaving(false)
    }
  }

  return loading ? null : (
    <div className='answer-page'>
      <h1>Hæhæ</h1>
      <p>Sá sem sendi þér þetta vill að þú takir afstöðu til eftirfarandi nafna.</p>
      <p>Þegar þú hefur farið í gegnum öll nöfnin, þá sjáið lista yfir nöfn sem ykkur líkaði :)</p>
      <Row>
        <Col md={6}>
          <NameCard
            name={names[0] || {}}
            onSelect={(isApproved: boolean) => handleSelect(isApproved)}
            disabled={saving}
          />
        </Col>
        <Col md={6}>
          <Card className='main-card'>
            <div className='status'>
              Eftir að svara: {names.length}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Answer
