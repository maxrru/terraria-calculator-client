import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

import Heading from './Heading'
import AccessoryList from './AccessoryList'
import SearchBar from './SearchBar'
import StatsBox from './StatsBox'

export default class App extends Component {
  render () {
    return (
    <div>
      <Heading />
      <SearchBar />
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <AccessoryList />
        <StatsBox />
      </div>
    </div>
    )
  }
}
