import {combineReducers} from 'redux';
import selectedTable from './selectedTable.js';
import tableData from './tableData.js';
import tableStatusData from './tableStatusData.js';
import moneyEarned from './moneyEarned.js';

const reducer = combineReducers({selectedTable, tableData, tableStatusData, moneyEarned});

export default reducer;