import React from 'react'
import "./creditvoucher.css"
const CreditVoucher = () => {
  const arr = [1,2,3,4];
  return (
    <div>
      <div className="containerVC">
        <div className="d-flex justify-content-end">
          <button className="btn_white my-5 p_btn_al_Vc" onClick={() => window.print()}>Print</button>
        </div>
        <div>
          <div className="vc_headline">CUSTOMER RECEIVE</div>
          <div className="d-flex justify-content-between align-items-center p-1 ">
            <div className="fs_vc">
              <div className="fs_vc_spes">gstore</div>
              <div>G-19,20</div>
              <div>ITC</div>
              <div>surat-395006, Gujarat(India)</div>
              <div>T 02614890777</div>
              <div>support@orail.in | www.optigoapps,com</div>
            </div>
            <div>
              <img src="" alt="#companylogo" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-start p-2 border mt-3 ">
          <div className='d-flex w-75'>
            <div className='pe-1 fw-bold'>
              From,
            </div>
            <div className="fs_vc">
              <div className="fs_vc_spes_2">boni pvt ltd</div>
              <div>varachha</div>
              <div>varachha</div>
              <div>Surat - 395002</div>
              <div>nimesh@ymail.in</div>
            </div>
          </div>
          <div className="fs_vc w-25">
            <div className="d-flex w-100"><div className="w-50 fw-bold">VOUCHER</div><div className="w-50 ps-2 ">CRO158</div></div>
            <div className="d-flex w-100"><div className="w-50 fw-bold">DATE</div><div className="w-50 ps-2">04 Mar 2024</div></div>
            <div className="d-flex w-100"><div className="w-50 fw-bold">CODE</div><div className="w-50 ps-2 fw-bold">Nimesh856</div></div>
          </div>
        </div>
        <div className="border mt-3">
          <table className="w-100 fs_vc">
            <thead className="w-100">
              <tr className="border border-top-0 border-start-0 border-end-0 w-100">
                <th style={{width:'5%', textAlign:'center'}} className="border-end border-start-0">SR#</th>
                <th style={{width:'30%', textAlign:'left'}} className="border-end ps-2">DESCRIPTION</th>
                <th style={{width:'30%', textAlign:'left'}} className="border-end ps-2">REMARKS</th>
                <th style={{width:'10%', textAlign:'left'}} className="border-end ps-2">HSN</th>
                <th style={{width:'12%', textAlign:'right'}} className="border-end pe-2">PCS</th>
                <th style={{width:'13%', textAlign:'right'}} className="border-end border-end-0 pe-1">WEIGHT.</th>
              </tr>
            </thead>
            <tbody>
              {
                arr?.map((e, i) => {
                  return(
                          <tr key={i} className="border border-start-0 border-end-0 fs_vc">
                            <td className="border-end ps-1" style={{width:'5%', textAlign:'center'}}>{e}</td>
                            <td className="border-end ps-1" style={{width:'30%', textAlign:'left', wordBreak:'break-word'}}>METAL: GOLD/24K/P</td>
                            <td className="border-end ps-1" style={{width:'30%', textAlign:'left', wordBreak:'break-word'}}>yellow gold/76.000</td>
                            <td className="border-end ps-1" style={{width:'10%', textAlign:'left'}}></td>
                            <td className="border-end pe-1" style={{width:'12%', textAlign:'right'}}>1mm</td>
                            <td className="pe-1" style={{width:'13%', textAlign:'right'}}>10.000</td>
                          </tr>
                  )
                })
              }
              
              <tr className='fs_vc' style={{height:'30px'}}>
                <th className="border-end ps-2" style={{ textAlign:'left'}} colSpan={5}>Total Amount</th>
                <th className="border-end pe-1" style={{width:'13%', textAlign:'right'}}>10.000</th>
              </tr>
              <tr className='border-top w-100 fs_vc' style={{height:'30px'}}>
                <td colSpan={6} className='p-3' style={{textAlign:'right'}}>FineWt: 10.000 gms</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='p-2 border mt-2 fs_vc'>
          **We hereby confirm that we have received the above goods in good condition and order.
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3 border fs_vc">
          <div className="h_vc border-end w-50 end_bottom_vc pb-2">Authorised, <b className='ps-1'>boni pvt ltd</b></div>
          <div className="w-50 h_vc end_bottom_vc pb-2">Authorised, <b className='ps-1'>gstore</b></div>
        </div>
      </div>
    </div>
  );
}

export default CreditVoucher