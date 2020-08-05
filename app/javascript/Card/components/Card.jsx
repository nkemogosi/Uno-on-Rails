import React, {Component} from 'react'
import PropTypes from 'prop-types';
{/*Functioning for difining value display*/}
function CardValue(props){
  return(
    <div className={'card-value-container'+' card-value-'+props.position} id = {props.id}>
      <span className="card-value-text">{props.value}</span>
    </div>
  )
}
{/*Class that dictates what the front of the card should look like*/}
class CardFront extends React.Component{
  test(){
    console.log(this.props);
  }
  setCardValue(position){
    return <CardValue position ={position} value = {this.props.value}/>;
  }
  render(){
    return(
      <div className = "uno_card-face" style={{backgroundColor: this.props.color}}>
      {this.setCardValue("left")}
      {/*{this.setCardValue("mid")}*/}
      <div className = "card-oval"></div>
      {this.setCardValue("right")}
      </div>
    )
  }
}
{/*Class dictating back of the card*/}
class CardBack extends React.Component{
  render(){
    return(
      <div className="uno_card-back">

      </div>
    )
  }
}

{/*Class dictating a single the card*/}
class Card extends React.Component{

  constructor(props){
    super(props);

  }
  renderCardFront(color,value){
  return <CardFront color={color} value={value}/>;
  }
  renderCardBack(){
  return <CardBack />;
  }
  render(){
    return(
      <div className = "uno_card hoverable">
        {this.renderCardFront('#ff0',2)}
      </div>

    )
  }
}
{/*Class dictating card states*/}
Card.propTypes = {
  cardState: PropTypes.oneOf(['Active', 'Inactive','BackOnly']).isRequired,
};
Card.defaultProps = {
  cardState: 'Inactive',
};

export default Card
