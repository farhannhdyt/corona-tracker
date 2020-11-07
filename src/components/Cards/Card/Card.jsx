import React from 'react'
import { Grid, CardContent, Card, Typography } from '@material-ui/core'
import styles from './Card.module.css'
import CountUp from 'react-countup'
import cs from 'classnames'

const CardComponent = ({className, cardTitle, value, lastUpdate, cardSubTitle}) => {
  return (
    <Grid item component={Card} xs={12} md={3} className={cs(styles.card, className)}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>{cardTitle}</Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">{cardSubTitle}</Typography>
      </CardContent>
    </Grid>
  )
}

export default CardComponent