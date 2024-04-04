import moment from "moment";

export const checkMonth = (val) => {
    // month = "January" month = "February" month = "March" month = "April" month = "May" month = "June" month = "July" month = "August" month = "September" month = "October" month = "November" month = "December"
    let month = "";
    switch (val) {
        case 0:
            month = "01"
            break;
        case 1:
            month = "02"
            break;
        case 2:
            month = "03"
            break;
        case 3:
            month = "04"
            break;
        case 4:
            month = "05"
            break;
        case 5:
            month = "06"
            break;
        case 6:
            month = "07"
            break;
        case 7:
            month = "08"
            break;
        case 8:
            month = "09"
            break;
        case 9:
            month = "10"
            break;
        case 10:
            month = "11"
            break;
        case 11:
            month = "12"
            break;

        default:
            break;
    }
    return month;
};

export const checkDates = (fromDates, toDates, cutDates) => {
    let fromdates = `${fromDates?.["$y"]}-${checkMonth(fromDates?.["$M"])}-${fromDates?.["$D"]}`;
    let todates = `${toDates?.["$y"]}-${checkMonth(toDates?.["$M"])}-${toDates?.["$D"]}`;

    let cutDate = cutDates;
    cutDate = `${cutDate[2]}-${cutDate[1]}-${cutDate[0]}`;

    let flags = {
        dateTo: false,
        dateFrom: false,
    }
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

    return flags;
}

export const NumberWithCommas = (value, val) => {
    const roundedValue = Number(value).toFixed(val || 2);
    const stringValue = roundedValue.toString();
    const [integerPart, decimalPart] = stringValue.split('.');
    let formattedString = integerPart
        .split('')
        .reverse()
        .map((char, index) => (index > 0 && index % 2 === 0 ? ',' + char : char))
        .reverse()
        .join('');
    if (decimalPart !== undefined && val && val !== 0) {
        formattedString += '.' + decimalPart.padEnd(val || 2, '0');
    }
    formattedString = formattedString.replace(/^,+/, '');
    return formattedString;
};

export const getLocalStorageItems = () => {
    const storedData = localStorage.getItem('loginUserDetail');
    const data = JSON.parse(storedData);
    const storeInit = JSON.parse(localStorage.getItem('storeInit'));
    const { FrontEnd_RegNo } = storeInit;

    return {
        data: data, FrontEnd_RegNo: FrontEnd_RegNo
    }
}

export const accountValidation = () => {
    let getVal = JSON?.parse(localStorage.getItem("storeInit"))?.["IsMyaccount"];

    let getVals = [1163, 1164, 1157, 1314, 17020, 1159];
    let pageIsOn = false;
    getVals?.forEach((e, i) => {
        let getValss = JSON?.parse(localStorage?.getItem("myAccountFlags"))?.find(ele => ele?.pageid === e);
        if (getValss !== undefined) {
            if (getValss?.isvisible === 1) {
                pageIsOn = true;
            }
        }
    })
    return (getVal === 1 && pageIsOn === true) ? true : false;
}

export const accountDetailPage = (pageId) => {
    let getVal = JSON?.parse(localStorage?.getItem("myAccountFlags"))?.find(ele => ele?.pageid === pageId);
    // return getVal !== undefined ? (getVal?.isvisible === 1 ? true : true) : true;
    return getVal !== undefined ? (getVal?.isvisible === 1 ? true : false) : false;
}



export const accountDetailPages = () => {
    let arr = [
        { id: 1163, tabLabel: "Quote", tabComp: "QuotationQuote", compPath: "./QuotationQuote/QuotationQuote" },
        { id: 1164, tabLabel: "Job", tabComp: "QuotationJob", compPath: "./quotationFilters/QuotationJob" },
        { id: 1157, tabLabel: "Sales", tabComp: "Sales", compPath: "../sales/Sales/Sales" },
        { id: 1314, tabLabel: "Sales Report", tabComp: "SalesReport", compPath: "../sales/salesReport/SalesReport" },
        { id: 17020, tabLabel: "Design Wise Sales Report", tabComp: "DesignWiseSalesReport", compPath: "../sales/DesignWiseSalesReport/DesignWiseSalesReport" },
        { id: 1159, tabLabel: "Account Ledger", tabComp: "AccountLedger", compPath: "./accountLedger/AccountLedger" }
    ];

    let getValArr = [];
    arr?.forEach((e, i) => {
        let getVal = JSON?.parse(localStorage?.getItem("myAccountFlags"))?.find(ele => ele?.pageid === e?.id);
        getVal !== undefined && (getVal?.isvisible === 1 && getValArr?.push(e))
        // getValArr?.push({ label: e?.tabLabel,id: e?.id, comp: e?.tabComp, value: false }))  
        // getValArr?.push({ label: e?.tabLabel,id: e?.id, comp: e?.tabComp, value: false });
    });
    return getValArr;
}
export function formatAmount(amount) {
    const formattedAmount = parseFloat(+amount).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  
    return formattedAmount;
  }
  
