var MyComponent = React.createClass({
    displayName: 'MyComponent',
    render: function(){
    var itemsCode=[];
    this.props.items.forEach((a)=>{
        var item=a;
        var itemCode=
            React.createElement('tr', {key:item.code, className:'Item'},
            React.createElement('td',{className:'ItemName'}, item.itemName),
            React.createElement('td', {className:'Pic'}, item.itemURL),
            React.createElement('td',{className:'Price'}, item.itemPrice),
            React.createElement('td',{className:'Numbers'}, item.itemNumbers),
            React.createElement('td', null,
            React.DOM.input( {type:'button',value:'Delete',onClick:this.deleteTd})));
            itemsCode.push(itemCode);
        })
    
        return React.DOM.div( {className:'Mycomponent'}, 
        React.createElement("table",{
            "className" : "table"
        },
        React.createElement('tbody',{className: 'Items'}, itemsCode), 
        ))
    },
})
