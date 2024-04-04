import React, { useEffect } from "react";
import "./accountledgerexcel.css";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { useState } from "react";

const AccountLedgerExcel = () => {
  
    const arr = [1, 2, 3, 4, 5];
  const [excelData, setExcelData] = useState(null);

    //  useEffect(() => {
    //   // Simulate click on the download button when the component mounts
    //   const downloadButton = document.getElementById("test-table-xls-button");
    //   downloadButton.click();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    useEffect(() => {
      const obj = JSON.parse(localStorage.getItem('excelData'))
      setExcelData(obj);
    }, [])
    
    console.log(excelData);
  
  return (
    <>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button downnone"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
      <table className="tableExcelAL fs_excel_al" id="table-to-xls">
        <thead>
          <tr>
            <td height={70} colSpan={9} style={{paddingLeft:'5px'}}>
              <img
                src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
                alt="#companylogo"
                className="comapanylogo"
                height={70}
                width={70}
              />
            </td>
            <th align="center" colSpan={9}  className="fs-4 text-uppercase" style={{textTransform:'uppercase'}}>
                Party Ledger
            </th>
          </tr>
          <tr>
            <td colSpan={18}>Gstore</td>
          </tr>
          <tr>
            <td colSpan={18}>G-19,20</td>
          </tr>
          <tr>
            <td colSpan={18}>Tel No : 02614890777</td>
          </tr>
          <tr>
            <td className="text-center" colSpan={9}>
              Prepared For &nbsp;&nbsp;:&nbsp;&nbsp; <b>Nimesh856</b>
            </td>
            <td className="text-center" colSpan={9}>
              From &nbsp;&nbsp;:&nbsp;&nbsp; <b>01 Mar 2024</b>&nbsp;&nbsp; To
              &nbsp;:&nbsp;&nbsp; <b>05 Mar 2024</b>
            </td>
          </tr>
          <tr className="w-100 border fs_excel_al">
            <th align="center" className="fw-bold text-center border-end" colSpan={9} style={{borderTop:'0.5px solid #989898', borderLeft:'0.5px solid #989898'}}>
              DEBIT
            </th>
            <th align="center" className="fw-bold text-center" style={{borderTop:'0.5px solid #989898', borderRight: "0.5px solid #989898"}} colSpan={9}>
              CREDIT
            </th>
          </tr>
          <tr className="w-100 border-bottom-0 fw-bold fs_excel_al">
            <th align="center" className="border-end p-1 text-center " style={{borderLeft:'0.5px solid #989898'}}>DATE</th>
            <th align="center" className="border-end p-1 text-center ">PARTICULAR</th>
            <th align="center" className="border-end p-1 text-center ">VOUCHER</th>
            <th align="center" className="border-end p-1 text-center ">METAL</th>
            <th align="center" className="border-end p-1 text-center ">DIAM.</th>
            <th align="center" className="border-end p-1 text-center ">RATE</th>
            <th align="center" className="border-end p-1 text-center ">CURRENCY RATE</th>
            <th align="center" className="border-end p-1 text-center ">AMOUNT</th>
            <th align="center" className="border-end p-1 text-center ">VERIFIED</th>
            <th align="center" className="border-end p-1 text-center ">DATE</th>
            <th align="center" className="border-end p-1 text-center ">PARTICULAR</th>
            <th align="center" className="border-end p-1 text-center ">VOUCHER</th>
            <th align="center" className="border-end p-1 text-center ">METAL</th>
            <th align="center" className="border-end p-1 text-center ">DIAM.</th>
            <th align="center" className="border-end p-1 text-center ">RATE</th>
            <th align="center" className="border-end p-1 text-center ">CURRENCY RATE</th>
            <th align="center" className="border-end p-1 text-center ">AMOUNT</th>
            <th align="center" className=" p-1 text-center " style={{ borderRight: "0.5px solid #989898"}}>VERIFIED</th>
          </tr>
        </thead>
        <tbody className="fs_excel_al">
          {arr?.map((e) => {
            return (
              <tr className="border" key={e}>
                <td className="border-end p-1 text-center" style={{borderLeft:'0.5px solid #989898'}}>04 Mar 24</td>
                <td className="border-end p-1 text-start ps-1">Party Return</td>
                <td className="border-end p-1 text-start ps-1 text-primary text-decoration-underline" >
                  CRO158
                </td>
                <td className="border-end p-1 text-end pe-1">0.540</td>
                <td className="border-end p-1 text-end pe-1">5.00</td>
                <td className="border-end p-1 text-end pe-1">rate</td>
                <td className="border-end p-1 text-end pe-1">crate</td>
                <td className="border-end p-1 text-end pe-1">7500</td>
                <td className="border-end p-1 text-center"></td>
                <td className="border-end p-1 text-center">04 Mar 24</td>
                <td className="border-end p-1 text-start ps-1">
                  Party Receive
                </td>
                <td className="border-end p-1 text-start ps-1 text-primary text-decoration-underline cursor_pointer">
                  CRI683
                </td>
                <td className="border-end p-1 text-end pe-1">10.000</td>
                <td className="border-end p-1 text-end pe-1">100.00</td>
                <td className="border-end p-1 text-end pe-1" >rate</td>
                <td className="border-end p-1 text-end pe-1" >crate</td>
                <td className="border-end p-1 text-end pe-1" >10,000</td>
                <td className=" p-1 text-center" style={{ borderRight: "0.5px solid #989898"}}></td>
              </tr>
            );
          })}
          <tr className="border fw-bold">
            <th className="border-end p-1 text-center" style={{borderLeft:'0.5px solid #989898'}}></th>
            <th className="border-end p-1 text-start ps-1"></th>
            <th className="border-end p-1 text-start ps-1"></th>
            <th align="right" className="border-end p-1 text-end pe-1">0.540</th>
            <th align="right" className="border-end p-1 text-end pe-1">5.00</th>
            <th align="right" className="border-end p-1 text-end pe-1">rate</th>
            <th align="right" className="border-end p-1 text-end pe-1">crate</th>
            <th align="right" className="border-end p-1 text-end pe-1">7500</th>
            <th className="border-end p-1 text-center"></th>
            <th className="border-end p-1 text-center"></th>
            <th className="border-end p-1 text-start ps-1"></th>
            <th className="border-end p-1 text-start ps-1"></th>
            <th align="right" className="border-end p-1 text-end pe-1">10.000</th>
            <th align="right" className="border-end p-1 text-end pe-1">100.00</th>
            <th align="right" className="border-end p-1 text-end pe-1">rate</th>
            <th align="right" className="border-end p-1 text-end pe-1">crate</th>
            <th align="right" className="border-end p-1 text-end pe-1">10,000</th>
            <th className=" p-1 text-center" style={{ borderRight: "0.5px solid #989898"}}></th>
          </tr>
          <tr className="text-end border-start border-end">
            <td colSpan={12} style={{borderLeft:'0.5px solid #989898'}}></td>
            <td colSpan={3}>Balance Gold :</td> <td colSpan={2} align="right"><b>NA</b></td>
            <td style={{ borderRight: "0.5px solid #989898"}}></td>
          </tr>
          <tr className="text-end border-start border-end">
            <td style={{ borderLeft:'0.5px solid #989898'}} colSpan={12}></td>
            <td colSpan={3}>Balance Diam. :</td>
            <td colSpan={2} align="right"><b>NA</b></td>
            <td style={{ borderRight: "0.5px solid #989898"}}></td>
          </tr>
          <tr className="text-end border-start border-end border-bottom">
            <td
              style={{
                borderBottom: "0.5px solid #989898",
                borderLeft: "0.5px solid #989898",
              }}
              colSpan={12}
              align="right"
            ></td>
            <td style={{ borderBottom: "0.5px solid #989898" }} colSpan={3}>
              Balance Amount :
            </td>{" "}
            <td
              style={{borderBottom:'0.5px solid #989898'}}
              colSpan={2}
              align="right"
            >
              <b>NA</b>
            </td>
            <td style={{
                borderBottom: "0.5px solid #989898",
                borderRight: "0.5px solid #989898",
              }}></td>
          </tr>
          <tr style={{ height: "35px" }}>
            <td colSpan={14}>
              Report Generated On &nbsp;&nbsp;:&nbsp;&nbsp;{" "}
              <b>Tue Mar 5 2024 10:07:37</b>
            </td>
            <th colSpan={4} align="center" className="fw-bold">
              Checked By
            </th>
          </tr>
          <tr>
            <td colSpan={14}></td>
            <td
              height={50}
              colSpan={4}
              className=""
              style={{
                borderBottom: "0.5px solid #000",
                paddingBottom: "0.5px",
              }}
            ></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AccountLedgerExcel;
