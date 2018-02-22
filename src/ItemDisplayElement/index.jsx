import React from 'react'
import { Image } from 'react-bootstrap'

export default () => (
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <Image src='/src/images/100x100_template.png' rounded />
    <div>
      <ul>
        <li>Stat1</li>
        <li>Stat2</li>
        <li>Stat2</li>
      </ul>
    </div>
  </div>
)
