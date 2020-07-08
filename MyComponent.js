var MyComponent = React.createClass({

    displayName: 'MyComponent',

    getInitialState: function() {
        return { 
            item:this.props.items,
            proces:[],
            isChecked:false,
            text:'',
            filtered:false,
            sort:false
    }
        },

        checkboxChange: function(EO) {  
            this.setState({isChecked:EO.target.checked});
            this.setState({sort:EO.target.checked}, this.proces)
          },
        textChange: function(EO){
            this.setState({text:EO.target.value});
            this.setState({filtered:true}, this.proces)
          },
        discharge: function(){
            this.setState({item:this.props.items, isChecked:false, text:''})
          },

        proces: function(){
            let res=this.props.items.slice();
            if(this.state.filtered){
                res=res.filter(i=>((i.itemName.indexOf(this.state.text))!=-1));
            }
            if(this.state.sort){
                res=res.sort(function(a, b){
                    if(a.itemName<b.itemName){return -1;}
                    if(a.itemName>b.itemName){return 1;}
                    return 0;
                });
               
            }

            this.setState({item:res})
        },

        render: function() {
            var itemsCode=this.state.item.map( v =>
            React.createElement('li', {key:v.code, className:'li'}, v.itemName));
          return React.DOM.div( {className:'Mycomponent'},
            React.DOM.div(null,
                React.DOM.span(null,
              React.DOM.input({type:'checkbox', checked:this.state.isChecked, onClick:this.checkboxChange})),
              React.DOM.input({type:'text', value:this.state.text, onChange:this.textChange}),
              React.DOM.input( {type:'button',value:'Сброс', onClick:this.discharge})), 
          React.DOM.div({className:'masString'},
          React.createElement('ul', null, itemsCode)
          )
          );
        },
    })
    