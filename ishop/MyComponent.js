
var MyComponent = React.createClass({
    displayName: 'MyComponent',
    render: function(){
        var itemsCode=[];
        this.props.items.forEach((a)=>{
            var item=a;
            var itemCode=
            React.createElement('tr', {key:item.code, className:'Item'},
            React.createElement('td',{className:'ItemName'}, item.itemName),
            React.createElement('td', null,
            React.DOM.img({className:'Pic', src:item.itemURL}, item.pic)),
            React.createElement('td',{className:'Price'}, item.itemPrice),
            React.createElement('td',{className:'Numbers'}, item.itemNumbers),
            );
            itemsCode.push(itemCode);
        })
    
        return React.DOM.div( {className:'Mycomponent'}, 
        React.DOM.div({className: 'ShopName'},  this.props.shop),
        React.createElement("table",{
            "className" : "table"
        },
        React.createElement('tbody', {className: 'Items'}, itemsCode),
        ))
    },
})
