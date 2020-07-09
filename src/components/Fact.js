import React from 'react';


class Fact extends React.Component {
  constructor() {
    super()
    this.state = {
      fact: '',
    }
  }

  componentDidMount() {
    let now = new Date(this.props.time);
    let month = now.getMonth() + 1;
    let date = now.getDate();

    fetch(`https://numbersapi.p.rapidapi.com/${month}/${date}/date?fragment=true&json=true`, {
	      "method": "GET",
	       "headers": {
		     "x-rapidapi-host": "numbersapi.p.rapidapi.com",
		      "x-rapidapi-key": "3aa242d4b6msh83b08bf9bd26c51p1c4f07jsn4da817181b75"
	       }})
    .then(resp => resp.json())
    .then(text => this.setState( {fact: text }));
  }

  render() {
    let now = new Date(this.props.time);
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let dailyFact = this.state.fact.text;

    return(
    <div className='pa3 br3 f3-ns f4 tr w-50-ns' >
        <p className='o-100'>{dailyFact}</p>
    </div>
    );
  }
}

export default Fact;
