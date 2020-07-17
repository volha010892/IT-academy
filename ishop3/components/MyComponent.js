﻿import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';
import './MyComponent.css';

class MyComponent extends React.Component{

    colorChange=(EO)=> { 
        this.props.cbSelectedItemIdChanged(EO.target.id);
      }

    deleteItem=(EO)=> { 
        EO.preventDefault();
        this.props.cbItemDelete(EO.target.id);
      }

    editItem=(EO)=>{
        EO.preventDefault();
        this.props.cbItemEdit(EO.target.id);
      }

      render() {
        if(this.props.selectedItemId==this.props.code){
           return  <tr className='Item2'  defaultValue={this.props.selectedItemId}>
        <td className='ItemName' id={this.props.code} onClick={this.colorChange}>{this.props.name}</td> 
        <td className='Price' id={this.props.code} onClick={this.colorChange}>{this.props.price}</td>
        <td className='Pic' id={this.props.code} onClick={this.colorChange}>{this.props.url}</td> 
        <td className='Numbers' id={this.props.code} onClick={this.colorChange}>{this.props.numbers}</td> 
        <td id={this.props.code}>
        <input type='button' value='Edit' id={this.props.code} onClick={this.editItem} disabled={this.props.disable}/>
        <input type='button' value='Delete' id={this.props.code} onClick={this.deleteItem} disabled={this.props.disable}/>
        </td></tr>
        }
        else{
          return  <tr className='Item' defaultValue={this.props.selectedItemId}>
          <td className='ItemName' id={this.props.code} onClick={this.colorChange}>{this.props.name}</td>  
          <td className='Price' id={this.props.code} onClick={this.colorChange}>{this.props.price}</td>
          <td className='Pic' id={this.props.code} onClick={this.colorChange}>{this.props.url}</td> 
          <td className='Numbers' id={this.props.code} onClick={this.colorChange}>{this.props.numbers}</td> 
          <td id={this.props.code}>
          <input type='button' value='Edit' id={this.props.code} onClick={this.editItem} disabled={this.props.disable}/>
          <input type='button' value='Delete' id={this.props.code} onClick={this.deleteItem} disabled={this.props.disable}/>
          </td></tr> 
        }
    }
}
export default MyComponent;
