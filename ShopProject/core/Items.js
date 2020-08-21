import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { countriesThunkAC } from "../redux/fetchThunk";

class Items extends React.PureComponent {

    static propTypes = {
        items: PropTypes.object.isRequired,
      };

    render() {
   const {items}=this.props.items;
      return (
     <div></div>
      );
  
    }
  
  }
  const mapStateToProps = function (state) {
    return {
      ...state
    };
  };
  export default connect(mapStateToProps)(Items);