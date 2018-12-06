import {connect} from 'react-redux';
import Details from '../components/Details.jsx';

const mapStateToProps = state => {
    return {
        selectedTable:state.selectedTable,
        items: state.tableData[state.selectedTable]
    }
}

var DetailsContainer = connect(mapStateToProps)(Details);

export default DetailsContainer;