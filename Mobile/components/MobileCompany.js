﻿import React from 'react';
import PropTypes from 'prop-types';
import {voteEvents} from './events';
import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    selectedItemId:0,
    selectedItemFam:'Name',
    selectedIteBalance:100,
    name: this.props.name,
    clients: this.props.clients,
    workMode:this.props.startWorkMode,
    addClient:false,
    itemEdit:false,
  };

  componentDidMount = () => {
    voteEvents.addListener('EditItemClicked',this.itemEdit);
    voteEvents.addListener('DeleteItemClicked',this.itemDelete);
  };

  componentWillUnmount = () => {
    voteEvents.removeListener('EditItemClicked',this.itemEdit);
    voteEvents.removeListener('DeleteItemClicked',this.itemDelete);
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };

  sortAll=()=>{
    let changed=false;
    let newClients=[...this.props.clients];
    if(this.state.clients.length!==newClients.length)
    changed=true;
    if ( changed )
      this.setState({clients:newClients});
  }

  sortActive=()=>{
    let changed=false;
    let newClients=[...this.props.clients];
    let filterItems=newClients.filter(i=>(i.balance>=0));
    if(filterItems.length!==newClients.length)
    changed=true;
    if ( changed )
      this.setState({clients:filterItems});
  }

  sortBlock=()=>{
    let changed=false;
    let newClients=[...this.props.clients];
    let filterItems=newClients.filter(i=>(i.balance<0));
    if(filterItems.length!==this.state.clients.length)
    changed=true;
    if ( changed )
      this.setState({clients:filterItems});
  }

  addClient=()=>{
    this.setState({workMode:2});
    let lastIdAdd=parseInt(this.state.clients[this.state.clients.length-1].id)+1;
    this.setState({selectedItemId:lastIdAdd});
    this.setState({addClient:true});
  }
  itemDelete=(id)=>{
    this.setState({selectedItemId:id});
    let filterItems=this.state.clients.filter(i=>(i.id!=parseInt(id)));
    this.setState({clients:filterItems});
    this.setState({workMode:1});
  }
  itemEdit=(id)=>{
    this.setState({itemEdit:true});
    this.setState({selectedItemId:id});
    this.setState({workMode:3});
    let res=this.state.clients.filter(i=>(i.id==parseInt(id)));
    this.setState({selectedItemFam:res[0].fam});
    this.setState({selectedItemBalance:res[0].balance});
    }

  save=()=>{
    let changed=false;
    let newClients=[...this.state.clients];
    if(this.state.addClient){
      let newClient={id:this.state.selectedItemId, balance:this.state.selectedItemBalance, fam:this.state.selectedItemFam};
      newClients[this.state.clients.length]=newClient;
      changed=true;
    }
    if(this.state.itemEdit){
    newClients.forEach( (c,i) => {
      if ( c.id==this.state.selectedItemId && (c.balance!=this.state.selectedItemBalance || c.fam!=this.state.selectedItemFam) ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=this.state.selectedItemBalance;
        newClient.fam=this.state.selectedItemFam;
        newClients[i]=newClient;
        changed=true;
      }
    } );
  }
    if ( changed )
      this.setState({clients:newClients});
      this.setState({workMode:1});
    }

    cancel=()=>{
      this.setState({workMode:1});
    }
     newTextBalance = null;
     newTextFam = null;

    setNewTextFam = (ref) => {
      this.newTextFam=ref;
      }
    setNewTextBalance = (ref) => {
      this.newTextBalance=ref;
    };
    
    setNewText = () => {
      if ( this.newTextFam ){ 
        let newFam=this.newTextFam.value;
        this.setState({selectedItemFam:newFam}, this.save);
      }
      if ( this.newTextBalance ) {
        let newBalance=parseInt(this.newTextBalance.value);
        this.setState({selectedItemBalance:newBalance}, this.save); 
      }}

  render() {

    console.log("MobileCompany render");
    var titl=this.props.titles.map( v =>
        <th key={v.code}>{v.titleName}</th>
      );  
    var clientsCode=this.state.clients.map( client => {
        return <MobileClient client={client} key={client.id}/>;
      }
    );
    
    return (
      <div className='MobileCompany'>
        <input type="button" value="МТС" onClick={this.setName1} />
        <input type="button" value="Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div>
         <input type="button" value="Все" onClick={this.sortAll} />
         <input type="button" value="Активные" onClick={this.sortActive} />
         <input type="button" value="Заблокированные" onClick={this.sortBlock} />
         </div>
        <div className='MobileCompanyClients'>
        <table className='MobileClient'>
             <tbody className='Items'>
                  <tr className='Titles'>{titl}</tr>      
                       {clientsCode}     
             </tbody>
        </table>
        </div>
        <input type="button" value="Добавить клиента" onClick={this.addClient} />
      {(this.state.workMode==2)&&<div>
                <h1>Добавить клиента</h1>
                <p>ID: {this.state.selectedItemId}</p>
                <p>Фамилия: <input type='text' name='Fam' className='FreeAnswer'
                 value={this.props.clients.fam} ref={this.setNewTextFam} />
                </p>
                <p>Баланс: <input type='text' name='Balance' className='FreeAnswer'
                 value={this.props.clients.balance} ref={this.setNewTextBalance} />
                </p>
                <input type='button' value='Save' id={this.state.selectedItemId} onClick={this.setNewText} />
                <input type='button' value='Cancel' id={this.state.selectedItemId} onClick={this.cancel}/>
              </div>
                }
      
      {
        (this.state.workMode==3)&&
        <div>
              <h1>Редактировать</h1>
              <p>ID:  {this.state.selectedItemId}</p>
              <p>Фамилия: <input type='text' name='Fam' className='FreeAnswer'
              defaultValue={this.state.selectedItemFam} ref={this.setNewTextFam} />
              </p>
              <p>Баланс: <input type='text' name='Balance' className='FreeAnswer'
              defaultValue={this.state.selectedItemBalance} ref={this.setNewTextBalance} />
              </p>
              <input type='button' value='Save' id={this.state.selectedItemId} onClick={this.setNewText} />
              <input type='button' value='Cancel' id={this.state.selectedItemId} onClick={this.cancel}/>
                </div>
      }
      </div>
    )
    ;

  }
}
export default MobileCompany;