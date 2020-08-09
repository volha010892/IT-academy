import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';
import './MyForm.css';
class MyForm extends React.Component{
    static propTypes = {}

    render(){
        if(this.props.mode==2){
            return <div>
                <h1>Редактировать</h1>
                <p>Фамилия: <input type='text' name='Name' className='FreeAnswer'
                value={this.props.cbName} onChange={this.textChanged} />
                {(this.props.nameError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
                <p>Имя: <input type='text' name='Name' className='FreeAnswer'
                value={this.props.cbName} onChange={this.textChanged} />
                {(this.props.nameError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
                <p>Отчество: <input type='text' name='Name' className='FreeAnswer'
                value={this.props.cbName} onChange={this.textChanged} />
                {(this.props.nameError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
               <p>Баланс: <input type='text' name='Price' className='FreeAnswer'
                value={this.props.cbPrice} onChange={this.textChanged}/>
                {(this.props.priceError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
                <input type='button' value='Save' id={this.props.formId} onClick={this.save} 
                disabled={this.props.nameError||this.props.priceError||this.props.urlError||this.props.quantityError}/>
                <input type='button' value='Cancel' id={this.props.formId} onClick={this.cancel}/>
                </div>
        }
        if(this.props.mode==3){
            return <div>
                <h1>Добавить клиента</h1>
                <p>ID: {this.props.lastId}</p>
                <p>Фамилия: <input type='text' name='Name' className='FreeAnswer'
                 value={this.props.cbName} onChange={this.textChanged} />
                {(this.props.nameError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
                <p>Имя: <input type='text' name='Name' className='FreeAnswer'
                 value={this.props.cbName} onChange={this.textChanged} />
                {(this.props.nameError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
                <p>Отчество: <input type='text' name='Name' className='FreeAnswer'
                 value={this.props.cbName} onChange={this.textChanged} />
                {(this.props.nameError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
               <p>Баласн: <input type='text' name='Price' className='FreeAnswer'
                 value={this.props.cbPrice} onChange={this.textChanged}/>
                {(this.props.priceError)&&<span className='Error'>{this.props.textError}</span>}
                </p>
                <input type='button' value='Add' id={this.props.lastId} onClick={this.add} 
                disabled={this.props.nameError||this.props.priceError||this.props.urlError||this.props.quantityError}/>
                <input type='button' value='Cancel' id={this.props.lastId} onClick={this.cancel}/>
                
            </div>
        }
    }
}
export default MyForm;