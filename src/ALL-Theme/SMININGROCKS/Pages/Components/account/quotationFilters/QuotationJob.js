import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, CircularProgress, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import "./QuotationJob.css";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import moment from 'moment';
import SearchIcon from '@mui/icons-material/Search';
import { useToast } from 'react-toastify';
import PrintIcon from '@mui/icons-material/Print';
// import jsonData from "../../../jsonFile/account/quotationfilter.json";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { checkMonth } from '../../../../Utils/globalFunctions/GlobalFunction';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
const CustomSortIcon = ({ order }) => {
  return (
    <>

      {order === 'asc' && <ArrowUpwardIcon />}
      {order === 'desc' && <ArrowDownwardIcon />}
    </>
  );
};

const QuotationJob = () => {

  const [orderProm, setOrderProm] = useState('order');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [statusList, setStatusList] = useState([
    // { id: 0, label: "All", value: "All" },
    // { id: 1, label: "Pending", value: "Pending" },
    // { id: 2, label: "In Production", value: "In Production" },
  ]);
  const [categoryList, setCategoryList] = useState([
    // { id: 0, label: "All", value: "All" },
    // { id: 1, label: "Bangle", value: "Bangle" },
    // { id: 2, label: "Earring", value: "Earring" },
    // { id: 3, label: "Necklace", value: "Necklace" },
    // { id: 4, label: "Ring", value: "Ring" },
    // { id: 5, label: "Bracelet", value: "Bracelet" },
    // { id: 6, label: "Pendant", value: "Pendant" },
    // { id: 7, label: "Brooch", value: "Brooch" },
    // { id: 8, label: "Anklet", value: "Anklet" },
    // { id: 9, label: "Tiara", value: "Tiara" },
    // { id: 10, label: "Cufflinks", value: "Cufflinks" },
    // { id: 11, label: "Charm", value: "Charm" },
    // { id: 12, label: "Nose Pin", value: "Nose Pin" },
    // { id: 13, label: "Hair Clip", value: "Hair Clip" },
    // { id: 14, label: "Tie Pin", value: "Tie Pin" },
    // { id: 15, label: "Toe Ring", value: "Toe Ring" },
    // { id: 16, label: "Belly Ring", value: "Belly Ring" },
    // { id: 17, label: "Piercing", value: "Piercing" },
    // { id: 18, label: "Nail Art", value: "Nail Art" },
    // { id: 19, label: "Bridal Set", value: "Bridal Set" },
    // { id: 20, label: "Tiaras", value: "Tiaras" },
    // { id: 21, label: "Watch", value: "Watch" },
    // { id: 22, label: "Crown", value: "Crown" },
    // { id: 23, label: "Pocket Watch", value: "Pocket Watch" },
    // { id: 24, label: "Keychain", value: "Keychain" },
    // { id: 25, label: "Buckle", value: "Buckle" },
    // { id: 26, label: "Money Clip", value: "Money Clip" },
    // { id: 27, label: "Chain", value: "Chain" },
    // { id: 28, label: "Locket", value: "Locket" },
    // { id: 29, label: "Medal", value: "Medal" },
    // { id: 30, label: "Pin", value: "Pin" },
    // { id: 31, label: "Badge", value: "Badge" },
    // { id: 32, label: "Charm Bracelet", value: "Charm Bracelet" },
    // { id: 33, label: "Tie Clip", value: "Tie Clip" },
    // { id: 34, label: "Pocket Square", value: "Pocket Square" },
    // { id: 35, label: "Tie Set", value: "Tie Set" },
    // { id: 36, label: "Collar Pin", value: "Collar Pin" },
    // { id: 37, label: "Scarf Ring", value: "Scarf Ring" },
    // { id: 38, label: "Hat Pin", value: "Hat Pin" },
    // { id: 39, label: "Sash", value: "Sash" },
    // { id: 40, label: "Handkerchief", value: "Handkerchief" },
    // { id: 41, label: "Tassel", value: "Tassel" },
    // { id: 42, label: "Bolo Tie", value: "Bolo Tie" },
    // { id: 43, label: "Cummerbund", value: "Cummerbund" },
    // { id: 44, label: "Ascot Tie", value: "Ascot Tie" },
    // { id: 45, label: "Hankie", value: "Hankie" },
    // { id: 46, label: "Purse", value: "Purse" },
    // { id: 47, label: "Lanyard", value: "Lanyard" },
    // { id: 48, label: "Garter", value: "Garter" },
    // { id: 49, label: "Handbag", value: "Handbag" },
    // { id: 50, label: "Wallet", value: "Wallet" },
  ]);
  const [metalColorList, setmetalColorList] = useState([
    // { id: 0, label: "All", value: "All" },
    // { id: 1, label: "Gold", value: "Gold" },
    // { id: 2, label: "Silver", value: "Silver" },
    // { id: 3, label: "Platinum", value: "Platinum" },
    // { id: 4, label: "Titanium", value: "Titanium" },
    // { id: 5, label: "Rose Gold", value: "Rose Gold" },
    // { id: 6, label: "White Gold", value: "White Gold" },
    // { id: 7, label: "Yellow Gold", value: "Yellow Gold" },
    // { id: 8, label: "Black Gold", value: "Black Gold" },
    // { id: 9, label: "Green Gold", value: "Green Gold" },
    // { id: 10, label: "Blue Gold", value: "Blue Gold" },
    // { id: 11, label: "Red Gold", value: "Red Gold" },
    // { id: 12, label: "Purple Gold", value: "Purple Gold" },
    // { id: 13, label: "Pink Gold", value: "Pink Gold" },
    // { id: 14, label: "Orange Gold", value: "Orange Gold" },
    // { id: 15, label: "Silver", value: "Silver" },
  ]);
  const [metalPurityList, setMetalPurityList] = useState([
    // { id: 0, label: "All", value: "All" },
    // { id: 1, label: "Gold 18k", value: "Gold 18k" },
    // { id: 2, label: "Gold 24k", value: "Gold 24k" },
    // { id: 3, label: "Gold 22k", value: "Gold 22k" },
    // { id: 4, label: "Gold 14k", value: "Gold 14k" },
    // { id: 5, label: "Gold 10k", value: "Gold 10k" },
    // { id: 6, label: "Gold 9k", value: "Gold 9k" },
    // { id: 7, label: "Sterling Silver", value: "Sterling Silver" },
    // { id: 8, label: "Fine Silver", value: "Fine Silver" },
    // { id: 9, label: "Silver Plated", value: "Silver Plated" },
    // { id: 10, label: "Platinum 950", value: "Platinum 950" },
    // { id: 11, label: "Platinum 900", value: "Platinum 900" },
    // { id: 12, label: "Platinum 850", value: "Platinum 850" },
    // { id: 13, label: "Pure Titanium", value: "Pure Titanium" },
    // { id: 14, label: "Titanium Coated", value: "Titanium Coated" },
    // { id: 15, label: "Rose Gold 18k", value: "Rose Gold 18k" },
    // { id: 16, label: "Rose Gold 14k", value: "Rose Gold 14k" },
    // { id: 17, label: "Rose Gold 10k", value: "Rose Gold 10k" },
    // { id: 18, label: "White Gold 18k", value: "White Gold 18k" },
    // { id: 19, label: "White Gold 14k", value: "White Gold 14k" },
    // { id: 20, label: "White Gold 10k", value: "White Gold 10k" },
    // { id: 21, label: "Yellow Gold 18k", value: "Yellow Gold 18k" },
    // { id: 22, label: "Yellow Gold 14k", value: "Yellow Gold 14k" },
    // { id: 23, label: "Yellow Gold 10k", value: "Yellow Gold 10k" },
    // { id: 24, label: "Black Gold 18k", value: "Black Gold 18k" },
    // { id: 25, label: "Black Gold 14k", value: "Black Gold 14k" },
    // { id: 26, label: "Black Gold 10k", value: "Black Gold 10k" },
    // { id: 27, label: "Green Gold 18k", value: "Green Gold 18k" },
    // { id: 28, label: "Green Gold 14k", value: "Green Gold 14k" },
    // { id: 29, label: "Green Gold 10k", value: "Green Gold 10k" },
    // { id: 30, label: "Blue Gold 18k", value: "Blue Gold 18k" },
    // { id: 31, label: "Blue Gold 14k", value: "Blue Gold 14k" },
    // { id: 32, label: "Blue Gold 10k", value: "Blue Gold 10k" },
    // { id: 33, label: "Red Gold 18k", value: "Red Gold 18k" },
    // { id: 34, label: "Red Gold 14k", value: "Red Gold 14k" },
    // { id: 35, label: "Red Gold 10k", value: "Red Gold 10k" },
    // { id: 36, label: "Purple Gold 18k", value: "Purple Gold 18k" },
    // { id: 37, label: "Purple Gold 14k", value: "Purple Gold 14k" },
    // { id: 38, label: "Purple Gold 10k", value: "Purple Gold 10k" },
    // { id: 39, label: "Pink Gold 18k", value: "Pink Gold 18k" },
    // { id: 40, label: "Pink Gold 14k", value: "Pink Gold 14k" },
    // { id: 41, label: "Pink Gold 10k", value: "Pink Gold 10k" },
    // { id: 42, label: "Orange Gold 18k", value: "Orange Gold 18k" },
    // { id: 43, label: "Orange Gold 14k", value: "Orange Gold 14k" },
    // { id: 44, label: "Orange Gold 10k", value: "Orange Gold 10k" },
  ]);
  const [statuse, setStatus] = useState(statusList[0]?.value || "");
  const [category, setCategory] = useState(categoryList[0]?.value || "");
  const [MetalColor, setMetalColor] = useState(metalColorList[0]?.value || "");
  const [metalPurity, setMetalPurity] = useState(metalPurityList[0]?.value || "");

  const [isLoading, setIsLoading] = useState(false);

  const handleOrderProms = (event) => {
    setOrderProm(event.target.value);
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
    // handleSearch(event, searchVal, fromDate, toDate, metalPurity, MetalColor, category, statuse, orderProm);
    handleSearch(event, searchVal, fromDate, toDate, metalPurity, MetalColor, category, event.target.value, orderProm);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
    handleSearch(event, searchVal, fromDate, toDate, metalPurity, MetalColor, event.target.value, statuse, orderProm);
  };
  const handleMetalColor = (event) => {
    setMetalColor(event.target.value);
    handleSearch(event, searchVal, fromDate, toDate, metalPurity, event.target.value, category, statuse, orderProm);
  };
  const handleMetalPurity = (event) => {
    setMetalPurity(event.target.value);
    handleSearch(event, searchVal, fromDate, toDate, event.target.value, MetalColor, category, statuse, orderProm);
  };
  moment.locale('en-gb');

  const columns = [
    { id: 'Sr#', label: 'Sr No', minWidth: 85, align: "center" },
    { id: 'Date', label: 'Date', minWidth: 110, align: "center" },
    { id: 'SKUNO', label: 'SKU#', minWidth: 110, align: "center" },
    { id: 'PO', label: 'PO', minWidth: 110, align: "center" },
    { id: 'JobNo', label: 'Job#', minWidth: 100, align: "center" },
    { id: 'DesignNo', label: 'Design#', minWidth: 100, align: "center" },
    { id: 'Category', label: 'Category', minWidth: 110, align: "center" },
    { id: 'PDate', label: 'Promise Date', minWidth: 130, align: "center" },
    { id: 'FinalAmount', label: 'Quote Price', minWidth: 120, align: "center" },
    { id: 'ProgressStatusName', label: 'Status', minWidth: 120, align: "center" },
    { id: 'Quantity', label: 'Total Qty', minWidth: 100, align: "center" },
    { id: 'SuppliedQuantity', label: 'Supplied', minWidth: 100, align: "center" },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (eve, searchValue, fromDatess, todatess, metalPurities, MetalColors, categories, statuss, orderPromDate) => {
    let fromdates = `${fromDatess?.["$y"]}-${checkMonth(fromDatess?.["$M"])}-${fromDatess?.["$D"]}`
    let todates = `${todatess?.["$y"]}-${checkMonth(todatess?.["$M"])}-${todatess?.["$D"]}`
    let filteredData = [];
    data?.forEach((e, i) => {
      let flags = {
        dateFrom: false,
        dateTo: false,
        status: false,
        category: false,
        MetalColor: false,
        search: false,
        metalPurity: false,
      }
      if (searchValue !== "") {
        if (e?.["Sr#"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
          e?.["Date"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
          e?.["SKUNO"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
          e?.["PO"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
          e?.["JobNo"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
          e?.["DesignNo"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
          e?.["Category"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
          e?.["metal_color"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
          e?.["metal_purity"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
          e?.["PDate"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
          e?.["FinalAmount"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
          e?.["ProgressStatusName"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
          e?.["Quantity"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase()) ||
          e?.["SuppliedQuantity"]?.toString()?.toLowerCase()?.includes(searchValue?.trim()?.toLowerCase())) {
          flags.search = true;
        }
      } else {
        flags.search = true;
      }
//order date and promise date flag filter
      let cutDate = "";
      if (orderPromDate === "order") {
        cutDate = e?.["Date"]?.split("-");
      } else {
        cutDate = e?.["PDate"]?.split("-");
      }
      cutDate = `${cutDate[2]}-${cutDate[1]}-${cutDate[0]}`;

      if (!fromdates?.includes(undefined) && !todates?.includes(undefined)) {
        let fromdat = moment(fromdates);
        let todat = moment(todates);
        let cutDat = moment(cutDate);
        const isBetween = cutDat.isBetween(fromdat, todat);
        if (isBetween) {
          flags.dateTo = true;
          flags.dateFrom = true;
        }
      } else if (fromdates?.includes(undefined) && !todates?.includes(undefined)) {
        let todat = new Date(todates);
        let cutDat = new Date(cutDate);
        if (cutDat < todat) {
          flags.dateTo = true;
          flags.dateFrom = true;
        }

      } else if (!fromdates?.includes(undefined) && todates?.includes(undefined)) {
        let fromdat = new Date(fromdates);
        let cutDat = new Date(cutDate);
        if (cutDat > fromdat) {
          flags.dateTo = true;
          flags.dateFrom = true;
        }

      } else if (fromdates?.includes(undefined) && todates?.includes(undefined)) {
        flags.dateTo = true;
        flags.dateFrom = true;
      }

      if (e?.MetalType?.toString()?.toLowerCase()?.includes(metalPurities?.toLowerCase()) || metalPurities?.toLowerCase() === "all") {
        flags.metalPurity = true;
      }
      if (e?.MetalColor?.toString()?.toLowerCase()?.includes(MetalColors?.toLowerCase()) || MetalColors?.toLowerCase() === "all") {
        flags.MetalColor = true;
      }
      if (e?.Category?.toString()?.toLowerCase()?.includes(categories?.toLowerCase()) || categories?.toLowerCase() === "all") {
        flags.category = true;
      }
      if (e?.ProgressStatusName?.toString()?.toLowerCase()?.includes(statuss?.toLowerCase()) || statuss?.toLowerCase() === "all") {
        flags.status = true;
      }

      if (flags.dateFrom === true && flags.dateTo === true && flags.status === true && flags.category === true && flags.MetalColor === true && flags.search === true && flags.metalPurity === true) {
        filteredData.push(e);
      }

    });
    setFilterData(filteredData);
  }

  const resetAllFilters = (eve) => {
    setOrderProm("order");
    setFromDate(null);
    setToDate(null);
    setStatus(statusList[0]?.value);
    setCategory(categoryList[0]?.value);
    setMetalColor(metalColorList[0]?.value);
    setMetalPurity(metalPurityList[0]?.value);
    setSearchVal("");
    handleSearch(eve, "", null, null, metalPurityList[0]?.value, metalColorList[0]?.value, categoryList[0]?.value, statusList[0]?.value, "order");
  }

  // function createData(srNo, Date, SKU, Job, Design, Category, PromiseDate, QuotePrice, Status, TotalQty, Supplied) {
  //   return {
  //     srNo, Date, SKU, Job, Design, Category, PromiseDate, QuotePrice, Status, TotalQty, Supplied,
  //   };
  // }

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const storedData = localStorage.getItem('loginUserDetail');
      const data = JSON.parse(storedData);
      const customerid = data?.id;
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
        "con": `{\"id\":\"Store\",\"mode\":\"getjob\",\"appuserid\":\"${data.email1}\"}`,
        "f": "zen (cartcount)",
        p: encodedCombinedValue
      };
      const response = await CommonAPI(body);
      if (response.Data?.rd) {

        let datass = [];
        let allStatus = [];
        let allCategory = [];
        let allMetalColor = [];
        let allMetalPurity = [];
        response?.Data?.rd?.forEach((e, i) => {
          let obj = { ...e };
          obj["Sr#"] = i + 1;
          datass?.push(obj);
          let findStatus = allStatus?.findIndex((ele, ind) => ele?.label === e?.ProgressStatusName);
          let findCategory = allCategory?.findIndex((ele, ind) => ele?.label === e?.Category);
          let findMetalColor = allMetalColor?.findIndex((ele, ind) => ele?.label === e?.MetalColor);
          let findMetalPurity = allMetalPurity?.findIndex((ele, ind) => ele?.label === e?.MetalType);
          if (findStatus === -1) {
            allStatus?.push({ id: allStatus?.length, label: e?.ProgressStatusName, value: e?.ProgressStatusName, });
          }
          if (findCategory === -1) {
            allCategory?.push({ id: allCategory?.length, label: e?.Category, value: e?.Category, });
          }
          if (findMetalColor === -1) {
            allMetalColor?.push({ id: allMetalColor?.length, label: e?.MetalColor, value: e?.MetalColor, });
          }
          if (findMetalPurity === -1) {
            allMetalPurity?.push({ id: allMetalPurity?.length, label: e?.MetalType, value: e?.MetalType, });
          }
        });
        allStatus?.unshift({ id: allStatus?.length, label: "ALL", value: "ALL" });
        allCategory?.unshift({ id: allCategory?.length, label: "ALL", value: "ALL" });
        allMetalColor?.unshift({ id: allMetalColor?.length, label: "ALL", value: "ALL" });
        allMetalPurity?.unshift({ id: allMetalPurity?.length, label: "ALL", value: "ALL" });
        setStatusList(allStatus);
        setCategoryList(allCategory);
        setmetalColorList(allMetalColor);
        setMetalPurityList(allMetalPurity);
        setStatus(allStatus[0]?.value);
        setCategory(allCategory[0]?.value);
        setMetalColor(allMetalColor[0]?.value);
        setMetalPurity(allMetalPurity[0]?.value);
        setData(datass);
        setFilterData(datass);
      } else {
        alert('nodata')
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box className='smilingSavedAddressMain quotationFiltersText' sx={{ padding: "20px", }}>
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <Button variant="contained" sx={{ marginBottom: "35px", background: "#7d7f85" }} className='muiSmilingRocksBtn QuotationJobAllBtn' onClick={eve => resetAllFilters(eve)} >All</Button>
        <Box sx={{ padding: "0 20px" }}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={orderProm}
            onChange={handleOrderProms}
            sx={{ display: "flex", alignItems: "center", flexDirection: "unset" }}
          >
            <FormControlLabel value="order" className='orderFrom QuotationJobAllBtnSecDate' control={<Radio />} label="Order Date" sx={{ padding: "0 20px 35px 0", marginRight: "0" }} />
            <FormControlLabel value="prom" className='orderFrom QuotationJobAllBtnSecDate' control={<Radio />} label="Prom. Date" sx={{ padding: "0 10px 35px 0", marginRight: "0" }} />
          </RadioGroup>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", paddingRight: "15px", paddingBottom: "35px" }} className="QuotationJobAllBtnSec">
            {/* <p className='fs-6 mb-0' style={{minWidth: "50px"}}>Date: </p> */}
            <Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date From"
                  value={fromDate}
                  onChange={(newValue) => setFromDate(newValue)}
                  format="DD MMM YYYY"
                  className='quotationFilterDates'
                />
              </LocalizationProvider>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", paddingBottom: "35px", paddingRight: "15px" }} className="QuotationJobAllBtnSec">
            {/* <p className='fs-6 mb-0' style={{minWidth: "50px"}}>To: </p> */}
            <Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date To"
                  value={toDate}
                  onChange={(newValue) => setToDate(newValue)}
                  format="DD MMM YYYY"
                  className='quotationFilterDates'
                />
              </LocalizationProvider>
            </Box>
          </Box>
        </Box>
        <Box sx={{ padding: "0 15px 35px 0", }} className="QuotationJobAllBtnSec">
          <Button variant='contained' className='muiSmilingRocksBtn' sx={{ padding: "7px 10px", minWidth: "max-content", background: "#7d7f85" }} onClick={(eve) => handleSearch(eve, searchVal, fromDate, toDate, metalPurity, MetalColor, category, statuse, orderProm)}><SearchIcon sx={{ color: "#fff !important" }} /></Button>
        </Box>
        <Box sx={{ position: "relative", padding: "0 15px 35px 0", display: "flex", flexWrap: "wrap", alignitems: "center", justifyContent: "center" }} className="QuotationJobAllBtnSec" >
          <label className='lh-1 selectLabel' style={{ marginTop: "-3px", position: "absolute", left: 0, top: "-16px", }}>Status</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={statuse}
            label="Status"
            onChange={handleStatus}
            className='statusSelect'
          >
            {
              statusList?.map((e, i) => {
                return <MenuItem value={e?.value} key={i}>{e?.label}</MenuItem>
              })
            }
          </Select>
        </Box>
        <Box sx={{ position: "relative", padding: "0 15px 35px 0", display: "flex", flexWrap: "wrap", alignitems: "center", justifyContent: "center" }} className="QuotationJobAllBtnSec" >
          <label className='lh-1 selectLabel' style={{ marginTop: "-3px", position: "absolute", left: 0, top: "-16px", }}>Category</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className='categoryList'
            value={category}
            label="Status"
            onChange={handleCategory}
          >
            {
              categoryList?.map((e, i) => {
                return <MenuItem value={e?.value} key={i}>{e?.label}</MenuItem>
              })
            }
          </Select>
        </Box>
        <Box sx={{ position: "relative", padding: "0 15px 35px 0", display: "flex", flexWrap: "wrap", alignitems: "center", justifyContent: "center" }} className="QuotationJobAllBtnSec" >
          <label className='lh-1 selectLabel' style={{ marginTop: "-3px", position: "absolute", left: 0, top: "-16px", }}>Metal Color</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={MetalColor}
            label="Status"
            className='MetalColorList'
            onChange={handleMetalColor}
          >
            {
              metalColorList?.map((e, i) => {
                return <MenuItem value={e?.value} key={i}>{e?.label}</MenuItem>
              })
            }
          </Select>
        </Box>
        <Box sx={{ position: "relative", padding: "0 15px 35px 0", display: "flex", flexWrap: "wrap", alignitems: "center", justifyContent: "center" }} className="QuotationJobAllBtnSec" >
          <label className='lh-1 selectLabel' style={{ marginTop: "-3px", position: "absolute", left: 0, top: "-16px", }}>Metal Purity</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={metalPurity}
            label="Status"
            className='MetalPurityList'
            onChange={handleMetalPurity}
          >
            {
              metalPurityList?.map((e, i) => {
                return <MenuItem value={e?.value} key={i}>{e?.label}</MenuItem>
              })
            }
          </Select>
        </Box>
        <Box sx={{ paddingBottom: "35px", paddingRight: "15px", marginTop: "-5px" }} className="QuotationJobAllBtnSec"><Button sx={{ padding: 0, minWidth: "max-content" }}><PrintIcon /></Button></Box>
        <Box sx={{ display: "flex", alignItems: "center", position: "relative", padding: "0 15px 35px 0", maxWidth: "max-content" }} className="searchbox QuotationJobAllBtnSec">
          <TextField id="standard-basic" label="Search" variant="outlined" value={searchVal} onChange={eve => {
            setSearchVal(eve?.target?.value);
            handleSearch(eve, eve?.target?.value, fromDate, toDate, metalPurity, MetalColor, category, statuse, orderProm);
          }} />
          <Button sx={{ padding: 0, maxWidth: "max-content", minWidth: "max-content", position: "absolute", right: "20px", color: "#757575" }}
            onClick={eve => handleSearch(eve, searchVal, fromDate, toDate, metalPurity, MetalColor, category, statuse, orderProm)}><SearchIcon /></Button>
        </Box>
      </Box>

      <Box sx={{ padding: "0 0 35px 0", marginTop: "-15px" }}>
        {isLoading ?
          <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}><CircularProgress className='loadingBarManage' /></Box> : <Paper sx={{ width: '100%', overflow: 'hidden' }} className='QuoteJobtable'>
            <TableContainer sx={{ maxHeight: 810 }} className='quotationJobSec'>
              <Table stickyHeader aria-label="sticky table" className='quotaionFiltertable'>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth, backgroundColor: "#ebebeb", color: "#6f6f6f", }}
                        onClick={() => handleRequestSort(column.id)}
                      >
                        {column.label}
                        {orderBy === column.id ? (
                          <span style={{ display: 'flex', alignItems: 'center' }}>
                            {orderBy === column.id && (<CustomSortIcon order={order} />)}
                          </span>
                        ) : null}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stableSort(filterData, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
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


    </Box>
  )
}

export default QuotationJob
