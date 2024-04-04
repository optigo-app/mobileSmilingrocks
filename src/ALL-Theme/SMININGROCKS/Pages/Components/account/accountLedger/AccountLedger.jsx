import React from 'react'
import "./accountledger.css"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { Box, CircularProgress } from '@mui/material';
import { formatAmount } from '../../../../Utils/globalFunctions/GlobalFunction';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';
const AccountLedger = () => {
    const [resultArray, setResultArray] = useState([]);
    const [currencySymbol, setCurrencySymbol] = useState('');
    const [filterArray, setFilterArray] = useState([]);
    const [loaderAC, setLoaderAC] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filterVisible, setFilterVisible] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [dueDateWise, setDueDateWise] = useState(false);
    const [userName, setUserName] = useState('');
    const [selectedDays, setSelectedDays] = useState(30); 
    const [resultTotal, setResultTotal] = useState(null);
    const [openingBalanceTotal, setOpeningBalanceTotal] = useState(null);
    const [debit_dia_diff, setDebit_dia_diff] = useState(0);
    const [debit_mg_diff, setDebit_mg_diff] = useState(0);
    const [debit_amt_diff, setDebit_amt_diff] = useState(0);
    const [debit_curr_diff, setDebit_curr_diff] = useState(0);
    const [credit_dia_diff, setCredit_dia_diff] = useState(0);
    const [credit_mg_diff, setCredit_mg_diff] = useState(0);
    const [credit_amt_diff, setCredit_amt_diff] = useState(0);
    const [credit_curr_diff, setCredit_curr_diff] = useState(0);
    const navigate = useNavigate("");

    useEffect(() => {

        getStartNEndDate();

        const userName = JSON.parse(localStorage.getItem('loginUserDetail'));
        setUserName(userName?.customercode)

        getLedgerData();

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      useEffect(() => {
        filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startDate, endDate, selectedDays]);
    // }, [startDate, endDate, selectedDays, dueDateWise, selectedStatus]);

      const getLedgerData = async() => {
        setLoaderAC(true)
        let storeinit = JSON.parse(localStorage.getItem("storeInit"));
        let loginInfo = JSON.parse(localStorage.getItem("loginUserDetail"));
        const UserEmail = localStorage.getItem("userEmail");

        try {
            
        let EncodeData = {
            FrontEnd_RegNo: `${storeinit?.FrontEnd_RegNo}`,
            Customerid: `${loginInfo?.id}`,
          };
    
          const encodedCombinedValue = btoa(JSON.stringify(EncodeData));
    
          const body_currencycombo = {
            con: `{\"id\":\"Store\",\"mode\":\"CURRENCYCOMBO\",\"appuserid\":\"${UserEmail}\"}`,
            f: "m-test2.orail.co.in (getcategorysize)",
            p: `${encodedCombinedValue}`,
          };
    
          const response = await CommonAPI(body_currencycombo);
          
          const CurrencyRate = response?.Data?.rd[0]?.CurrencyRate;
          const CurrencySymbol = response?.Data?.rd[0]?.Currencysymbol;

          setCurrencySymbol(CurrencySymbol)

          const forendcode = {"CurrencyRate":`${CurrencyRate}`,"FrontEnd_RegNo":`${storeinit?.FrontEnd_RegNo}`,"Customerid":`${loginInfo?.id}`};

          const encodedCombinedValue2 = btoa(JSON.stringify(forendcode));

          const body = {
                "con":"{\"id\":\"Store\",\"mode\":\"getledger\",\"appuserid\":\"nimesh@ymail.in\"}",
                "f":"zen (cartcount)",
                "p":`${encodedCombinedValue2}`
            }
            
          const response2 = await CommonAPI(body);

          if(response2?.Status === '200'){

              if(response2?.Data?.rd?.length > 0)
                {

                    const mainData = response2?.Data?.rd;

                    mainData?.sort((a, b) => {
                        const dateA = new Date(a?.EntryDate);
                        const dateB = new Date(b?.EntryDate);
                        return dateA - dateB;
                    })
                    setResultArray(mainData)
                    getFormatedArrayData(mainData)
                    setFilterArray(mainData)
                    setLoaderAC(false)
                }
          }

        } catch (error) {
            console.log(error);
        }
      }
    
      const getFormatedArrayData = (data) => {

        let credit_debit = {
            credit_metalgold : 0,
            credit_diamondwt : 0,
            credit_totalamount : 0,
            credit_totalcurrency:0,
            debit_metalgold : 0,
            debit_diamondwt : 0,
            debit_totalamount : 0,
            debit_totalcurrency:0
        }

        data?.forEach((e)=> {
            if(e?.IsDebit === 1){
                credit_debit.debit_metalgold += e?.metalctw;
                credit_debit.debit_diamondwt += e?.diamondctw;
                credit_debit.debit_totalamount += e?.Amount;
                credit_debit.debit_totalcurrency += e?.Currency;
            }else{
                credit_debit.credit_metalgold += e?.metalctw;
                credit_debit.credit_diamondwt += e?.diamondctw;
                credit_debit.credit_totalamount += e?.Amount;
                credit_debit.credit_totalcurrency += e?.Currency;
            }
        })

        setResultTotal(credit_debit)
      }

      const toggleFilter = () => {
        setFilterVisible(!filterVisible);
        
      };

      const backToInitial = () => {

        //set checkbox
        setDueDateWise(false);

        //set dropdown
        setSelectedStatus('all');
        
        //set date
        getStartNEndDate();

        // setDays
        setSelectedDays(30)

        const buttons = document.querySelectorAll('.daybtn');
        buttons.forEach(button => {
            const buttonDays = parseInt(button?.textContent);
            if (buttonDays === 30) {
                button.classList.add('selected');
            } else {
                button.classList.remove('selected');
            }
        });

        getLedgerData();


        setOpeningBalanceTotal(null);

        setDebit_amt_diff(0);
        setDebit_dia_diff(0);
        setDebit_mg_diff(0);
        setCredit_amt_diff(0);
        setCredit_dia_diff(0);
        setCredit_mg_diff(0);

      }
      
      const handleDays = (days) => {
        setSelectedDays(days)
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Add leading zero if needed
        const currentDay = ('0' + currentDate.getDate()).slice(-2); // Add leading zero if needed
        
        // Set end date to current date
        const formattedCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;
        setEndDate(formattedCurrentDate);
    
        // Calculate start date based on selected number of days
        const startDate = new Date(currentDate.getTime() - days * 24 * 60 * 60 * 1000);
        const startYear = startDate.getFullYear();
        const startMonth = ('0' + (startDate.getMonth() + 1)).slice(-2);
        const startDay = ('0' + startDate.getDate()).slice(-2);
        const formattedStartDate = `${startYear}-${startMonth}-${startDay}`;
        setStartDate(formattedStartDate);

        filterData(formattedStartDate, formattedCurrentDate);

        const buttons = document.querySelectorAll('.daybtn');
        buttons.forEach(button => {
            const buttonDays = parseInt(button.textContent);
            if (buttonDays === days) {
                button.classList.add('selected');
            } else {
                button.classList.remove('selected');
            }
        });

      }


      
      const handleSearch = () => {
        filterData();
      };

    //   const filterData = () => {

    //     const filteredData = resultArray.filter(entry => {
    //         const entryDate = new Date(entry.EntryDate);
    //         const startDateObj = new Date(startDate);
    //         const endDateObj = new Date(endDate);
        
    //         // Extract year, month, and day components of the dates
    //         const entryYear = entryDate.getFullYear();
    //         const entryMonth = entryDate.getMonth();
    //         const entryDay = entryDate.getDate();
        
    //         const startYear = startDateObj.getFullYear();
    //         const startMonth = startDateObj.getMonth();
    //         const startDay = startDateObj.getDate();
        
    //         const endYear = endDateObj.getFullYear();
    //         const endMonth = endDateObj.getMonth();
    //         const endDay = endDateObj.getDate();

    //         if (
    //             (entryYear > startYear || 
    //             (entryYear === startYear && entryMonth > startMonth) || 
    //             (entryYear === startYear && entryMonth === startMonth && entryDay >= startDay)) 
    //             && 
    //             (entryYear < endYear ||  
    //             (entryYear === endYear && entryMonth < endMonth) ||  
    //             (entryYear === endYear && entryMonth === endMonth && entryDay <= endDay))
    //         ) {
    //             console.log("in if");
    //             // Filter based on selected status
    //             if (selectedStatus === 'all' || entry?.IsVerified?.toString() === selectedStatus) {
    //                 console.log("in all");
    //                 return true;
    //             }
    //         }
        
    //         return false;
    //     });
    //     console.log("in filter function",filteredData);


    //     const oneDayBeforeStartDate = new Date(startDate);
    //     oneDayBeforeStartDate.setDate(oneDayBeforeStartDate.getDate() - 1);
    //     const recordsBeforeStartDate = resultArray.filter(entry => {
    //         const entryDate = new Date(entry.EntryDate);
    //         return entryDate <= oneDayBeforeStartDate;
    //     });
    //     setFilterArray(filteredData);
    //     getFormatedArrayData(filteredData);
    //     CalculateOpeningBalance(recordsBeforeStartDate);
        
    //   };


    const filterData = () => {
        const filteredData = resultArray?.filter(entry => {
            const entryDate = new Date(entry?.EntryDate);
            const startDateObj = new Date(startDate);
            const endDateObj = new Date(endDate);
        
            // Extract year, month, and day components of the dates
            const entryYear = entryDate.getFullYear();
            const entryMonth = entryDate.getMonth();
            const entryDay = entryDate.getDate();
        
            const startYear = startDateObj.getFullYear();
            const startMonth = startDateObj.getMonth();
            const startDay = startDateObj.getDate();
        
            const endYear = endDateObj.getFullYear();
            const endMonth = endDateObj.getMonth();
            const endDay = endDateObj.getDate();

            // Compare only the year, month, and day components
            if (
                (entryYear > startYear || 
                (entryYear === startYear && entryMonth > startMonth) || 
                (entryYear === startYear && entryMonth === startMonth && entryDay >= startDay)) 
                && 
                (entryYear < endYear ||  
                (entryYear === endYear && entryMonth < endMonth) ||  
                (entryYear === endYear && entryMonth === endMonth && entryDay <= endDay))
            ) {
                return true;
                // Filter based on selected status
                // if (selectedStatus === 'all' || entry?.IsVerified?.toString() === selectedStatus) {
                //     return true;
                // }
            }
        
            return false;
        });
        const oneDayBeforeStartDate = new Date(startDate);
        oneDayBeforeStartDate.setDate(oneDayBeforeStartDate.getDate() - 1);
        const recordsBeforeStartDate = resultArray.filter(entry => {
            const entryDate = new Date(entry?.EntryDate);
            return entryDate <= oneDayBeforeStartDate;
        });
    
        setFilterArray(filteredData);
        getFormatedArrayData(filteredData);
        CalculateOpeningBalance(recordsBeforeStartDate);
    };
    
    
    
    
      const CalculateOpeningBalance = (data) => {
        
        let credit_debit = {
            credit_metalgold : 0,
            credit_diamondwt : 0,
            credit_totalamount : 0,
            credit_totalcurrency : 0,
            debit_metalgold : 0,
            debit_diamondwt : 0,
            debit_totalamount : 0,
            debit_totalcurrency:0
        }

        data?.forEach((e)=> {
            if(e?.IsDebit === 1){
                credit_debit.debit_metalgold += e?.metalctw;
                credit_debit.debit_diamondwt += e?.diamondctw;
                credit_debit.debit_totalamount += e?.Amount;
                credit_debit.debit_totalcurrency += e?.Currency;
            }else{
                credit_debit.credit_metalgold += e?.metalctw;
                credit_debit.credit_diamondwt += e?.diamondctw;
                credit_debit.credit_totalamount += e?.Amount;
                credit_debit.credit_totalcurrency += e?.Currency;
            }
        })

        
        //metal
        let cre_result_mg =   0;
        if(credit_debit.credit_metalgold - credit_debit.debit_metalgold > 0){
            cre_result_mg = credit_debit.credit_metalgold - credit_debit.debit_metalgold;
        }
        setCredit_mg_diff(cre_result_mg);
        let deb_result_mg =   0;
        if(credit_debit.credit_metalgold - credit_debit.credit_metalgold < 0){
            deb_result_mg = credit_debit.credit_metalgold - credit_debit.debit_metalgold;
        }
        setDebit_mg_diff(deb_result_mg);

        //diamond
        let cre_result_dia =   0;
        if(credit_debit.credit_diamondwt - credit_debit.debit_diamondwt > 0){
            cre_result_dia = credit_debit.credit_diamondwt - credit_debit.debit_diamondwt;
        }
        setCredit_dia_diff(cre_result_dia);
        let deb_result_dia =   0;
        if(credit_debit.credit_diamondwt - credit_debit.debit_diamondwt < 0){
            deb_result_dia = credit_debit.credit_diamondwt - credit_debit.debit_diamondwt;
        }
        setDebit_dia_diff(deb_result_dia);

        //amount difference
        let cre_result_amt =   0;
        if(credit_debit.credit_totalamount - credit_debit.debit_totalamount > 0){
            cre_result_amt = credit_debit.credit_totalamount - credit_debit.debit_totalamount;
        }
        setCredit_amt_diff(cre_result_amt);
        let deb_result_amt =   0;
        if(credit_debit.credit_totalamount - credit_debit.debit_totalamount < 0){
            deb_result_amt = credit_debit.credit_totalamount - credit_debit.debit_totalamount;
        }
        setDebit_amt_diff(deb_result_amt);

        //currency amount difference
        let cre_result_curr_amt =   0;
        if(credit_debit.credit_totalcurrency - credit_debit.debit_totalcurrency > 0){
            cre_result_curr_amt = credit_debit.credit_totalcurrency - credit_debit.debit_totalcurrency;
        }
        setCredit_curr_diff(cre_result_curr_amt);
        let deb_result_curr_amt =   0;
        if(credit_debit.credit_totalcurrency - credit_debit.debit_totalcurrency < 0){
            deb_result_curr_amt = credit_debit.credit_totalcurrency - credit_debit.debit_totalcurrency;
        }
        setDebit_curr_diff(deb_result_curr_amt);

        // console.log(result_dia);
        
        setOpeningBalanceTotal(credit_debit)
      }

    //   const handleSelect = (e) => {
    //     setSelectedStatus(e.target.value);
    //   }

      const getStartNEndDate = () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Add leading zero if needed
    
        // Set start date to the first day of the current month
        const formattedStartDate = `${currentYear}-${currentMonth}-01`;
        setStartDate(formattedStartDate);
    
        // Set end date to the last day of the current month
        const lastDay = new Date(currentYear, currentMonth, 0).getDate();
        const formattedEndDate = `${currentYear}-${currentMonth}-${lastDay}`;
        setEndDate(formattedEndDate);
        
        // const currentDate = new Date();
        // const currentYear = currentDate.getFullYear();
        // const currentMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Add leading zero if needed
        // const currentDay = ('0' + currentDate.getDate()).slice(-2); // Add leading zero if needed
        // const formattedCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;
        // setEndDate(formattedCurrentDate);
        // // Set start date to previous 7 days
        // const sixDaysAgo = new Date(currentDate.getTime() - 6 * 24 * 60 * 60 * 1000);
        // const sixDaysAgoYear = sixDaysAgo.getFullYear();
        // const sixDaysAgoMonth = ('0' + (sixDaysAgo.getMonth() + 1)).slice(-2);
        // const sixDaysAgoDay = ('0' + sixDaysAgo.getDate()).slice(-2);
        // const formattedStartDate = `${sixDaysAgoYear}-${sixDaysAgoMonth}-${sixDaysAgoDay}`;
        // setStartDate(formattedStartDate);
      }

      const formatDate = (dateString) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const [year, month, day] = dateString.split('-');
        return `${day} ${months[parseInt(month) - 1]} ${year}`;
      };

        const handlePreviousDays = () => {

        // Calculate new start date by subtracting 30 days from the current start date
        const newStartDate = moment(startDate).subtract(selectedDays, 'days').format('YYYY-MM-DD');
        
        // Calculate new end date by subtracting 30 days from the current end date
        const newEndDate = moment(endDate).subtract(selectedDays, 'days').format('YYYY-MM-DD');

        // Update the state with the new start date and end date
        setStartDate(newStartDate);
        setEndDate(newEndDate);

        // Filter data based on the new start date and end date
        filterData();



        }
      
        const handleNextDays = () => {

            const newStartDate = moment(startDate).add(30, 'days').format('YYYY-MM-DD');
        
            // Calculate new end date by adding 30 days to the current end date
            const newEndDate = moment(endDate).add(30, 'days').format('YYYY-MM-DD');
        
            // Update the state with the new start date and end date
            setStartDate(newStartDate);
            setEndDate(newEndDate);
        
            // Filter data based on the new start date and end date
            filterData();
        }
      
        const handleExcel = () => {
       
        const obj  = { 
            data: filterArray,
            debit_mg_diff : debit_mg_diff,
            debit_dia_diff : debit_dia_diff,
            debit_amt_diff : debit_amt_diff,
            debit_curr_diff : debit_curr_diff,
            credit_mg_diff : credit_mg_diff,
            credit_dia_diff: credit_dia_diff,
            credit_amt_diff : credit_amt_diff,
            credit_curr_diff : credit_curr_diff,
            resultTotal : resultTotal,
            startDate : startDate,
            endDate : endDate,
        }
        localStorage.setItem('excelData', JSON?.stringify(obj));
        window.open("http://localhost:3000/accountledgerexcel");
      }

  return (
    <div>
        <div className='fs-4 fw-bold text-center text-secondary ledger_title'>Ledger</div>
        <div>
            <div className='border'>
            <div className='p-2 ps-4 border-bottom fs_Al_mq' style={{letterSpacing:'1px'}}>Account Detail for &nbsp; <b>{userName}</b>&nbsp; Period of &nbsp;<b>{formatDate(startDate)}</b>&nbsp; to &nbsp;<b>{formatDate(endDate)}</b>&nbsp;</div>

                {/* <div className='p-2 ps-4 border-bottom' style={{letterSpacing:'1px'}}>Account Detail for &nbsp; <b>{userName}</b>&nbsp; Period of &nbsp;<b>{formatDate(startDate)}</b>&nbsp; to &nbsp;<b>{formatDate(endDate)}</b>&nbsp;</div> */}
                
                <div className='d-flex justify-content-between align-items-center flex_col_Al'>
                {
                    filterVisible ? <div className='fs_al2 p-2 d-flex justify-content-start  align-items-center flex-wrap'>
                    <div ><input type="date" name="date" id="startdate" className='mx-2 p-1 mb-2' value={startDate} onChange={(e) => setStartDate(e.target.value)} title='find data'  />
                     To 
                    <input type="date" name="date" id="enddate" className='mx-2 p-1 mb-2'   value={endDate} onChange={(e) => setEndDate(e.target.value)}  title='enddate' /><SearchIcon titleAccess='search here' sx={{cursor:'pointer'}}   onClick={handleSearch}/></div>
                    
                    <div className='mb-2'><button className='btn btn-secondary mx-2 py-1' onClick={() => backToInitial()}>All</button></div>
                    {/* <div onClick={() => navigate("/accountledgerexcel")}><img src="https://cdn22.optigoapps.com/lib/jo/28/images/ExcelExport.png" alt="#excelexport" className='eeal' /></div> */}
                    {/* <div onClick={() => handleExcel()}><img src="https://cdn22.optigoapps.com/lib/jo/28/images/ExcelExport.png" alt="#excelexport" className='eeal' /></div> */}
                    {/* <div onClick={() => navigate("/accountledgertable")}><img src="	https://cdn22.optigoapps.com/lib/jo/28/images/print_icon.png" alt="#excelexport" className='eeal' /></div> */}
                    {/* <div onClick={() => window.open("http://localhost:3000/accountledgertable")}><img src="	https://cdn22.optigoapps.com/lib/jo/28/images/print_icon.png" alt="#printtable" className='eeal' /></div> */}
                    <div className='d-flex'>
                        <button className='ms-2 mx-1 btn border p-2 py-0 daybtn mb-2' title='previous' onClick={() => handlePreviousDays()}>&lt;</button>
                        {/* <div className='mx-2 mb-2 d-flex flex-wrap'> */}
                            {[30, 60, 90]?.map((days) => (
                                <button key={days} className={`mx-1 btn border p-2 py-0 daybtn mb-2 ${selectedDays === days ? 'selected' : ''}`} title={`${days} days`} onClick={() => handleDays(days)}>{days}</button>
                            ))}
                        {/* </div> */}
                        <button className='ms-2 mx-1 btn border p-2 py-0 daybtn me-3 mb-2' title='next' onClick={() => handleNextDays()}>&gt;</button>
                    </div>
                    {/* <div>
                        <select name="status" className='p-1' id="status" value={selectedStatus} onChange={(e) => handleSelect(e)}>
                            <option value="all">All</option>
                            <option value="2">Pending</option>
                            <option value="1">Declined</option>
                            <option value="0">Verified</option>
                        </select>
                    </div> */}
                    <div className='mx-1 ms-4 mb-2'>
                        {/* <input type="checkbox" name="duedate" checked={dueDateWise} value={dueDateWise} id="duedate" onChange={() => setDueDateWise(!dueDateWise)} /><label htmlFor="duedate" className='user-select-none ps-1'>Due Date Wise</label> */}
                    </div>
                </div> : <div className=''></div>
                }
                <div className='m-2' style={{minWidth:'max-content'}} onClick={toggleFilter}> { !filterVisible ? <button className='toggleBtn'>Show More</button> : <button className='toggleBtn'>Show Less</button> } </div>
                {/* <ExpandMoreIcon sx={{cursor:'pointer'}} titleAccess='Show' /> */}
                {/* <ExpandLessIcon sx={{cursor:'pointer'}} titleAccess='Hide'/> */}
                </div>
                
                <div className='text-secondary fs_al d-flex justify-content-between align-items-start p-2 my-3'>
                    <div className='d-flex justify-content-start align-items-start flex-wrap'>
                        <div className='px-4 px_2_al d-flex align-items-center mb-2 '><span>Balance Gold :</span> <span className='bal_Amt_ac'>
                            { (((resultTotal?.debit_metalgold  + Math.abs(debit_mg_diff) ) - ( resultTotal?.credit_metalgold + Math.abs(credit_mg_diff)))?.toFixed(3)) }
                            { ((resultTotal?.debit_metalgold + Math.abs(debit_mg_diff)) - (resultTotal?.credit_metalgold + Math.abs(credit_mg_diff))) > 0 ? 'Dr' : 'Cr' }</span></div>
                        <div className='px-4 px_2_al d-flex align-items-center mb-2'><span>Balance Diam. :</span> <span className='bal_Amt_ac'>
                            { (((Math.abs(debit_dia_diff) + resultTotal?.debit_diamondwt) - (Math.abs(credit_dia_diff) + resultTotal?.credit_diamondwt))?.toFixed(3)) }
                            { ((Math.abs(debit_dia_diff) + resultTotal?.debit_diamondwt) - (Math.abs(credit_dia_diff) + resultTotal?.credit_diamondwt)) > 0 ? 'Dr' : 'Cr' }</span></div>
                        <div className='px-4 px_2_al d-flex align-items-center mb-2'><span>Balance Amount :</span> <span className='bal_Amt_ac'>
                            {/* { (formatAmount(resultTotal?.debit_totalcurrency - resultTotal?.credit_totalcurrency))}&nbsp;{(((Math.abs(debit_amt_diff) + resultTotal?.debit_totalamount) - (Math.abs(credit_amt_diff) + resultTotal?.credit_totalamount)) ? 'Dr' : 'Cr' ) }</span></div> */}
                            {currencySymbol}&nbsp;{ (formatAmount((Math.abs(debit_curr_diff) + resultTotal?.debit_totalcurrency) - (Math.abs(credit_curr_diff) + resultTotal?.credit_totalcurrency)))}&nbsp;
                            {(((Math.abs(debit_curr_diff) + resultTotal?.debit_totalcurrency) - (Math.abs(credit_curr_diff) + resultTotal?.credit_totalcurrency)) ? 'Dr' : 'Cr' ) }</span></div>
                    </div>
                </div>
                {
                    loaderAC ? <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "10px", paddingBottom: "30px" }}><CircularProgress className='loadingBarManage' /></Box> : <div className='m-2 overflow-auto'>
                    <table className='w-100'>
                        <thead className='w-100 border'>
                            <tr className='w-100 border-bottom fs_td'>
                                <td className='fw-bold text-center border-end' colSpan={9}>DEBIT</td>
                                <td className='fw-bold text-center' colSpan={9}>CREDIT</td>
                            </tr>
                            <tr className='w-100 border-bottom-0 fw-bold fs_td'>
                                <td className='border-end p-1 text-center '>DATE</td>
                                <td className='border-end p-1 text-center '>PARTICULAR</td>
                                <td className='border-end p-1 text-center '>VOUCHER</td>
                                <td className='border-end p-1 text-center '>METAL</td>
                                <td className='border-end p-1 text-center '>DIAM.</td>
                                <td className='border-end p-1 text-center '>AMOUNT</td>
                                <td className='border-end p-1 text-center ' title='Currency Rate'>RATE</td>
                                <td className='border-end p-1 text-center '>CURRENCY</td>
                                <td className='border-end p-1 text-center '>VERIFIED</td>
                                <td className='border-end p-1 text-center '>DATE</td>
                                <td className='border-end p-1 text-center '>PARTICULAR</td>
                                <td className='border-end p-1 text-center '>VOUCHER</td>
                                <td className='border-end p-1 text-center '>METAL</td>
                                <td className='border-end p-1 text-center '>DIAM.</td>
                                <td className='border-end p-1 text-center '>AMOUNT</td>
                                <td className='border-end p-1 text-center ' title='Currency Rate'>RATE</td>
                                <td className='border-end p-1 text-center '>CURRENCY</td>
                                <td className='p-1 text-center'>VERIFIED</td>
                            </tr>
                        </thead>
                        <tbody className='fs_td'>
                                        {
                                            ((Math.abs(debit_amt_diff) === 0) && 
                                            (Math.abs(debit_curr_diff) === 0) &&
                                            (Math.abs(debit_dia_diff) === 0) &&
                                            (Math.abs(debit_mg_diff) === 0) &&
                                            (Math.abs(credit_amt_diff) === 0) &&
                                            (Math.abs(credit_curr_diff) === 0) &&
                                            (Math.abs(credit_mg_diff) === 0) &&
                                            (Math.abs(credit_dia_diff) === 0)) ? '' : <tr className='border fw-bold'>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1  ps-1' align='center'>Opening</td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-end ps-1'>{ Math.abs(debit_mg_diff)}</td>
                                            <td className='border-end p-1 text-end ps-1'>{Math.abs(debit_dia_diff)}</td>
                                            <td className='border-end p-1 text-end pe-1'>{Math.abs(debit_amt_diff)}</td>
                                            <td className='border-end p-1 text-end pe-1'></td>
                                            <td className='border-end p-1 text-end pe-1' style={{minWidth:'100px'}}>{Math.abs(debit_curr_diff)}</td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-start ps-1' align='center'>Opening</td>
                                            <td className='border-end p-1 text-end pe-1'></td>
                                            <td className='border-end p-1 text-end ps-1'>{Math.abs(credit_mg_diff)}</td>
                                            <td className='border-end p-1 text-end ps-1'>{Math.abs(credit_dia_diff)}</td>
                                            <td className='border-end p-1 text-end ps-1'>{Math.abs(credit_amt_diff)}</td>
                                            <td className='border-end p-1 text-end pe-1'></td>
                                            <td className='border-end p-1 text-end pe-1' style={{minWidth:'100px'}}>{Math.abs(credit_curr_diff)}</td>
                                            <td className=' p-1 text-center'></td>
                                        </tr> 
                                        }
                                        {
                                            filterArray?.length > 0 ? filterArray?.map((e) => {
                                                let doneIcon = null;
                                                let closeIcon = null;

                                            if (e.IsVerified === 0) {
                                                doneIcon = <DoneIcon sx={{ color: 'green' }} />;
                                            } else if (e.IsVerified === 1) {
                                                closeIcon = <CloseIcon sx={{ color: 'red' }} />;
                                            }

                                    return(
                                        <tr className='border' key={e}>
                                            <td className='border-end p-1 text-center'>{e?.IsDebit === 0 ? '' : e?.EntryDate}</td>
                                            <td className='border-end p-1 text-start ps-1'>{ e?.IsDebit === 0 ? '' : e?.particular}</td>
                                            <td className='border-end p-1 text-start ps-1 text-primary text-decoration-underline' style={{cursor:'pointer'}} onClick={() => window.open("http://localhost:3000/accountledgerdebit")}>{e?.IsDebit === 0 ? '' : e?.referenceno === '' ? e?.voucherno : e?.referenceno}</td>
                                            <td className='border-end p-1 text-end pe-1'>{e?.IsDebit === 0 ? '' : e?.metalctw}</td>
                                            <td className='border-end p-1 text-end pe-1'>{e?.IsDebit === 0 ? '' : e?.diamondctw}</td>
                                            <td className='border-end p-1 text-end pe-1'>{e?.IsDebit === 0 ? '' : e?.Amount}</td>
                                            <td className='border-end p-1 text-end pe-1'>{e?.IsDebit === 0 ? '' : e?.CurrRate}</td>
                                            <td className='border-end p-1 text-end pe-1' style={{minWidth:'100px'}}>{e?.IsDebit === 0 ? '' : `${formatAmount(e?.Currency)} (${e?.CurrSymbol})`}</td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-center'>{e?.IsDebit === 0 ? e?.EntryDate : ''}</td>
                                            <td className='border-end p-1 text-start ps-1'>{e?.IsDebit === 0 ? e?.particular : ''}</td>
                                            <td className='border-end p-1 text-start ps-1 text-primary text-decoration-underline' onClick={() => window.open("http://localhost:3000/accountledgercredit")} style={{cursor:'pointer'}}>{e?.IsDebit === 0 ? e?.referenceno === '' ? e?.voucherno : e?.referenceno : ''}</td>
                                            <td className='border-end p-1 text-end pe-1'>{e?.IsDebit === 0 ? e?.metalctw : ''}</td>
                                            <td className='border-end p-1 text-end pe-1'>{e?.IsDebit === 0 ? e?.diamondctw : ''}</td>
                                            <td className='border-end p-1 text-end pe-1'>{e?.IsDebit === 0 ? e?.Amount : ''}</td>
                                            <td className='border-end p-1 text-end pe-1'>{e?.IsDebit === 0 ? e?.CurrRate : ''}</td>
                                            <td className='border-end p-1 text-end pe-1' style={{minWidth:'100px'}}>{e?.IsDebit === 0 ? `${formatAmount(e?.Currency)} (${e?.CurrSymbol})`  : ''}</td>
                                            {/* <td className=' p-1 text-center'><DoneIcon sx={{color:'red'}} /><CloseIcon /></td> */}
                                            <td className=' p-1 text-center'>{doneIcon}{closeIcon}</td>
                                        </tr>
                                    )
                                }) : <tr><td align='center' colSpan={18}>Data No Present</td></tr>
                            }
                                        <tr className='border fw-bold'>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-end pe-1'>{( (Math.abs(debit_mg_diff) + resultTotal?.debit_metalgold))?.toFixed(3)}</td>
                                            <td className='border-end p-1 text-end pe-1'>{((Math.abs(debit_dia_diff) + resultTotal?.debit_diamondwt))?.toFixed(3)}</td>
                                            <td className='border-end p-1 text-end pe-1' style={{minWidth:'100px'}}>{formatAmount(((Math.abs(debit_amt_diff) + resultTotal?.debit_totalamount)))}</td>
                                            <td className='border-end p-1 text-end pe-1'></td>
                                            <td className='border-end p-1 text-end pe-1' style={{minWidth:'100px'}}>{currencySymbol}&nbsp;{formatAmount((Math.abs(debit_curr_diff) + resultTotal?.debit_totalcurrency))}</td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            {/* {console.log("dia wt total with result",((Math.abs(credit_dia_diff) + resultTotal?.credit_diamondwt))?.toFixed(3))} */}
                                            <td className='border-end p-1 text-end pe-1'>{((Math.abs(credit_mg_diff) + resultTotal?.credit_metalgold))?.toFixed(3)}</td>
                                            <td className='border-end p-1 text-end pe-1'>{((Math.abs(credit_dia_diff) + resultTotal?.credit_diamondwt))?.toFixed(3)}</td>
                                            <td className='border-end p-1 text-end pe-1' style={{minWidth:'100px'}}>{formatAmount((Math.abs(credit_amt_diff) + resultTotal?.credit_totalamount))}</td>
                                            <td className='border-end p-1 text-end pe-1'></td>
                                            <td className='border-end p-1 text-end pe-1' style={{minWidth:'100px'}}>{currencySymbol}&nbsp;{formatAmount((Math.abs(credit_curr_diff) + resultTotal?.credit_totalcurrency))}</td>
                                            <td className=' p-1 text-center'></td>
                                        </tr>
                        </tbody>
                    </table>
                </div>
                }
            </div>
            
        </div>
    </div>
  )
}

export default AccountLedger