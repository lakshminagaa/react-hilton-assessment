import React, {Component} from 'react';
const count = [0,1,2];

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.startCount
    }
  }
  selectChange(event) {
    this.setState({
      value: event.target.value
    })
    this.props.valueChange(event.target.value);
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.disabled !== nextProps.disabled) {
      this.setState({
        value: this.props.startCount
      })
    }
  }
  render() {
    return (
      <select disabled={this.props.disabled} value={this.state.value} onChange={this.selectChange.bind(this)}>
        {
          count.map((item, index)=>{
            return <option key={index}>{item + this.props.startCount}</option>
          })
        }
      </select>
    )
  }
}

Select.defaultProps = {
  startCount: 0,
  disabled: true
}