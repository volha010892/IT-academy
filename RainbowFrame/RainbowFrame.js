﻿import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {
    static propTypes = {
        colors: PropTypes.array.isRequired,
      };
        
    render() {

        /*var item=this.props.children
        this.props.colors.forEach(v=> {
            item=<div style={{border:"solid 5px "+v,padding:"10px"}}>{item}</div>
        })
        return ( 
        <div>{item} </div>   
        )
        ;*/

        var item=this.props.colors;
        if(item.length==0){
          return this.props.children;
        }
        else {     
            return(
        <div style={{border:"solid 5px "+item[0],padding:"10px"}}>
            <RainbowFrame colors={item.slice(1,item.length)}>
            {this.props.children}</RainbowFrame></div>)
        }
        
        }
}
    export default RainbowFrame;