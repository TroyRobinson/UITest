import * as React from 'react'
import { View } from 'utopia-api'
import '../public/globals.css'
import { Group } from 'utopia-api'
import { Box, Text, Image } from '@radix-ui/react'

export var Playground = ({ style }) => {
  return (
    <Box
      style={{
        height: '100%',
        width: '100%',
        contain: 'layout',
        ...style,
      }}
    >
      <Box
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
        <Text
          style={{
            wordBreak: 'break-word',
            height: 19,
            contain: 'layout',
            width: 'max-content',
          }}
        >
          TItle of Test
        </Text>
        <Box
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
          <Image
            src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
            alt='Utopia logo'
            style={{ width: 118, height: 150 }}
          />
          <Image
            src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
            alt='Utopia logo'
            style={{ width: 118, height: 150 }}
          />
          <Image
            src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
            alt='Utopia logo'
            style={{ width: 118, height: 150 }}
          />
        </Box>
      </Box>
    </Box>
  )
}
