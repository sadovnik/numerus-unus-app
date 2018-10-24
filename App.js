import React, { Component } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'

import User from './entities/User'
import UserBar from './components/UserBar'
import PointChargeConditionList from './components/PointChargeConditionList'
import fetchPointChargeItems from './lib/fetchPointChargeItems'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: new User('Кирилл', 'Садовник', 7851),
      isLoading: true,
      pointChargeItems: null
    }
  }

  componentDidMount () {
    return fetchPointChargeItems().then((items) => {
      this.setState({ ...this.state, pointChargeItems: items, isLoading: false })
    })
  }

  render () {
    return (
      <ScrollView>
        <UserBar user={ this.state.user }/>
        { this.maybeRenderList() }
      </ScrollView>
    )
  }

  maybeRenderList () {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator/>
      )
    }

    return (
      <PointChargeConditionList pointChargeItems={ this.state.pointChargeItems } />
    )
  }
}
