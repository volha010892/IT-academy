﻿import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';
import ColorFrame from './ColorFrame.js';

class RainbowFrame extends React.Component {
    static propTypes = {
        colors: PropTypes.array.isRequired,
      };
    render() {
        var itemsCode=this.props.colors;
        var items=[];
        for(var i=0; i<itemsCode.length; i++){ 
        items=(
        <ColorFrame color={itemsCode[i-7]} key={i}>{
        <ColorFrame color={itemsCode[i-6]} key={i}>{
        <ColorFrame color={itemsCode[i-5]} key={i}>{
        <ColorFrame color={itemsCode[i-4]} key={i}>{
        <ColorFrame color={itemsCode[i-3]} key={i}>{
        <ColorFrame color={itemsCode[i-2]} key={i}>{
        <ColorFrame color={itemsCode[i-1]} key={i}>{
        <ColorFrame color={itemsCode[i]} key={i}>{
            this.props.children}
            </ColorFrame>}
            </ColorFrame>}
            </ColorFrame>}
            </ColorFrame>}
            </ColorFrame>}
            </ColorFrame>}
            </ColorFrame>}
            </ColorFrame>)
        }
        return ( 
        <div>{items}</div>    
        )
        ;
        }
}
    export default RainbowFrame;