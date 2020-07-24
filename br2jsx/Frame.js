import React from 'react';
import PropTypes from 'prop-types';

import './Frame.css';

class Frame extends React.Component {
      render() {
          var items=[];
          var item=[];
         items=this.props.text.split(/<\s*br\s*\/*>/);
          items.map((v, i)=>{
              item.push(v)
              item.push(<br key={i}></br>)
          }
         )
        return (
        <div className='br2jsx'>{item}</div>
        )
      }  
    }      
    export default Frame;