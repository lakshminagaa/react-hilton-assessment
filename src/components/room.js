import React, { Component } from 'react';
import Select from './selectoption';
import './common-styles.css';

export default class Rooms extends Component {
  selectedRoom(event) {
    this.props.selectedRoom(this.props.roomNum, event.target.checked);
  }
  selectedRoomData(type, value) {
    this.props.selectedRoomData({
      roomNum: this.props.roomNum,
      type,
      value
    })
  }
  render() {
    return (
      <div className="room-container">
        <div className="room-header">
          {this.props.roomNum !== 1 && (
            <input
              id={this.props.roomNum}
              type="checkbox"
              onChange={this.selectedRoom.bind(this)}
              checked={!this.props.disabled}
            />
          )}
          &nbsp; <label htmlFor={this.props.roomNum}>Room {this.props.roomNum}</label>
        </div>
        <div
          className={
            this.props.disabled ? 'room-table room-disabled' : 'room-table'
          }>
          <table>
            <tbody>
              <tr>
                <td>Adults</td>
                <td>Children</td>
              </tr>
              <tr>
                <td>(18+)</td>
                <td>(0-17)</td>
              </tr>
              <tr>
                <td>
                  <Select startCount={this.props.roomData['adult']} disabled={this.props.disabled} valueChange={this.selectedRoomData.bind(this, 'adult')} />
                </td>
                <td>
                  <Select startCount={this.props.roomData['child']} disabled={this.props.disabled} valueChange={this.selectedRoomData.bind(this, 'child')} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Rooms.defaultProps = {
  roomNum: 1,
  disabled: true,
  selectedRoom: (roomNum, value) => { }
};
