import React from 'react'
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import { pluralize } from 'numeralize-ru'
import presentPoints from '../lib/presentPoints'
import PropTypes from 'prop-types'
import User from '../entities/User'

export default class UserBar extends React.Component {
  get user () {
    return this.props.user
  }

  get formattedUserScore () {
    return presentPoints(this.user.score)
  }

  get scoreWordPluralized () {
    return pluralize(this.user.score, 'балл', 'балла', 'баллов')
  }

  render () {
    return (
      <ImageBackground
        source={ require('../assets/userBarBackground.png') }
        style={{ height: 130, paddingTop: 46, paddingLeft: 32 }}
      >
        <View style={{ flexDirection: 'row', height: 24, marginBottom: 8 }}>
          <Image
            style={{ height: 24, width: 24, marginRight: 8 }}
            source={ this.user.avatar }
          />
          <Text style={[ styles.white, { height: 24, marginTop: 4 } ]}>{ this.user.name }</Text>
        </View>
        <Text style={[ styles.white, { fontSize: 24 } ]}>
          <Text style={{ fontWeight: 'bold' }}>{ this.formattedUserScore }</Text>
          {' '}
          { this.scoreWordPluralized }
        </Text>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  white: { color: 'white' }
})

UserBar.propTypes = {
  user: PropTypes.instanceOf(User)
}
