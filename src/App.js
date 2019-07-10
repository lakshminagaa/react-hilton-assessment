import React, { Component } from 'react';
import './App.css';
import Rooms from './components/room';
const roomCount = [1, 2, 3, 4];

class App extends Component {
  state = {
    disable: [false, true, true, true],
    roomData: [
      { adult: 1, child: 0 },
      { adult: 1, child: 0 },
      { adult: 1, child: 0 },
      { adult: 1, child: 0 },
    ]
  };
  componentDidMount() {
    const data = sessionStorage.getItem('roomData');
    if (data) {
      const dataParsed = JSON.parse(data);
      this.setState({
        ...dataParsed
      })
    }
  }
  selectedRoom(selectedRoom, val) {
    const index = roomCount.indexOf(selectedRoom);
    let stateDisable = this.state.disable;
    let { roomData } = this.state;

    if (val) {
      for (let x = 1; x < roomCount.length; x++) {
        stateDisable[x] = true;
      }
      for (let x = 1; x <= index; x++) {
        stateDisable[x] = !val;
      }
    } else {
      for (let x = 1; x < roomCount.length; x++) {
        stateDisable[x] = true;
      }
      for (let x = 1; x < index; x++) {
        stateDisable[x] = false;
      }
    }
    for (let x = 3; x > index; x--) {
      roomData[x - 1] = {
        adult: 1,
        child: 0
      }
    }
    this.setState({
      disable: stateDisable,
      roomData
    });
  }
  selectedRoomData(data) {
    // {roomNum: 3, type: "3", value: "adult"}
    const { roomNum, type, value } = data;
    let { roomData } = this.state;
    roomData[roomNum - 1] = {
      ...roomData[roomNum - 1],
      [type]: parseInt(value, 10)
    }
    this.setState({
      roomData
    })
  }
  submit() {
    sessionStorage.setItem('roomData', JSON.stringify(this.state));
  }
  render() {
    return (
      <div>
        {roomCount.map((item, index) => {
          return (
            <Rooms
              key={index}
              roomNum={item}
              disabled={this.state.disable[index]}
              selectedRoom={this.selectedRoom.bind(this)}
              roomData={this.state.roomData[index]}
              selectedRoomData={this.selectedRoomData.bind(this)}
            />
          );
        })}
        <div>
          <button className="submit_btn" onClick={this.submit.bind(this)}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
