import React from 'react'
import CloseIcon from '../'

export default function WithdrwalStatementModel(props) {
    const { open, setOpen } = props;
    return (
        <>
            {
                open && (
                    <div className='withmodel'>
                        <div className='withModelHead'>
                            <div className='closeModelIcon' onClick={() => setOpen(false)}>
                                <div className='closeModelBg'>
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </div>
                            <h6>Withdraw History</h6>
                        </div>
                        <div className="withModelbody">
                            <div className="tableShow">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Transaction ID</th>
                                            <th>StateMent </th>
                                            <th>To</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01 Nov 2022 12:41:49</td>
                                            <td>897568756787568767</td>
                                            <td>- ₹ 1000</td>
                                            <td>Bank Card</td>
                                            <td style={{ color: "#4783B0" }}>Processing</td>
                                        </tr>
                                        <tr>
                                            <td>01 Nov 2022 12:41:49</td>
                                            <td>897568756787568767</td>
                                            <td>- ₹ 1000</td>
                                            <td>Bank Card</td>
                                            <td style={{ color: "#4783B0" }}>Processing</td>
                                        </tr>
                                        <tr>
                                            <td>01 Nov 2022 12:41:49</td>
                                            <td>897568756787568767</td>
                                            <td>- ₹ 1000</td>
                                            <td>Bank Card</td>
                                            <td style={{ color: "#56B047" }}>Credited</td>
                                        </tr>
                                        <tr>
                                            <td>01 Nov 2022 12:41:49</td>
                                            <td>897568756787568767</td>
                                            <td>- ₹ 1000</td>
                                            <td>Bank Card</td>
                                            <td style={{ color: "#56B047" }}>Credited</td>
                                        </tr>
                                        <tr>
                                            <td>01 Nov 2022 12:41:49</td>
                                            <td>897568756787568767</td>
                                            <td>- ₹ 1000</td>
                                            <td>Bank Card</td>
                                            <td style={{ color: "#56B047" }}>Credited</td>
                                        </tr>
                                        <tr>
                                            <td>01 Nov 2022 12:41:49</td>
                                            <td>897568756787568767</td>
                                            <td>- ₹ 1000</td>
                                            <td>Bank Card</td>
                                            <td style={{ color: "#56B047" }}>Credited</td>
                                        </tr>
                                        <tr>
                                            <td>01 Nov 2022 12:41:49</td>
                                            <td>897568756787568767</td>
                                            <td>- ₹ 1000</td>
                                            <td>Bank Card</td>
                                            <td style={{ color: "#56B047" }}>Credited</td>
                                        </tr>
                                        <tr>
                                            <td>01 Nov 2022 12:41:49</td>
                                            <td>897568756787568767</td>
                                            <td>- ₹ 1000</td>
                                            <td>Bank Card</td>
                                            <td style={{ color: "#56B047" }}>Credited</td>
                                        </tr>
                                        <tr>
                                            <td>01 Nov 2022 12:41:49</td>
                                            <td>897568756787568767</td>
                                            <td>- ₹ 1000</td>
                                            <td>Bank Card</td>
                                            <td style={{ color: "#4783B0" }}>Processing</td>
                                        </tr>
                                        <tr>
                                            <td>01 Nov 2022 12:41:49</td>
                                            <td>897568756787568767</td>
                                            <td>- ₹ 1000</td>
                                            <td>Bank Card</td>
                                            <td style={{ color: "#4783B0" }}>Processing</td>
                                        </tr>
                                        <tr>
                                            <td>01 Nov 2022 12:41:49</td>
                                            <td>897568756787568767</td>
                                            <td>- ₹ 1000</td>
                                            <td>Bank Card</td>
                                            <td style={{ color: "#4783B0" }}>Processing</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                )
            }
        </>
    )
}
