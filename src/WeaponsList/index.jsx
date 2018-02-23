import React from 'react'
import { Panel } from 'react-bootstrap'
import ItemDisplayElement from '../ItemDisplayElement'

export default () => (
  <Panel>
    <Panel.Heading>
      <Panel.Title componentClass='h2'>Weapon</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      <ItemDisplayElement />
    </Panel.Body>
  </Panel>
)

