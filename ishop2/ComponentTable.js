﻿var ComponentTable = React.createClass({

    displayName: 'ComponentTable',

    getInitialState: function() {
        return { selectedItemId:0,
        item: this.props.items};
      },

      selectedItemIdChanged: function(id){
          this.setState({selectedItemId:id});
      },

      itemDelete: function(id){
      filterItems=this.state.item.filter(i=>(i.id!=parseInt(id)))
      this.setState({item:filterItems});
      },
    
    render: function() {

        var itemsCode=this.state.item.map( v =>
          React.createElement(MyComponent, {key:v.code,
            name:v.itemName, url:v.itemURL, price:v.itemPrice, 
            numbers:v.itemNumbers, code:v.code, selectedItemId:this.state.selectedItemId,
            cbSelectedItemIdChanged:this.selectedItemIdChanged, 
            cbItemDelete:this.itemDelete, item:this.state.item
          })
        );

      return React.DOM.div( {className:'Mycomponent'}, 
        React.createElement("table",{ "className" : "table"},
        React.createElement('tbody', {className:'Items'},
        React.createElement(MyShop, {title:this.props.title}), 
         itemsCode ),
        ));
    },
})
  