import React from "react";
import "./debitvoucher.css";
const DebitVoucher = () => {
  const arr = [1,2,3,4];
  return (
    <div>
      <div className="containerDV">
        <div className="d-flex justify-content-end">
          <button className="btn_white my-5 p_btn_al_Dv" onClick={() => window.print()}>Print</button>
        </div>
        <div>
          <div className="dv_headline">head line</div>
          <div className="d-flex justify-content-between align-items-center p-1 border-bottom">
            <div className="fs_dv">
              <div className="fs_dv_spes">gstore</div>
              <div>G-19,20</div>
              <div>surat-395006, Gujarat(India)</div>
              <div>T 02614890777</div>
              <div>support@orail.in | www.optigoapps,com</div>
            </div>
            <div>
              <img src="" alt="#companylogo" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-start p-1 ">
          <div className="fs_dv w-75">
            <div className="fw-bold">To,</div>
            <div className="fs_dv_spes_2">boni pvt ltd</div>
            <div>varachha</div>
            <div>varachha</div>
            <div>Surat - 395002</div>
            <div>nimesh@ymail.in</div>
          </div>
          <div className="fs_dv w-25">
            <div className="d-flex w-100"><div className="w-50 end_dv fw-bold">OUTWARD</div><div className="w-50 ps-2 ">CRO158</div></div>
            <div className="d-flex w-100"><div className="w-50 end_dv fw-bold">DATE</div><div className="w-50  ps-2">04 Mar 2024</div></div>
          </div>
        </div>
        <div className="border mt-3">
          <div className="py-2 border-bottom p-1 fs-5">METAL</div>
          <table className="w-100 fs_dv">
            <thead className="w-100">
              <tr className="border border-top-0 border-start-0 border-end-0 w-100">
                <th style={{width:'12%', textAlign:'center'}} className="border-end border-start-0">ITEM</th>
                <th style={{width:'10%', textAlign:'center'}} className="border-end">TYPE</th>
                <th style={{width:'13%', textAlign:'center'}} className="border-end">COLOR</th>
                <th style={{width:'12%', textAlign:'center'}} className="border-end">SIZE</th>
                <th style={{width:'20%', textAlign:'center'}} className="border-end">DESCRIPTION</th>
                <th style={{width:'11%', textAlign:'center'}} className="border-end">GM.</th>
                <th style={{width:'10%', textAlign:'center'}} className="border-end">RATE</th>
                <th style={{width:'12%', textAlign:'center'}} className="border-end border-end-0">AMT.</th>
              </tr>
            </thead>
            <tbody>
              {
                arr?.map((e, i) => {
                  return(
                          <tr key={i} className="border border-start-0 border-end-0">
                            <td className="border-end ps-1" style={{width:'12%', textAlign:'left'}}>gold</td>
                            <td className="border-end ps-1" style={{width:'10%', textAlign:'left'}}>18k</td>
                            <td className="border-end ps-1" style={{width:'13%', textAlign:'left', wordBreak:'break-word'}}>yellow gold/76.000</td>
                            <td className="border-end ps-1" style={{width:'12%', textAlign:'left'}}>1mm</td>
                            <td className="border-end ps-1" style={{width:'20%', textAlign:'left', wordBreak:'break-word'}}>yellow gold</td>
                            <td className="border-end pe-1" style={{width:'11%', textAlign:'right'}}>0.710</td>
                            <td className="border-end pe-1" style={{width:'10%', textAlign:'right'}}>0.00</td>
                            <td className="pe-1" style={{width:'12%', textAlign:'right'}}>0.00</td>
                          </tr>
                  )
                })
              }
              
              <tr style={{height:'30px'}}>
                <th className="border-end ps-2" style={{width:'24%', textAlign:'left'}} colSpan={2}>Total Amount</th>
                <th className="border-end ps-1" style={{width:'10%', textAlign:'left'}}></th>
                <th className="border-end ps-1" style={{width:'13%', textAlign:'left'}}></th>
                <th className="border-end ps-1" style={{width:'20%', textAlign:'left'}}></th>
                <th className="border-end pe-1" style={{width:'11%', textAlign:'right'}}>0.710</th>
                <th className="border-end pe-1" style={{width:'10%', textAlign:'right'}}></th>
                <th className="border-end pe-1" style={{width:'12%', textAlign:'right'}}>0.00</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3 border fs_dv">
          <div className="h_dv border-end w-50 end_bottom_dv pb-1">RECEIVER's NAME & SIGNATURE</div>
          <div className="w-50 h_dv end_bottom_dv pb-1">For, gstore</div>
        </div>
      </div>
    </div>
  );
};

export default DebitVoucher;
