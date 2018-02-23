import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

import Heading from './Heading'
import AccessoryList from './AccessoryList'
import ArmorList from './ArmorList'
import SearchBar from './SearchBar'
import StatsBox from './StatsBox'
import WeaponsList from './WeaponsList'

export default class App extends Component {
  render () {
    return (
    <div>
      <Heading />
      <SearchBar />
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <div>
          <WeaponsList />
          <ArmorList />
        </div>
        <AccessoryList />
        <StatsBox />
      </div>
    </div>
    )
  }
}
