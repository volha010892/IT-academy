import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';
import './MyForm.css';
class MyForm extends React.Component{
    static propTypes = {
        cbTextChanged:PropTypes.func.isRequired,
        cbSave:PropTypes.func.isRequired,
        cbCancel:PropTypes.func.isRequired,
        cbAdd:PropTypes.func.isRequired,
        formId:PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
          ]),
        cbName:PropTypes.string.isRequired,
        cbPrice:PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
          ]),
        cbUrl:PropTypes.string.isRequired,
        cbQuantity:PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
          ]),
        
      }
    textChanged = (EO) => {  
        this.props.cbTextChanged(EO.target.value, EO.target.name);
      }
    save=(EO)=>{
        this.props.cbSave(EO.target.id);
    }
    cancel=(EO)=>{
        this.props.cbCancel(EO.target.id);
    }
    add=(EO)=>{
        this.props.cbAdd(EO.target.id, EO.target.name, EO.target.value);
    }
    render(){
        if(this.props.mode==1){
        return <div>
        <h1>Карточка товара</h1>
       <p>ID: {this.props.formId}</p>
       <p>Имя: {this.props.cbName}</p>
       <p>Цена: {this.props.cbPrice}</p>
       <p>URL: {this.props.cbUrl}</p>
       <p>Количество: {this.props.cbQuantity}</p>
    </div>
    }
        if(this.props.mode==2){
            return <div>
                <h1>Изменить товар</h1>
                <p>ID: {this.props.formId}</p>
                <p>Name: <input type='text' name='Name' className='FreeAnswer'
                value={this.props.cbName} onChange={this.textChanged} />
                {(this.props.nameError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
               <p>Price: <input type='text' name='Price' className='FreeAnswer'
                value={this.props.cbPrice} onChange={this.textChanged}/>
                {(this.props.priceError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
                <p>URL: <input type='text' name='URL' className='FreeAnswer'
                value={this.props.cbUrl} onChange={this.textChanged}/>
                {(this.props.urlError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
                <p>Quantity: <input type='text' name='Quantity' className='FreeAnswer'
                value={this.props.cbQuantity} onChange={this.textChanged}/>
                {(this.props.quantityError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
                <input type='button' value='Save' id={this.props.formId} onClick={this.save} 
                disabled={this.props.nameError||this.props.priceError||this.props.urlError||this.props.quantityError}/>
                <input type='button' value='Cancel' id={this.props.formId} onClick={this.cancel}/>
                </div>
        }
        if(this.props.mode==3){
            return <div>
                <h1>Добавить товар</h1>
                <p>ID: {this.props.lastId}</p>
                <p>Name: <input type='text' name='Name' className='FreeAnswer'
                 value={this.props.cbName} onChange={this.textChanged} />
                {(this.props.nameError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
               <p>Price: <input type='text' name='Price' className='FreeAnswer'
                 value={this.props.cbPrice} onChange={this.textChanged}/>
                {(this.props.priceError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
                <p>URL: <input type='text' name='URL' className='FreeAnswer'
                 value={this.props.cbUrl} onChange={this.textChanged}/>
                {(this.props.urlError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
                <p>Quantity: <input type='text' name='Quantity' className='FreeAnswer'
                value={this.props.cbQuantity} onChange={this.textChanged}/>
                {(this.props.quantityError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
                <input type='button' value='Add' id={this.props.lastId} onClick={this.add} 
                disabled={this.props.nameError||this.props.priceError||this.props.urlError||this.props.quantityError}/>
                <input type='button' value='Cancel' id={this.props.lastId} onClick={this.cancel}/>
                
            </div>
        }
    }
}
export default MyForm;
