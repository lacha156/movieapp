import React, { PureComponent } from 'react';


export default class ReviewForm extends React.ComponentComponent {
  constructor(props) {
    super(props);

    this.state ={
      reviews: []
    };
    this.addItem = this.addItem.bind(this);
    
  }

  addReview(e) {
    if (this._inputElement.value !== "") {
      var newReview = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          reviews: prevState.reviews.concat(newReview) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.reviews);
       
    e.preventDefault();
  }

  

  render() {
    return (
      <div className="reviewform">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElemnt = a} placeholder="enter review">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <Review entries={this.state.reviews}/>
      </div>
    );
  }
}