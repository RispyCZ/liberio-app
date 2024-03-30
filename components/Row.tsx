import { View, StyleSheet } from 'react-native'
import React, { FC } from 'react'

type RowProps = React.PropsWithChildren & {
  center?: boolean
}

const Row: FC<RowProps> = ({ center = false, children }) => {
  return (
    <View style={
      center ?
        StyleSheet.compose(styles.row, styles.center)
        :
        styles.row
    }>
      {children}
    </View>
  )
}

const styles = StyleSheet.create(({
  row: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    flex: 1,
    gap: 40,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default Row