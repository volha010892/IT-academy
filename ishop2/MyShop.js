var MyShop = React.createClass({
    displayName: 'MyShop',
    render: function(){
        var titl=this.props.title.map( v =>
            React.createElement('th',{key:v.code}, v.titleName),
          );  
          return React.createElement('tr', {className:'Titles'}, titl );
    },
});