import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import SearchBar from './SearchBar'
import Heading from './Heading'


export default class App extends Component {
  render () {
    return (
    <div>
      <Heading />
      <SearchBar />
    </div>
    )
  }
}
