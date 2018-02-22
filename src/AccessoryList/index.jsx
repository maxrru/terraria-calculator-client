import React from 'react'
import { Panel } from 'react-bootstrap'
import ItemDisplayElement from '../ItemDisplayElement'

export default () => (
  <Panel>
    <Panel.Body>
      <ItemDisplayElement />
      <ItemDisplayElement />
      <ItemDisplayElement />
      <ItemDisplayElement />
      <ItemDisplayElement />
    </Panel.Body>
  </Panel>
)

