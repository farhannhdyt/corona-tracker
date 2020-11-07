import React from 'react'
import styles from './Cards.module.css'
import CardComponent from './Card/Card'
import { Grid } from '@material-ui/core'

const Cards = ({data: { confirmed, recovered, deaths, lastUpdate }}) => {
  if (!confirmed) {
    return 'Loading...'
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent 
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubTitle="Number of active cases from COVID-19"
        />
        
        <CardComponent 
          className={styles.recovered}
          cardTitle="Infected"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubTitle="Number of recoveries from COVID-19"
        />

        <CardComponent 
          className={styles.deaths}
          cardTitle="Infected"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubTitle="Number of deaths caused by COVID-19"
        />
      </Grid>
    </div>
  )
}

export default Cards
