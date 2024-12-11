import * as React from 'react'
import { View } from 'utopia-api'
import '../public/globals.css'
import { Group } from 'utopia-api'

export var Playground = ({ style }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        contain: 'layout',
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 159,
          top: 199,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          height: 'max-content',
          width: 'max-content',
        }}
      >
        <span
          style={{
            wordBreak: 'break-word',
            height: 19,
            contain: 'layout',
            width: 'max-content',
          }}
        >
          TItle of Test
        </span>
        <div
          style={{
            contain: 'layout',
            width: 'max-content',
            height: 'max-content',
            display: 'flex',
            flexDirection: 'row',
            gap: 14,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <img
            src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
            alt='Utopia logo'
            style={{ width: 118, height: 150 }}
          />
          <img
            src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
            alt='Utopia logo'
            style={{ width: 118, height: 150 }}
          />
          <img
            src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
            alt='Utopia logo'
            style={{ width: 118, height: 150 }}
          />
        </div>
      </div>
    </div>
  )
}
