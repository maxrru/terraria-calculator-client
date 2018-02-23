import React from 'react'
import { Panel } from 'react-bootstrap'

export default () => (
  <Panel>
    <Panel.Heading>
      <Panel.Title componentClass='h2'>Stats</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      <ul>
        <li>Atk</li>
        <li>Def</li>
        <li>Mana</li>
        <li>Speed</li>
      </ul>
  </Panel.Body>
</Panel>
)
