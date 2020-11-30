import React from 'react';
import styles from './Cards.module.css'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames'


const Cards = (props) => {
    const {confirmed, recovered, deaths, lastUpdate} = props.data
    return(
        <div >
            {confirmed === undefined ? <p>Loading </p>:
            <div className={cx(styles.wrap)}>
                <div  className={cx(styles.cards, styles.confirmed)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={3.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of Currently Infected Persons</Typography>
                    </CardContent>
                </div>

                <div  className={cx(styles.cards, styles.recovered)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={3.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of Recovery Cases Currently</Typography>
                    </CardContent>
                </div>

                <div  className={cx(styles.cards, styles.deaths)}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={3.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of Deaths Caused by Covid-19</Typography>
                    </CardContent>
                </div> 
            </div>
            } 
        </div>
    )
}
export default Cards;