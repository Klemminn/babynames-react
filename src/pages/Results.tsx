import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Card, Link, Col, Row } from 'components'
import { NamesService } from 'services'

import './Results.scss'

type SingleResult = {
  firstNamed: number,
  name: string,
  receiverLiked: boolean,
  secondNamed: number,
  senderLiked: boolean
}

type Results = {
  bothLiked: string[],
  receiverLiked: string[],
  senderLiked: string[]
}

const defaultResults = {
  bothLiked: [],
  receiverLiked: [],
  senderLiked: []
}

const Results = () => {
  const [loading, setLoading]: [boolean, Function] = useState(false)
  const [results, setResults]: [Results, Function] = useState(defaultResults)
  const [isNotFinished, setIsNotFinished]: [boolean, Function] = useState(false)
  const { code }: { code: string} = useParams()

  useEffect(() => {
    getResults()
    // eslint-disable-next-line
  }, [])

  const getResults = async () => {
    setLoading(true)
    try {
      const response = await NamesService.getResults(code)
      const bothLiked = response.filter((result: SingleResult) => result.receiverLiked && result.senderLiked).map((result: SingleResult) => result.name )
      const senderLiked = response.filter((result: SingleResult) => result.senderLiked).map((result: SingleResult) => result.name )
      const receiverLiked = response.filter((result: SingleResult) => result.receiverLiked).map((result: SingleResult) => result.name )

      setResults({ bothLiked, receiverLiked, senderLiked })
    } catch (e) {
      setIsNotFinished(true)
    } finally {
      setLoading(false)
    }
  }

  if (isNotFinished) {
    return (
      <div className='results-page'>
        <h1>Nei heyrðu, seinni aðili er ekki búinn að klára yfirferðina!</h1>
        <Link to={`/answer/${code}`}>Fara þangað til að klára!</Link>
      </div>
    )
  }

  return loading ? null : (
    <div className='results-page'>
      <h1>Húrra! Þið eruð búin að klára að fara í gegnum nöfnin!</h1>
      <Row>
        <Col md={4}>
          <Card
            className='main-card'
            title={results.bothLiked.length ? 'Nöfn sem báðir aðilar völdu' : 'Því miður var ekkert nafn sem báðir aðilar völdu :('}
          >
            {results.bothLiked.map((name) => (
              <div
                key={name}
                className='font-weight-bold'
              >
                {name}
              </div>
            ))}
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className='main-card'
            title='Nöfn sem fyrri aðili valdi'
          >
            {results.senderLiked.map((name) => (
              <div
                key={name}
                className={results.bothLiked.find((n) => name === n) ? 'font-weight-bold' : ''}
              >
                {name}
              </div>
            ))}
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className='main-card'
            title='Nöfn sem seinni aðili valdi'
          >
            {results.receiverLiked.map((name) => (
              <div
                key={name}
                className={results.bothLiked.find((n) => name === n) ? 'font-weight-bold' : ''}
              >
                {name}
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Results
