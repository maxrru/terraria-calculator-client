import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import SearchBar from './SearchBar'
import Heading from './Heading'
import StatsBox from './StatsBox'

export default class App extends Component {
  render () {
    return (
    <div>
      <Heading />
      <SearchBar />
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <div></div>
        <StatsBox />
      </div>
    </div>
    )
  }
}
