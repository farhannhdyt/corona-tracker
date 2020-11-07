import React, { Component } from 'react'
import './assets/css/global.css'

// Get all components
import {
  Cards,
  Chart,
  CountryPicker
} from './components'

import styles from './App.module.css'
import { fetchData } from './api'
import CovidIMG from './assets/Images/image.png'

class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({data: fetchedData, country: country})
  }

  render() {
    const { data, country } = this.state

    return (
      <div className={styles.container}>
        <img src={CovidIMG} alt="COVID-19" className={styles.image} />

        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App