import React, { useState, useEffect }  from "react";
import {fetchDailyData} from '../../Components/api';
import {Line, Bar} from 'react-chartjs-2';
import style from './Charts.module.css';
import cx from 'classnames'


const Charts = ({data:{confirmed, recovered, deaths}, country}) =>{
    const [dailyData, setDailyData] = useState([]);


    useEffect(()=>{
       try {
        const fetchApi = async () =>{
            setDailyData(await fetchDailyData())
           }
           fetchApi();
       } catch (error) {
           console.log(error)
       }
    }, []);

    const LineChart = (
        dailyData[0]  ?
        (
        <Line 
            data = {{
                labels: dailyData.map(({date}) => date),
                datasets:[{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#52b7f1',
                    fill: true
                },{
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: '#812825',
                    fill: true
                }]
            }}
        /> ) : null
    )

    const BarChart = (
        confirmed ? (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        labels: 'People',
                        backgroundColor:['blue','green','red'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend:{display: false},
                    title:{display: true, text: `Current State in ${country}`}
                }}
            />
        ): null
    )

    return(
        <div className={cx(style.container)}>{country ? BarChart : LineChart}</div>
    )
}
export default Charts;