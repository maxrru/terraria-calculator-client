import React from 'react'
import { Panel } from 'react-bootstrap'
import ItemDisplayElement from '../ItemDisplayElement'

export default () => (
  <Panel>
    <Panel.Heading>
      <Panel.Title componentClass='h2'>Accessories</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      <ItemDisplayElement />
      <ItemDisplayElement />
      <ItemDisplayElement />
      <ItemDisplayElement />
      <ItemDisplayElement />
    </Panel.Body>
  </Panel>
)

