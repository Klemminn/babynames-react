import React from 'react'

import { Button } from 'components'

import './Home.scss'

const Home = () => (
  <div className='home-page'>
    <h1>Halló hæ!</h1>
    <p>Hér getur þú fengið hugmyndir að nöfnum.</p>
    <p>Ferlið er einfalt:</p>
    <ol>
      <li>Þú færð nöfn og velur þau sem þú ert hrifin/n af.</li>
      <li>Þú velur að halda áfram og færðu hlekk til að senda á annan aðila.  Sá aðili fær öll nöfnin sem þú fórst í gegnum, en sér þó ekki hvaða nöfn þú valdir.</li>
      <li>Þegar hann hefur lokið sinni yfirferð, þá sjáið þið hvaða nöfn þið völduð.</li>
    </ol>

    <div className='gender-buttons'>
      <Button
        link='/names/1'
        className='boy'
      >
        Drengur
      </Button>
      <Button
        link='/names/0'
        className='girl'
      >
        Stúlka
      </Button>
    </div>
  </div>
)

export default Home
