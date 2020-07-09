import React from 'react';

class Clock extends React.Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.sec(),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  sec() {
    this.setState({date: new Date()});
    }

    render() {
    let hours = this.state.date.getHours().toString().padStart(2, '0');
    let minutes = this.state.date.getMinutes().toString().padStart(2, '0');

    return(
      <h2 className='tc f1-ns f2 pa0 pa5-ns'>{hours}:{minutes}</h2>
    );
  }
}

export default Clock;
