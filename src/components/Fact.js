import React from 'react';

function dateIndicator(date) {
  switch(date) {
    case 1:
    case 21:
    case 31:
      return 'st';
      break;
    case 2:
    case 22:
      return 'nd';
      break;
    case 3:
    case 23:
      return 'rd';
      break;
    default:
      return 'th';
  }
}

function monthName(month) {
  switch(month) {
    case 1:
      return 'January';
      break;
    case 2:
        return 'February';
        break;
    case 3:
      return 'March';
      break;
    case 4:
      return 'April';
      break;
    case 5:
      return 'May';
      break;
    case 6:
      return 'June';
      break;
    case 7:
      return 'July';
      break;
    case 8:
      return 'August';
      break;
    case 9:
      return 'September';
      break;
    case 10:
      return 'October';
      break;
    case 11:
      return 'November';
      break;
    case 12:
      return 'December';
      break;
  }
}

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
    let year = this.state.fact.year;
    let dailyFact = this.state.fact.text;

    return(
    <div className='pa3 br3 f3-ns f4 tr w-50-ns' >
        <p className='o-100'>On {date}{dateIndicator(date)} of {monthName(month)} in {year}: {dailyFact}</p>
    </div>
    );
  }
}

export default Fact;
