import axios from 'axios';

const url ='https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{
    let changableUrl = url;

    if(country){
        changableUrl =`${url}/countries/${country}`;
        console.log(country)
    }
    try {
        const {data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(changableUrl)
        // console.log(data)
        return {confirmed, recovered, deaths, lastUpdate}
    } catch (error) {
        return {error}
    }

}
export const fetchDailyData = async () =>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        // console.log(data);
        const modifiedData = data.map((dailyData) =>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchCountriesData = async () =>{
    try {
        const {data:{countries}} = await axios.get('https://covid19.mathdro.id/api/countries');
        const modifiedCountries = countries.map((country) =>country.name);
        console.log(modifiedCountries)
        return modifiedCountries;
    } catch (error) {
        
    }
}