import TableButton from '../components/TableButton.jsx';
import selectTable from '../actions/selectTable.js';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        selectedTable: state.selectedTable,
        tableStatusData: state.tableStatusData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelect: id => {
            dispatch(selectTable(id));
        }
    }
}

const TableButtonContainer = connect(mapStateToProps, mapDispatchToProps)(TableButton);

export default TableButtonContainer;