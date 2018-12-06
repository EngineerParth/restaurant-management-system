import OrderList from '../components/OrderList.jsx';
import deleteTableItem from '../actions/deleteTableItem.js';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        selectedTable: state.selectedTable,
        items: state.tableData[state.selectedTable]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (tableId, id) => {
            dispatch(deleteTableItem(tableId, id));
        }
    }
}

const OrderListContainer = connect(mapStateToProps, mapDispatchToProps)(OrderList);

export default OrderListContainer;