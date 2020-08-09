import React from 'react';
import PropTypes from 'prop-types';
import './MobileClient.css';
import {voteEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number,
      fam: PropTypes.string,
      im: PropTypes.string,
      otch: PropTypes.string,
    balance: PropTypes.number,
  };

  state = {
    fam: this.props.client.fam,
    im: this.props.client.im,
    otch: this.props.client.otch,
    balance: this.props.client.balance,
  };
editItem=(EO)=>{
  voteEvents.emit('EditItemClicked', EO.target.id);
}
deleteItem=(EO)=>{
  voteEvents.emit('DeleteItemClicked', EO.target.id);
}
componentWillReceiveProps = (newProps) => {
    this.setState({fam:newProps.client.fam, balance:newProps.client.balance});
  };

  render() {
    console.log("MobileClient id="+this.props.client.id+" render");
    return (
        <tr>
        <td>{this.state.fam}</td>
        <td>{this.state.im}</td>
        <td>{this.state.otch}</td>
        <td>{this.state.balance}</td>
        {(this.state.balance>0)?<td className='Active'>active</td>:
        <td className='Blocked'>blocked</td>}
       
        <td> <input type="button" value="Редактировать" id={this.props.client.id} onClick={this.editItem}/></td>
        <td> <input type="button" value="Удалить" id={this.props.client.id} onClick={this.deleteItem}/></td>
        </tr>
    );

  }

}

export default MobileClient;
