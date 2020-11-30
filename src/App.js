import React from 'react'
import style from'./App.module.css';
import cx from 'classnames';
import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import {fetchData} from './Components/api';
import corona from './Components/Images/corona.png';

class  App extends React.Component {
  state = {
    covidData: {
    },
    error: '',
    country:''
    
  }

  handleCountryChange = async (country) =>{
    const data = await fetchData(country)
    console.log(data);
    this.setState({covidData:data, country});

    console.log(this.state.covidData, this.state.country)
  }
  
  async componentDidMount(){
    try {
      const data = await fetchData();
      this.setState({covidData:data},() =>{
      })
    } catch (error) {
      const errors =  error
      this.setState({error:errors}, () =>{
      })
    }
  }
  
  render(){
    return (
      <div className={cx(style.constainer)}>
        <div className={cx(style.center)}>
        <h1 className={cx(style.h1)}>
          Corona Virus Tracker
        </h1>
        <img className={cx(style.img)} src={corona} alt="corona virus" />
        </div>

        { !this.state.covidData.confirmed && !this.state.covidData.error ? <p className={style.center}>Loading...</p>: this.state.covidData.error ? <p className={style.center}>Network Error! Please check your network and try again.</p>:<div>
          <Cards data={this.state.covidData}/>
          <CountryPicker 
            country={this.state.country}
            handleCountryChange={this.handleCountryChange}
          />
          <Charts 
            data={this.state.covidData}
            country ={this.state.country}
          />
        </div>}
        
        
      </div>
    );
  }
}

export default App;
