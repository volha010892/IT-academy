var MyComponent = React.createClass({
    displayName: 'MyComponent',

    colorChange: function(EO) {  
        this.props.cbSelectedItemIdChanged(EO.target.id);
      },

    deleteItem: function(EO) { 
        EO.preventDefault();
        this.props.cbItemDelete(EO.target.id);
      },

      render: function() {
        if(this.props.selectedItemId==this.props.code){
           return  React.createElement('tr', {className:'Item2', defaultValue:this.props.selectedItemId, onClick:this.colorChange},
        React.createElement('td',{className:'ItemName', id:this.props.code}, this.props.name),
        React.createElement('td', {className:'Pic', id:this.props.code}, this.props.url),
        React.createElement('td',{className:'Price', id:this.props.code}, this.props.price),
        React.createElement('td',{className:'Numbers', id:this.props.code}, this.props.numbers),
        React.createElement('td', {id:this.props.code},
        React.DOM.input( {type:'button',value:'Delete', id:this.props.code, onClick:this.deleteItem})));
        }
        else{
            return  React.createElement('tr', {className:'Item', defaultValue:this.props.selectedItemId, onClick:this.colorChange},
            React.createElement('td',{className:'ItemName', id:this.props.code}, this.props.name),
            React.createElement('td', {className:'Pic', id:this.props.code}, this.props.url),
            React.createElement('td',{className:'Price', id:this.props.code}, this.props.price),
            React.createElement('td',{className:'Numbers', id:this.props.code}, this.props.numbers),
            React.createElement('td', {id:this.props.code},
            React.DOM.input( {type:'button',value:'Delete', id:this.props.code, onClick:this.deleteItem})));
              
        }
    },
})