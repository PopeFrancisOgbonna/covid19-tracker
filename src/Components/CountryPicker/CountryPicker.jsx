import React, {useState, useEffect} from 'react'
import {FormControl, NativeSelect} from '@material-ui/core';
import {fetchCountriesData} from '../../Components/api';
import Styles from './CountryPicker.module.css'
import cx from 'classnames';


const CountryPicker = ({handleCountryChange, country}) =>{
    const [fetchCountries, setFetchCountries] = useState([]);

    useEffect(() =>{
        const getCountries = async () =>{
        setFetchCountries( await fetchCountriesData())
        
        }
        getCountries()
    }, [setFetchCountries]);

    return(
        <div className={cx(Styles.containers)}>
            <FormControl >
            {fetchCountries ? 
                <NativeSelect value={country} onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchCountries.map((countries, i) =>{
                   return <option key={i} value={countries}>{countries}</option>
                })}
            </NativeSelect>: null
            }
            </FormControl>
        </div>
    )
}
export default CountryPicker;