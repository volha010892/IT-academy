import React from 'react';
function withRainbowFrame(colors) { 
    return function(Component) {
      return props => {
        if(colors.length==0){
            return <Component {...props} />
          }
          else {  
          let Rec=withRainbowFrame(colors.slice(1,colors.length))(Component);   
            return(
        <div style={{border:"solid 5px "+colors[0],padding:"10px"}}>
           <Rec {...props}></Rec>
            </div>)
          }
    }
    };
};

export { withRainbowFrame };