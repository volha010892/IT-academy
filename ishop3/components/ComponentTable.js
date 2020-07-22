import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';
import MyComponent from './MyComponent';
import MyShop from './MyShop';
import MyForm from './MyForm';

class ComponentTable extends React.Component{
  static propTypes = {
    workMode: PropTypes.number,
    selectedItemId: PropTypes.number,
    selectedItemPrice: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    selectedItemQuantity: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    selectedItemName:PropTypes.string,
    selectedItemUrl:PropTypes.string,
    textError:PropTypes.string.isRequired,
    nameError:PropTypes.bool,
    priceError:PropTypes.bool,
    urlError:PropTypes.bool,
    quantityError:PropTypes.bool,
    fieldDisable:PropTypes.bool,
    lastId: PropTypes.number,


  }
    state= {
        textError:this.props.textError,
        nameError:false,
        priceError:false,
        urlError:false,
        quantityError:false,
        fieldDisable:false,
        selectedItemId:0,
        selectedItemName:'Name',
        selectedItemPrice:100,
        selectedItemUrl:'URL',
        selectedItemQuantity:100,
        item: this.props.items,
        workMode:this.props.startWorkMode,
        lastId:this.props.items.length,
        
      }

      selectedItemIdChanged=(id)=>{
        if(!this.state.fieldDisable){
          this.setState({selectedItemId:id});
          this.setState({workMode:1});
          this.takeItems(id);
        }
      }

      itemDelete=(id)=>{
      this.setState({selectedItemId:id});
      var filterItems=this.state.item.filter(i=>(i.id!=parseInt(id)));
      this.setState({item:filterItems});
      this.setState({workMode:0});

      }
      textChanged=(value, value2)=>{
        this.setState({fieldDisable:true});
        if(value2=='Name'){
          if(value==''){
          this.setState({nameError:true});
          }
          else this.setState({nameError:false});
        this.setState({selectedItemName:value});
        }
        if(value2=='Price'){
          if(value==''||value==0){
          this.setState({priceError:true});
          }
          else this.setState({priceError:false});
        this.setState({selectedItemPrice:value});
        }
        if(value2=='URL'){
          if(value==''){
          this.setState({urlError:true});
          }
          else this.setState({urlError:false});
        this.setState({selectedItemUrl:value});
        }
        if(value2=='Quantity'){
          if(value==''){
          this.setState({quantityError:true});
          }
          else this.setState({quantityError:false});
        this.setState({selectedItemQuantity:value});
        }
      }
      takeItems=(id)=>{
        let res=this.state.item.filter(i=>(i.id==parseInt(id)));
        for(let key in res){
          this.setState({selectedItemName:res[key].itemName});
          this.setState({selectedItemPrice:res[key].itemPrice});
          this.setState({selectedItemUrl:res[key].itemURL});
          this.setState({selectedItemQuantity:res[key].itemNumbers});
      }
      }

      itemEdit=(id)=>{
        this.setState({selectedItemId:id});
        this.setState({workMode:2});
        this.takeItems(id);
        }

      addNewProduct=(EO)=>{
        this.setState({workMode:3});
        this.setState({fieldDisable:true});
        this.setState({selectedItemName:'Name'});
        this.setState({selectedItemPrice:100});
        this.setState({selectedItemUrl:'URL'});
        this.setState({selectedItemQuantity:100});
        let lastIdAdd=parseInt(this.state.item[this.state.item.length-1].id)+1;
        this.setState({lastId:lastIdAdd});
      }
      saveButton=(id)=>{
        let it=this.state.item.filter(i=>(i.id==parseInt(id)));
        for(let key in it){
          it[key].itemName=this.state.selectedItemName;
          it[key].itemPrice=this.state.selectedItemPrice;
          it[key].itemURL=this.state.selectedItemUrl;
          it[key].itemNumbers=this.state.selectedItemQuantity;
        }
        let itChanged=this.state.item.map(i=>{
          if(i.id==it.id)
            return it;
          return i;
        });
        this.setState({item:itChanged});
        this.setState({fieldDisable:false});
        this.setState({workMode:0});
      }
      cancelButton=(id)=>{
        this.setState({workMode:0}),
        this.setState({fieldDisable:false}),
        this.setState({nameError:false}),
        this.setState({priceError:false}),
        this.setState({urlError:false}),
        this.setState({quantityError:false})
      }
      addButton=(id)=>{
        let newItem={itemName:this.state.selectedItemName, 
        id:id, code:id, itemPrice:this.state.selectedItemPrice,
        itemURL:this.state.selectedItemUrl, 
        itemNumbers:this.state.selectedItemQuantity}
        let oldItems=this.state.item;
        oldItems.push(newItem);
        this.setState({item:oldItems});
        this.setState({fieldDisable:false});
        this.setState({workMode:0});
      }
  
    render() {
      var itemsCode=this.state.item.map( v =>
          <MyComponent key={v.code}
            name={v.itemName} price={v.itemPrice} 
            url={v.itemURL} 
            numbers={v.itemNumbers} code={v.code}
            selectedItemId={this.state.selectedItemId}
            cbSelectedItemIdChanged={this.selectedItemIdChanged} 
            cbItemDelete={this.itemDelete} cbItemEdit={this.itemEdit} 
             disable={this.state.fieldDisable}
          />
        );

      return( 
        <div className='Mycomponent'>
          <table className='table'>
             <tbody className='Items'>
        <MyShop title={this.props.title}/> 
         {itemsCode}
              </tbody>
              </table>
        <div>
        <input type='button' value='New product' id={this.props.code} onClick={this.addNewProduct} disabled={this.state.fieldDisable}/>
        </div>
        {
        (this.state.workMode!==0)&&
        <div>
          <MyForm formId={this.state.selectedItemId} mode={this.state.workMode}
          cbName={this.state.selectedItemName}
          cbPrice={this.state.selectedItemPrice}
          cbUrl={this.state.selectedItemUrl}
          cbQuantity={this.state.selectedItemQuantity}
          cbTextChanged={this.textChanged}
          cbSave={this.saveButton}
          cbCancel={this.cancelButton}
          disable={this.state.fieldDisable}
          nameError={this.state.nameError}
          priceError={this.state.priceError}
          urlError={this.state.urlError}
          quantityError={this.state.quantityError}
          textError={this.props.textError}
          lastId={this.state.lastId}
          cbAdd={this.addButton}
          cbCancelAdd={this.cancelAddButton}
          />
        </div>
    }
              </div>
    
      );
  }
}

export default ComponentTable;
  

  
