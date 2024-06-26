import "./QuotationQuote.css";
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { Button, CircularProgress, Tab, Tabs, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { accountDetailPages, accountValidation, checkMonth } from "../../../../Utils/globalFunctions/GlobalFunction";
import moment from "moment";
import { CommonAPI } from "../../../../Utils/API/CommonAPI";
import { addYears, subYears } from 'date-fns';
import Swal from "sweetalert2";
import QuotationJob from "../quotationFilters/QuotationJob";
import Sales from "../../sales/Sales/Sales";
import SalesReport from "../../sales/salesReport/SalesReport";
import DesignWiseSalesReport from "../../sales/DesignWiseSalesReport/DesignWiseSalesReport";
import AccountLedger from "../accountLedger/AccountLedger";
import { FiArrowLeft } from "react-icons/fi";
import titleImg from "../../../assets/title/sonasons.png"
import { useNavigate } from "react-router-dom";

// import AlertPopup from '../../../../../../alertPopup/AlertPopup';
const createData = (SrNo, Date, SKUNo, TotalDesign, Amount) => {
    return {
        SrNo,
        Date,
        SKUNo,
        TotalDesign,
        Amount
    };
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    useEffect(() => {
        a11yProps(1)
    }, [])


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const descendingComparator = (a, b, orderBy) => {

    if (orderBy === 'Date' || orderBy === 'SKUNo' || orderBy === 'TotalDesign' || orderBy === 'Amount') {
        // Convert strings to lowercase for case-insensitive sorting
        const valueA = typeof a[orderBy] === 'string' ? a[orderBy].toLowerCase() : a[orderBy];
        const valueB = typeof b[orderBy] === 'string' ? b[orderBy].toLowerCase() : b[orderBy];
        if (valueB < valueA) {
            return -1;
        }
        if (valueB > valueA) {
            return 1;
        }
        return 0;
    } else if (orderBy === 'SrNo') {
        return a[orderBy] - b[orderBy];
    } else {
        return a[orderBy] - b[orderBy];
    }
}

const getComparator = (order, orderBy) => {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'SrNo',
        numeric: true,
        disablePadding: false,
        label: 'Sr#',
        align: "center"
    },
    {
        id: 'Date',
        numeric: false,
        disablePadding: false,
        label: 'Date',
        align: "center"
    },
    {
        id: 'SKUNo',
        numeric: false,
        disablePadding: false,
        label: 'SKU No',
        align: "center"
    },
    {
        id: 'TotalDesign',
        numeric: true,
        disablePadding: false,
        label: 'Total Design',
        align: "center"
    },
    {
        id: 'Amount',
        numeric: true,
        disablePadding: false,
        label: 'Total Amount',
        align: "right"
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    EnhancedTableHead.propTypes = {
        numSelected: PropTypes.number.isRequired,
        onRequestSort: PropTypes.func.isRequired,
        onSelectAllClick: PropTypes.func.isRequired,
        order: PropTypes.oneOf(['asc', 'desc']).isRequired,
        orderBy: PropTypes.string.isRequired,
        rowCount: PropTypes.number.isRequired,
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const tabIndicator = {
    '& .MuiTab-textColorPrimary.Mui-selected': {
        color: "#3b3c3d",
    },
    '& .MuiTabs-indicator': {
        backgroundColor: "#3b3c3d"
    }
}


const QuotationQuote = () => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [searchVal, setSearchVal] = useState("");
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState(3);
    const [value1, setValue1] = useState(3);
    const maxYear = addYears(new Date(), 1); // Set maximum year to the next year
    const minYear = subYears(new Date(), 1);
    const [accountInner, setAccountInner] = useState(accountDetailPages());
    const naviagation = useNavigate();
    const fromDateRef = useRef(null);
    const toDateRef = useRef(null);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };



    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filterData.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(filterData, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, filterData],
    );

    const resetAllFilters = () => {
        setSearchVal("");
        setFromDate(null);
        setToDate(null);
        setFilterData(data);
        setPage(0);
    }

    const reseltFil = () => {
        setSearchVal("");
        setFromDate(null);
        setToDate(null);
        setPage(0);
        // resetAllFilters(data);
        // setFilterData(data);
    }

    const handleSearch = (eve, searchValue, fromDatess, todatess) => {
        let fromdates = `${fromDatess?.["$y"]}-${checkMonth(fromDatess?.["$M"])}-${fromDatess?.["$D"]}`;
        let todates = `${todatess?.["$y"]}-${checkMonth(todatess?.["$M"])}-${todatess?.["$D"]}`;

        let filteredData = [];
        let count = 0;
        data?.forEach((e, i) => {
            let cutDate = "";
            cutDate = e?.["Date"]?.split("-");
            let compareDate = `${cutDate[0]}-${cutDate[1]}-${cutDate[2]}`
            cutDate = `${cutDate[2]}-${cutDate[1]}-${cutDate[0]}`;
            let flags = {
                dateFrom: false,
                dateTo: false,
                search: false,
            }
            if (searchValue !== "") {
                if (e?.["SrNo"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
                    e?.["SKUNo"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
                    e?.["Amount"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
                    e?.["TotalDesign"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
                    compareDate?.toString()?.toLowerCase()?.includes?.(searchValue?.trim()?.toLowerCase())
                ) {
                    flags.search = true;
                }
            } else {
                flags.search = true;
            }

            if (cutDate !== undefined) {
                // if(fromDatess && todatess && moment(fromdates).isSameOrBefore(moment(todates))){
                if (!fromdates?.includes(undefined) && !todates?.includes(undefined)) {
                    let fromdat = moment(fromdates);
                    let todat = moment(todates);
                    let cutDat = moment(cutDate);
                    if (moment(fromdates).isSameOrBefore(todates)) {
                        const isBetween = cutDat.isBetween(fromdat, todat, null, '[]');
                        if (isBetween || cutDat.isSame(fromdat) || cutDat.isSame(todat)) {
                            flags.dateTo = true;
                            flags.dateFrom = true;
                        }
                    }
                    else {
                        // count = count+1
                        // flags.dateFrom = true;
                        // flags.dateTo = true;
                        // Swal.fire({
                        //     title: "Error !",
                        //     text: "Enter Valid Dates",
                        //     icon: "error",
                        //     confirmButtonText: "ok"
                        // });
                        setTimeout(() => {
                            reseltFil();
                            setFilterData(data);
                        }, 0)
                    }
                } else if (fromdates?.includes(undefined) && !todates?.includes(undefined)) {
                    // let todat = new Date(todates);
                    // let cutDat = new Date(cutDate);
                    // if (cutDat <= todat) {
                    //     flags.dateTo = true;
                    //     flags.dateFrom = true;
                    // }
                    // flags.dateTo = true;
                    count = count + 1
                    flags.dateFrom = true;
                    Swal.fire({
                        title: "Error !",
                        text: "Enter Valid Date From",
                        icon: "error",
                        confirmButtonText: "ok"
                    });
                    reseltFil();
                } else if (!fromdates?.includes(undefined) && todates?.includes(undefined)) {
                    // let fromdat = new Date(fromdates);
                    // let cutDat = new Date(cutDate);
                    // if (cutDat >= fromdat) {
                    //     flags.dateTo = true;
                    //     flags.dateFrom = true;
                    // }
                    count = count + 1
                    flags.dateTo = true;
                    Swal.fire({
                        title: "Error !",
                        text: "Enter Valid Date To",
                        icon: "error",
                        confirmButtonText: "ok"
                    });
                    reseltFil();
                    // flags.dateFrom = true;

                } else if (fromdates?.includes(undefined) && todates?.includes(undefined)) {
                    flags.dateTo = true;
                    flags.dateFrom = true;
                }
                //   }
            }

            if (flags.dateFrom === true && flags.dateTo === true && flags.search === true) {
                filteredData.push(e);
            }

        });
        if (count === 0) {
            setFilterData(filteredData);
        }
        else {
            setFilterData(data);
        }
    }

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const storedData = localStorage.getItem('loginUserDetail');
            const data = JSON.parse(storedData);
            const customerid = data.id;
            // const customerEmail = data.email1;
            // setUserEmail(customerEmail);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;
            const combinedValue = JSON.stringify({
                CurrencyRate: "1", FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
            });
            // {"CurrencyRate":"1","FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": `{\"id\":\"Store\",\"mode\":\"getquote\",\"appuserid\":\"${data.email1}\"}`,
                "f": "zen (cartcount)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            if (response.Data?.rd) {
                let rows = [];
                response?.Data?.rd?.forEach((e, i) => {
                    let dataa = createData(i + 1, e?.Date, e?.SKUNo, e?.TotalDesign, e?.Amount);
                    rows?.push(dataa)
                });
                // console.log(rows);
                setData(rows);
                setFilterData(rows);
            } else {
                alert('nodata')
            }
        } catch (error) {
            console.log('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        let inputFrom = fromDateRef?.current?.querySelector(".MuiInputBase-root input");
        if (inputFrom) {
            inputFrom.placeholder = 'Date From';
        }
        let inputTo = toDateRef?.current?.querySelector(".MuiInputBase-root input");
        if (inputTo) {
            inputTo.placeholder = 'Date To';
        }
    }, []);

    const handleChangeSub = (event, newValue) => {
        setValue1(newValue);
    }

    return (
        <div>
           
            <Box className='smilingSavedAddressMain salesApiSection' sx={{ padding: "20px", }}>
                {/* {accountValidation() &&
                    <CustomTabPanel value={value} index={3} className="accountSalesPage" sx={{marginTop: '50px'}}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value1} className='accountTabSection' variant="scrollable" onChange={handleChangeSub} aria-label="basic tabs example" sx={{ background: "#7d7f8529", ...tabIndicator }} scrollButtons="auto">
                                {
                                    accountInner?.map((e, i) => {
                                        return <Tab label={e?.tabLabel} {...a11yProps(i)} sx={{ color: "#7d7f85" }} key={i} />
                                    })
                                }
                            </Tabs>
                        </Box>
                        {
                            accountInner?.map((e, i) => {
                                return <React.Fragment key={i}>
                                    {e?.id === 1163 && <CustomTabPanel value={value1} index={i} className="AcountSales">
                                        <QuotationQuote />
                                    </CustomTabPanel>}
                                    {e?.id === 1164 && <CustomTabPanel value={value1} index={i} className="quotationFilters">
                                        <QuotationJob />
                                    </CustomTabPanel>}
                                    {e?.id === 1157 && <CustomTabPanel value={value1} index={i} className="salesPage">
                                        <Sales />
                                    </CustomTabPanel>}
                                    {e?.id === 1314 && <CustomTabPanel value={value1} index={i} className="salesReport">
                                        <SalesReport />
                                    </CustomTabPanel>}
                                    {e?.id === 17020 && <CustomTabPanel value={value1} index={i} className="DesignWiseSalesReport">
                                        <DesignWiseSalesReport />
                                    </CustomTabPanel>}
                                    {e?.id === 1159 && <CustomTabPanel value={value1} index={i}>
                                        <AccountLedger />
                                    </CustomTabPanel>}
                                </React.Fragment>
                            })
                        }
                    </CustomTabPanel>
                } */}

                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <Box sx={{ paddingRight: "15px" }} className="AllQuoteBtn QuotePadSec">
                        <Button variant="contained" className="muiSmilingRocksBtn" sx={{ background: "#7d7f85", display: "flex", alignItems: "center", marginBottom: 0, padding: "6px 0", }} onClick={eve => resetAllFilters(eve)}>
                            All
                        </Button></Box>
                    <Box sx={{ display: "flex", alignItems: "center", position: "relative", padding: "0 15px 35px 0", maxWidth: "max-content" }} className="searchbox QuotePadSec">
                        <TextField id="standard-basic" label="Search" variant="outlined" value={searchVal} onChange={eve => {
                            setSearchVal(eve?.target?.value);
                            handleSearch(eve, eve?.target?.value, fromDate, toDate);
                        }} />
                        <Button sx={{ padding: 0, maxWidth: "max-content", minWidth: "max-content", position: "absolute", right: "8px", color: "#757575" }}
                            onClick={eve => handleSearch(eve, searchVal, fromDate, toDate)}><SearchIcon /></Button>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                        <Box sx={{ display: "flex", alignItems: "center", paddingRight: "15px", paddingBottom: "35px" }} className="QuotePadSec">
                            <p className='fs-6 mb-0' style={{ paddingRight: "8px" }}>Date: </p>
                            <Box>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Date From"
                                        value={fromDate}
                                        format="DD MMM YYYY"
                                        placeholder="DD MMM YYYY"
                                        onChange={(newValue) => {
                                            if (newValue === null) {
                                                setFromDate(null)
                                            } else {
                                                // if(newValue["$d"] == "Invalid Date"){
                                                //     Swal.fire({
                                                //         title: "Error !",
                                                //         text: "Enter Valid Date From",
                                                //         icon: "error",
                                                //         confirmButtonText: "ok"
                                                //       });
                                                //       resetAllFilters();
                                                // }else{

                                                if (((newValue["$y"] <= 2099 && newValue["$y"] >= 1900) || newValue["$y"] < 1000) || isNaN(newValue["$y"])) {
                                                    setFromDate(newValue)
                                                } else {

                                                    Swal.fire({
                                                        title: "Error !",
                                                        text: "Enter Valid Date From",
                                                        icon: "error",
                                                        confirmButtonText: "ok"
                                                    });
                                                    resetAllFilters();
                                                }
                                            }
                                            // }
                                        }}

                                        // placeholder={fromDate ? undefined : "DD MMM YYYY"}
                                        // placeholder="DD MMM YYYY"
                                        className='quotationFilterDates'
                                        ref={fromDateRef}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "35px", paddingRight: "15px" }} className="QuotePadSec">
                            <p className='fs-6 mb-0' style={{ paddingRight: "8px" }}>To: </p>
                            <Box>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Date To"
                                        value={toDate}
                                        // onChange={(newValue) => setToDate(newValue)}
                                        format="DD MMM YYYY"
                                        placeholder="DD MMM YYYY"
                                        // placeholder="Date To"
                                        className='quotationFilterDates'
                                        ref={toDateRef}
                                        inputProps={{ readOnly: true }}
                                        onChange={(newValue) => {
                                            if (newValue === null) {
                                                setToDate(null)
                                            } else {
                                                if (((newValue["$y"] <= 2099 && newValue["$y"] >= 1900) || newValue["$y"] < 1000) || isNaN(newValue["$y"])) {
                                                    setToDate(newValue)
                                                } else {
                                                    Swal.fire({
                                                        title: "Error !",
                                                        text: "Enter Valid Date To",
                                                        icon: "error",
                                                        confirmButtonText: "ok"
                                                    });
                                                    resetAllFilters();
                                                }
                                            }
                                        }}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ padding: "0 15px 35px 0", display: "flex", alignItems: "center", }} className="QuotePadSec">
                        <Button variant='contained' className="muiSmilingRocksBtn" sx={{ padding: "7px 10px", minWidth: "max-content", background: "#7d7f85" }} onClick={(eve) => handleSearch(eve, searchVal, fromDate, toDate)}><SearchIcon sx={{ color: "#fff !important" }} /></Button>
                    </Box>
                </Box>
                {isLoading ?
                    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}><CircularProgress className='loadingBarManage' /></Box> : <Paper sx={{ width: '100%', mb: 2 }} className="salesApiTable">
                        <TableContainer>
                            <Table
                                sx={{ minWidth: 750, border: "1px solid rgba(224, 224, 224, 1)", }}
                                aria-labelledby="tableTitle"
                                size={dense ? 'small' : 'medium'}
                            >
                                <EnhancedTableHead
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    // onSelectAllClick={handleSelectAllClick}
                                    onRequestSort={handleRequestSort}
                                    rowCount={filterData.length}
                                />
                                <TableBody>
                                    {visibleRows.map((row, index) => {
                                        // const isItemSelected = isSelected(row.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, index)}
                                                // role="checkbox"
                                                // aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={index}
                                                // selected={isItemSelected}
                                                sx={{ cursor: 'pointer' }}
                                            >

                                                <TableCell
                                                    component="td"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                    align="center"
                                                >
                                                    {row.SrNo}
                                                </TableCell>
                                                <TableCell align="center">{row.Date}</TableCell>
                                                <TableCell align="center">{row.SKUNo}</TableCell>
                                                <TableCell align="center">{row.TotalDesign}</TableCell>
                                                <TableCell align="right">{row.Amount}</TableCell>
                                                {/* <TableCell align="right">{row.protein}</TableCell> */}
                                            </TableRow>
                                        );
                                    })}
                                    {emptyRows > 0 && (
                                        <TableRow
                                            style={{
                                                height: (dense ? 33 : 53) * emptyRows,
                                            }}
                                        >
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={filterData.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>}

            </Box>
        </div>
    )
}

export default QuotationQuote

// import "./QuotationQuote.css";
// import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Paper from '@mui/material/Paper';
// import { visuallyHidden } from '@mui/utils';
// import { Button, CircularProgress, TextField } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { checkMonth } from "../../../../Utils/globalFunctions/GlobalFunction";
// import moment from "moment";
// import { CommonAPI } from "../../../../Utils/API/CommonAPI";
// const createData = (SrNo, Date, SKUNo, TotalDesign, Amount) => {
//     return {
//         SrNo,
//         Date,
//         SKUNo,
//         TotalDesign,
//         Amount
//     };
// }

// const descendingComparator = (a, b, orderBy) => {

//     if (orderBy === 'Date' || orderBy === 'SKUNo' || orderBy === 'TotalDesign' || orderBy === 'Amount') {
//         // Convert strings to lowercase for case-insensitive sorting
//         const valueA = typeof a[orderBy] === 'string' ? a[orderBy].toLowerCase() : a[orderBy];
//         const valueB = typeof b[orderBy] === 'string' ? b[orderBy].toLowerCase() : b[orderBy];
//         if (valueB < valueA) {
//             return -1;
//         }
//         if (valueB > valueA) {
//             return 1;
//         }
//         return 0;
//     } else if (orderBy === 'SrNo') {
//         return a[orderBy] - b[orderBy];
//     } else {
//         return a[orderBy] - b[orderBy];
//     }
// }

// const getComparator = (order, orderBy) => {
//     return order === 'desc'
//         ? (a, b) => descendingComparator(a, b, orderBy)
//         : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//         const order = comparator(a[0], b[0]);
//         if (order !== 0) {
//             return order;
//         }
//         return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//     {
//         id: 'SrNo',
//         numeric: true,
//         disablePadding: false,
//         label: 'Sr#',
//         align: "center"
//     },
//     {
//         id: 'Date',
//         numeric: false,
//         disablePadding: false,
//         label: 'Date',
//         align: "center"
//     },
//     {
//         id: 'SKUNo',
//         numeric: false,
//         disablePadding: false,
//         label: 'SKU No',
//         align: "center"
//     },
//     {
//         id: 'TotalDesign',
//         numeric: true,
//         disablePadding: false,
//         label: 'Total Design',
//         align: "center"
//     },
//     {
//         id: 'Amount',
//         numeric: true,
//         disablePadding: false,
//         label: 'Total Amount',
//         align: "right"
//     },
// ];

// function EnhancedTableHead(props) {
//     const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//         props;
//     const createSortHandler = (property) => (event) => {
//         onRequestSort(event, property);
//     };

//     EnhancedTableHead.propTypes = {
//         numSelected: PropTypes.number.isRequired,
//         onRequestSort: PropTypes.func.isRequired,
//         onSelectAllClick: PropTypes.func.isRequired,
//         order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//         orderBy: PropTypes.string.isRequired,
//         rowCount: PropTypes.number.isRequired,
//     };

//     return (
//         <TableHead>
//             <TableRow>
//                 {headCells.map((headCell) => (
//                     <TableCell
//                         key={headCell.id}
//                         align={headCell.align}
//                         padding={headCell.disablePadding ? 'none' : 'normal'}
//                         sortDirection={orderBy === headCell.id ? order : false}
//                     >
//                         <TableSortLabel
//                             active={orderBy === headCell.id}
//                             direction={orderBy === headCell.id ? order : 'asc'}
//                             onClick={createSortHandler(headCell.id)}
//                         >
//                             {headCell.label}
//                             {orderBy === headCell.id ? (
//                                 <Box component="span" sx={visuallyHidden}>
//                                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                                 </Box>
//                             ) : null}
//                         </TableSortLabel>
//                     </TableCell>
//                 ))}
//             </TableRow>
//         </TableHead>
//     );
// }

// const QuotationQuote = () => {
//     const [order, setOrder] = React.useState('asc');
//     const [orderBy, setOrderBy] = React.useState('calories');
//     const [selected, setSelected] = React.useState([]);
//     const [page, setPage] = React.useState(0);
//     const [dense, setDense] = React.useState(false);
//     const [rowsPerPage, setRowsPerPage] = React.useState(10);
//     const [searchVal, setSearchVal] = useState("");
//     const [fromDate, setFromDate] = useState(null);
//     const [toDate, setToDate] = useState(null);
//     const [data, setData] = useState([]);
//     const [filterData, setFilterData] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     const handleRequestSort = (event, property) => {
//         const isAsc = orderBy === property && order === 'asc';
//         setOrder(isAsc ? 'desc' : 'asc');
//         setOrderBy(property);
//     };

//     const handleClick = (event, id) => {
//         const selectedIndex = selected.indexOf(id);
//         let newSelected = [];

//         if (selectedIndex === -1) {
//             newSelected = newSelected.concat(selected, id);
//         } else if (selectedIndex === 0) {
//             newSelected = newSelected.concat(selected.slice(1));
//         } else if (selectedIndex === selected.length - 1) {
//             newSelected = newSelected.concat(selected.slice(0, -1));
//         } else if (selectedIndex > 0) {
//             newSelected = newSelected.concat(
//                 selected.slice(0, selectedIndex),
//                 selected.slice(selectedIndex + 1),
//             );
//         }
//         setSelected(newSelected);
//     };

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };

//     const emptyRows =
//         page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filterData.length) : 0;

//     const visibleRows = React.useMemo(
//         () =>
//             stableSort(filterData, getComparator(order, orderBy)).slice(
//                 page * rowsPerPage,
//                 page * rowsPerPage + rowsPerPage,
//             ),
//         [order, orderBy, page, rowsPerPage, filterData],
//     );

//     const resetAllFilters = () => {
//         setSearchVal("");
//         setFromDate(null);
//         setToDate(null);
//         setFilterData(data);
//         setPage(0);
//     }

//     const handleSearch = (eve, searchValue, fromDatess, todatess) => {
//         let fromdates = `${fromDatess?.["$y"]}-${checkMonth(fromDatess?.["$M"])}-${fromDatess?.["$D"]}`;
//         let todates = `${todatess?.["$y"]}-${checkMonth(todatess?.["$M"])}-${todatess?.["$D"]}`;

//         let filteredData = [];
//         data?.forEach((e, i) => {
//             let cutDate = "";
//             cutDate = e?.["Date"]?.split("-");
//             let compareDate = `${cutDate[0]}-${cutDate[1]}-${cutDate[2]}`
//             cutDate = `${cutDate[2]}-${cutDate[1]}-${cutDate[0]}`;
//             let flags = {
//                 dateFrom: false,
//                 dateTo: false,
//                 search: false,
//             }
//             if (searchValue !== "") {
//                 if (e?.["SrNo"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
//                     e?.["SKUNo"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
//                     e?.["Amount"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
//                     e?.["TotalDesign"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
//                     compareDate?.toString()?.toLowerCase()?.includes?.(searchValue?.trim()?.toLowerCase())
//                 ) {
//                     flags.search = true;
//                 }
//             } else {
//                 flags.search = true;
//             }

//             if (!fromdates?.includes(undefined) && !todates?.includes(undefined)) {
//                 let fromdat = moment(fromdates);
//                 let todat = moment(todates);
//                 let cutDat = moment(cutDate);
//                 const isBetween = cutDat.isBetween(fromdat, todat);
//                 if (isBetween) {
//                     flags.dateTo = true;
//                     flags.dateFrom = true;
//                 }
//             } else if (fromdates?.includes(undefined) && !todates?.includes(undefined)) {
//                 let todat = new Date(todates);
//                 let cutDat = new Date(cutDate);
//                 if (cutDat < todat) {
//                     flags.dateTo = true;
//                     flags.dateFrom = true;
//                 }

//             } else if (!fromdates?.includes(undefined) && todates?.includes(undefined)) {
//                 let fromdat = new Date(fromdates);
//                 let cutDat = new Date(cutDate);
//                 if (cutDat > fromdat) {
//                     flags.dateTo = true;
//                     flags.dateFrom = true;
//                 }

//             } else if (fromdates?.includes(undefined) && todates?.includes(undefined)) {
//                 flags.dateTo = true;
//                 flags.dateFrom = true;
//             }

//             if (flags.dateFrom === true && flags.dateTo === true && flags.search === true) {
//                 filteredData.push(e);
//             }

//         });
//         setFilterData(filteredData)
//     }

//     const fetchData = async () => {
//         try {
//             setIsLoading(true);
//             const storedData = localStorage.getItem('loginUserDetail');
//             const data = JSON.parse(storedData);
//             const customerid = data.id;
//             // const customerEmail = data.email1;
//             // setUserEmail(customerEmail);
//             const storeInit = JSON.parse(localStorage.getItem('storeInit'));
//             const { FrontEnd_RegNo } = storeInit;
//             const combinedValue = JSON.stringify({
//                 CurrencyRate: "1", FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid}`
//             });
//             // {"CurrencyRate":"1","FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}
//             const encodedCombinedValue = btoa(combinedValue);
//             const body = {
//                 "con": `{\"id\":\"Store\",\"mode\":\"getquote\",\"appuserid\":\"${data.email1}\"}`,
//                 "f": "zen (cartcount)",
//                 p: encodedCombinedValue
//             };
//             const response = await CommonAPI(body);
//             if (response.Data?.rd) {
//                 let rows = [];
//                 response?.Data?.rd?.forEach((e, i) => {
//                     let dataa = createData(i + 1, e?.Date, e?.SKUNo, e?.TotalDesign, e?.Amount);
//                     rows?.push(dataa)
//                 });
//                 // console.log(rows);
//                 setData(rows);
//                 setFilterData(rows);
//             } else {
//                 alert('nodata')
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <Box className='smilingSavedAddressMain salesApiSection' sx={{ padding: "20px", }}>
//             <Box sx={{ display: "flex", flexWrap: "wrap" }}>
//                 <Box sx={{ paddingRight: "15px" }} className="AllQuoteBtn QuotePadSec"> <Button variant="contained" className="muiSmilingRocksBtn" sx={{ background: "#7d7f85", display: "flex", alignItems: "center", marginBottom: 0, padding: "6px 0", }} onClick={eve => resetAllFilters(eve)}>
//                     All
//                 </Button></Box>
//                 <Box sx={{ display: "flex", alignItems: "center", position: "relative", padding: "0 15px 35px 0", maxWidth: "max-content" }} className="searchbox QuotePadSec">
//                     <TextField id="standard-basic" label="Search" variant="outlined" value={searchVal} onChange={eve => {
//                         setSearchVal(eve?.target?.value);
//                         handleSearch(eve, eve?.target?.value, fromDate, toDate);
//                     }} />
//                     <Button sx={{ padding: 0, maxWidth: "max-content", minWidth: "max-content", position: "absolute", right: "8px", color: "#757575" }}
//                         onClick={eve => handleSearch(eve, searchVal, fromDate, toDate)}><SearchIcon /></Button>
//                 </Box>
//                 <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
//                     <Box sx={{ display: "flex", alignItems: "center", paddingRight: "15px", paddingBottom: "35px" }} className="QuotePadSec">
//                         <p className='fs-6 mb-0' style={{ paddingRight: "8px" }}>Date: </p>
//                         <Box>
//                             <LocalizationProvider dateAdapter={AdapterDayjs}>
//                                 <DatePicker
//                                     label="Any"
//                                     value={fromDate}
//                                     onChange={(newValue) => setFromDate(newValue)}
//                                     format="DD MMM YYYY"
//                                     placeholder="DD MMM YYYY"
//                                     className='quotationFilterDates'
//                                 />
//                             </LocalizationProvider>
//                         </Box>
//                     </Box>
//                     <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "35px", paddingRight: "15px" }} className="QuotePadSec">
//                         <p className='fs-6 mb-0' style={{ paddingRight: "8px" }}>To: </p>
//                         <Box>
//                             <LocalizationProvider dateAdapter={AdapterDayjs}>
//                                 <DatePicker
//                                     label="Any"
//                                     value={toDate}
//                                     onChange={(newValue) => setToDate(newValue)}
//                                     format="DD MMM YYYY"
//                                     placeholder="DD MMM YYYY"
//                                     className='quotationFilterDates'
//                                 />
//                             </LocalizationProvider>
//                         </Box>
//                     </Box>
//                 </Box>
//                 <Box sx={{ padding: "0 15px 35px 0", display: "flex", alignItems: "center", }} className="QuotePadSec">
//                     <Button variant='contained' className="muiSmilingRocksBtn" sx={{ padding: "7px 10px", minWidth: "max-content", background: "#7d7f85" }} onClick={(eve) => handleSearch(eve, searchVal, fromDate, toDate)}><SearchIcon sx={{ color: "#fff !important" }} /></Button>
//                 </Box>
//             </Box>
//             {isLoading ?
//                 <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}><CircularProgress className='loadingBarManage' /></Box> : <Paper sx={{ width: '100%', mb: 2 }} className="salesApiTable">
//                     <TableContainer>
//                         <Table
//                             sx={{ minWidth: 750, border: "1px solid rgba(224, 224, 224, 1)", }}
//                             aria-labelledby="tableTitle"
//                             size={dense ? 'small' : 'medium'}
//                         >
//                             <EnhancedTableHead
//                                 numSelected={selected.length}
//                                 order={order}
//                                 orderBy={orderBy}
//                                 // onSelectAllClick={handleSelectAllClick}
//                                 onRequestSort={handleRequestSort}
//                                 rowCount={filterData.length}
//                             />
//                             <TableBody>
//                                 {visibleRows.map((row, index) => {
//                                     // const isItemSelected = isSelected(row.id);
//                                     const labelId = `enhanced-table-checkbox-${index}`;

//                                     return (
//                                         <TableRow
//                                             hover
//                                             onClick={(event) => handleClick(event, index)}
//                                             // role="checkbox"
//                                             // aria-checked={isItemSelected}
//                                             tabIndex={-1}
//                                             key={index}
//                                             // selected={isItemSelected}
//                                             sx={{ cursor: 'pointer' }}
//                                         >

//                                             <TableCell
//                                                 component="td"
//                                                 id={labelId}
//                                                 scope="row"
//                                                 padding="none"
//                                                 align="center"
//                                             >
//                                                 {row.SrNo}
//                                             </TableCell>
//                                             <TableCell align="center">{row.Date}</TableCell>
//                                             <TableCell align="center">{row.SKUNo}</TableCell>
//                                             <TableCell align="center">{row.TotalDesign}</TableCell>
//                                             <TableCell align="right">{row.Amount}</TableCell>
//                                             {/* <TableCell align="right">{row.protein}</TableCell> */}
//                                         </TableRow>
//                                     );
//                                 })}
//                                 {emptyRows > 0 && (
//                                     <TableRow
//                                         style={{
//                                             height: (dense ? 33 : 53) * emptyRows,
//                                         }}
//                                     >
//                                         <TableCell colSpan={6} />
//                                     </TableRow>
//                                 )}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                     <TablePagination
//                         rowsPerPageOptions={[10, 25, 100]}
//                         component="div"
//                         count={filterData.length}
//                         rowsPerPage={rowsPerPage}
//                         page={page}
//                         onPageChange={handleChangePage}
//                         onRowsPerPageChange={handleChangeRowsPerPage}
//                     />
//                 </Paper>}

//         </Box>
//     )
// }

// export default QuotationQuote
