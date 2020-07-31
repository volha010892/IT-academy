import React from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {
    static propTypes = {
            cbPressed: PropTypes.func.isRequired,
            
      };
      pressed=(EO)=>{
        this.props.cbPressed(EO.target.name);  
      }
        
    render() {
        return(
        <div>
        <input type='button' value={this.props.caption1} name={1} onClick={this.pressed}/>
        {this.props.children}
        <input type='button' value={this.props.caption2} name={2} onClick={this.pressed}/>
        </div>
        );

    }}
    export default DoubleButton;