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
    <div className='bg-light-gray br3 pa3 ma2 grow bw2 shadow-5 tc'>
        <p>{dailyFact}</p>
    </div>
    );
  }
}

export default Fact;
