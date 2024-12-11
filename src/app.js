import * as React from 'react'
import '../public/globals.css'
import { FlexCol } from './utils'
import { Group } from 'utopia-api'

export var App = () => {
  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        background: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          contain: 'layout',
          width: 'max-content',
          height: 'max-content',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <span>Title</span>
        <button
          style={{
            width: 130,
            height: 58,
            contain: 'layout',
            backgroundColor: 'rgb(255, 164, 164, 1)',
          }}
        />
        <button
          style={{
            width: 130,
            height: 58,
            contain: 'layout',
            backgroundColor: 'rgb(255, 164, 164, 1)',
          }}
        />
        <button
          style={{
            width: 130,
            height: 58,
            contain: 'layout',
          }}
        />
      </div>
    </FlexCol>
  )
}
