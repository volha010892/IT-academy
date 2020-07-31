import React from 'react';
function withRainbowFrame(colors) { 
    return function(Component) {
      return props => {
          var item=<Component {...props} />
        colors.forEach(v=> {
            item=<div style={{border:"solid 5px "+v,padding:"10px"}}>{item}</div>
        })
        return <div>{item}</div>          
      }}}
export { withRainbowFrame };