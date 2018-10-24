import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

class Check extends Component {
  constructor (props) {
    super(props)

    this.checkImage = require('../assets/check.png')
  }

  render () {
    return (
      <Image
        style={{ width: 26, height: 26, marginRight: 10 }}
        source={ this.checkImage }
      />
    )
  }
}

export default class PointChargeConditionList extends Component {
  renderItemList () {
    return this.props.pointChargeItems.map((item) => this.renderItem(item))
  }

  renderItem (item) {
    return (
      <View
        key={ item }
        style={{ flex: 1, flexDirection: 'row', marginBottom: 16, marginRight: 64 }}
      >
        <Check/>
        <Text>{ item }</Text>
      </View>
    )
  }

  render () {
    return (
      <View style={{ marginTop: 26, marginLeft: 16 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>
          Чтобы списать баллы, нужно:
        </Text>
        { this.renderItemList() }
      </View>
    )
  }
}

PointChargeConditionList.propTypes = {
  pointChargeItems: PropTypes.arrayOf(PropTypes.string)
}
