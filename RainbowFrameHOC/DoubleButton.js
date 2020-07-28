import React from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {
    static propTypes = {
        
      };
      pressed=(EO)=>{
        this.props.cbPressed(EO.target.id);  
      }
        
    render() {
        return(
        <div>
        <input type='button' value={this.props.caption1} id={1} onClick={this.pressed}/>
        {this.props.children}
        <input type='button' value={this.props.caption2} id={2} onClick={this.pressed}/>
        </div>
        );

    }}
    export default DoubleButton;