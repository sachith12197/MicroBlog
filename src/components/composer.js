import React from 'react';
//for styling import the button here..
import Button from './shared/Button';

class Composer extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      text : ""   //initial state
    }
  }

onKeyUp = (evt) =>{
  this.setState({
    text:evt.target.value
  })
}


render(){
  const { onSubmit } = this.props;
  const { text } = this.state;

  return (
    <div className="composer">
      <div>
        <textarea onKeyUp={this.onKeyUp}></textarea>
      </div>
        <button onClick={()=> onSubmit(text)}>Send</button>
    </div>
  );
}

}

export default Composer;
