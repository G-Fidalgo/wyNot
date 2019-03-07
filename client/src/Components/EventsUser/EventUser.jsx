import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class EventUser extends Component {
  render() {
    return (
      <div>
        <Link to='/userevents'>Go to our Presential Events</Link>
        <Link to='/eventsonlineuser'>Go to our Online Events</Link>
      </div>
    )
  }
}
