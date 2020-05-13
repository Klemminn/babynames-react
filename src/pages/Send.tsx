import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { EmailInput, LinkReadOnlyInput } from 'components'
import { ErrorUtils } from 'utils'
import { NamesService, AnswerService } from 'services'

import './Send.scss'

interface Count {
  liked: number,
  disliked: number,
  hasEmail: boolean
}

const defaultCount: Count = {
  liked: 0,
  disliked: 0,
  hasEmail: false
}

const Send = () => {
  const { code }: { code: string} = useParams()
  const [count, setCount]: [Count, Function] = useState(defaultCount)
  const [loading, setLoading]: [boolean, Function] = useState(false)
  const [savingEmail, setSavingEmail]: [boolean, Function] = useState(false)

  useEffect(() => {
    getCount()
    // eslint-disable-next-line
  }, [])

  const getCount = async () => {
    setLoading(true)
    try {
      const data = await NamesService.getNameCount({ code, isSender: 1 })
      setCount(data)
    } catch (e) {
      ErrorUtils.displayError(e)
    } finally {
      setLoading(false)
    }
  }

  const registerEmail = async (email: string) => {
    setSavingEmail(true)
    try {
      await AnswerService.registerEmail({
        code,
        email
      })
      setCount({ ...count, hasEmail: true })
    } catch (e) {
      ErrorUtils.displayError(e.data)
    } finally {
      setSavingEmail(false)
    }
  }

  return loading ? null : (
    <div className='send-page'>
      <h1>Flott nöfn sem þú valdir!</h1>
      <p>Nú þarftu bara að senda link á þann sem þú vilt, svo hann geti farið í gegnum sömu nöfn og þú:</p>
      <LinkReadOnlyInput link={`/answer/${code}`} />
      <p>Þegar hann hefur lokið sér af, þá getið þið sé niðurstöðurnar á þessum link:</p>
      <LinkReadOnlyInput link={`/results/${code}`} />
      <p>Ef þú vilt, þá geturðu einnig fengið e-mail sent þegar mótaðili hefur svarað :)</p>
      <EmailInput
        onSubmit={(value: string) => registerEmail(value)}
        saving={savingEmail}
        hasEmail={count.hasEmail}
      />
    </div>
  )
}

export default Send
