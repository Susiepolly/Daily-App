import React from 'react';

class Fact extends React.Component {
  constructor() {
    super()
    this.state = {
      fact: '',
    }
  }

  componentDidMount() {
    let now = new Date();
    let month = now.getMonth() + 1;
    let date = now.getDate();

    fetch(`http://numbersapi.com/${month}/${date}/date?json`)
    .then(resp => resp.json())
    .then(text => this.setState( {fact: text }));
  }

  render() {
    let dailyFact = this.state.fact.text;

    return(
    <div className='pa3 br3 f3-ns f4 tr w-50-ns' >
        <p className='o-100'>{dailyFact}</p>
    </div>
    );
  }
}

export default Fact;
