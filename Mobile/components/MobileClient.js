import React from 'react';
import PropTypes from 'prop-types';
import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  };

  state = {
    fam: this.props.client.fam,
    im: this.props.client.im,
    otch: this.props.client.otch,
    balance: this.props.client.balance,
  };

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
       
        <td> <input type="button" value="Редактировать" onClick={this.setBalance1} /></td>
        <td> <input type="button" value="Удалить" onClick={this.setBalance1} /></td>
        </tr>
    );

  }

}

export default MobileClient;
