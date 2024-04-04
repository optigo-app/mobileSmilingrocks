import React, { useEffect } from 'react'
import "./accountledgertable.css"
const AccountLedgerTable = () => {
    const arr = [1,2,3,4,5];
    useEffect(() => {
        window.print();
    },[])
  return (
    <div>
         <div className='containerALT'>
                    <div className='header_al'>
                        <div className='headline_alt'>Party Ledger</div>
                        <div className='d-flex justify-content-between align-items-start w-100 p-1 border-bottom pb-2'>
                            <div>
                                <div className='fw-bold py-1 firmnamealt'>gstore</div>
                                <div className='lh_alt'>G-19,20</div>
                                <div className='lh_alt'>surat-395006, Gujarat(India)</div>
                                <div className='lh_alt'>T-12345678910</div>
                                <div className='lh_alt'>support@orail.in | www.optigoapps,com</div>
                            </div>
                            <div>img</div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center p-2 fs_alt'>
                            <div>Party Ledger Prepared For : <b>Nimesh856</b></div>
                            <div>From : <b>01 Mar 2024</b> To : <b>04 Mar 2024</b></div>
                        </div>
                    </div>
                    <table className='w-100'>
                        <thead className='w-100 border'>
                            <tr className='w-100 border-bottom fs_alt'>
                                <td className='fw-bold text-center border-end' colSpan={9}>DEBIT</td>
                                <td className='fw-bold text-center' colSpan={9}>CREDIT</td>
                            </tr>
                            <tr className='w-100 border-bottom-0 fw-bold fs_alt'>
                                <td className='border-end p-1 text-center w_al'>DATE</td>
                                <td className='border-end p-1 text-center w_al'>PARTICULAR</td>
                                <td className='border-end p-1 text-center w_al'>VOUCHER</td>
                                <td className='border-end p-1 text-center w_al'>METAL</td>
                                <td className='border-end p-1 text-center w_al'>DIAM.</td>
                                <td className='border-end p-1 text-center w_al'>RATE</td>
                                <td className='border-end p-1 text-center w_al'>CURRENCY RATE</td>
                                <td className='border-end p-1 text-center w_al'>AMOUNT</td>
                                <td className='border-end p-1 text-center w_al'>VERIFIED</td>
                                <td className='border-end p-1 text-center w_al'>DATE</td>
                                <td className='border-end p-1 text-center w_al'>PARTICULAR</td>
                                <td className='border-end p-1 text-center w_al'>VOUCHER</td>
                                <td className='border-end p-1 text-center w_al'>METAL</td>
                                <td className='border-end p-1 text-center w_al'>DIAM.</td>
                                <td className='border-end p-1 text-center w_al'>RATE</td>
                                <td className='border-end p-1 text-center w_al'>CURRENCY RATE</td>
                                <td className='border-end p-1 text-center w_al'>AMOUNT</td>
                                <td className='p-1 text-center w_al'>VERIFIED</td>
                            </tr>
                        </thead>
                        <tbody className='fs_alt'>
                            {
                                arr?.map((e) => {
                                    return(
                                        <tr className='border' key={e}>
                                            <td className='border-end p-1 text-center'>04 Mar 24</td>
                                            <td className='border-end p-1 text-start ps-1'>Party Return</td>
                                            <td className='border-end p-1 text-start ps-1 text-primary text-decoration-underline'>CRO158</td>
                                            <td className='border-end p-1 text-end pe-1'>0.540</td>
                                            <td className='border-end p-1 text-end pe-1'>5.00</td>
                                            <td className='border-end p-1 text-end pe-1'>rate</td>
                                            <td className='border-end p-1 text-end pe-1'>crate</td>
                                            <td className='border-end p-1 text-end pe-1'>7500</td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-center'>04 Mar 24</td>
                                            <td className='border-end p-1 text-start ps-1'>Party Receive</td>
                                            <td className='border-end p-1 text-start ps-1 text-primary text-decoration-underline'>CRI683</td>
                                            <td className='border-end p-1 text-end pe-1'>10.000</td>
                                            <td className='border-end p-1 text-end pe-1'>100.00</td>
                                            <td className='border-end p-1 text-end pe-1'>rate</td>
                                            <td className='border-end p-1 text-end pe-1'>crate</td>
                                            <td className='border-end p-1 text-end pe-1'>10,000</td>
                                            <td className=' p-1 text-center'></td>
                                        </tr>
                                    )
                                })
                            }
                                        <tr className='border fw-bold'>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-end pe-1'>0.540</td>
                                            <td className='border-end p-1 text-end pe-1'>5.00</td>
                                            <td className='border-end p-1 text-end pe-1'>rate</td>
                                            <td className='border-end p-1 text-end pe-1'>crate</td>
                                            <td className='border-end p-1 text-end pe-1'>7500</td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-center'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-start ps-1'></td>
                                            <td className='border-end p-1 text-end pe-1'>10.000</td>
                                            <td className='border-end p-1 text-end pe-1'>100.00</td>
                                            <td className='border-end p-1 text-end pe-1'>rate</td>
                                            <td className='border-end p-1 text-end pe-1'>crate</td>
                                            <td className='border-end p-1 text-end pe-1'>10,000</td>
                                            <td className=' p-1 text-center'></td>
                                        </tr>
                        </tbody>
                    </table>
                    <div className='d-flex justify-content-end align-items-center w-100 fs_alt pt-1 lh_alt'>
                        <div>
                            <div>Balance Gold : NA</div>
                            <div>Balance Diam. : NA</div>
                            <div>Balance Amount : NA</div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default AccountLedgerTable