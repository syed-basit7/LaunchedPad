import React from "react";

const Farming_List_Card = (props) => {
  return (
    <>
      <div className="">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item bg-dark text-secondary">
            <div class="accordion-header" id="headingThree">
              <div
                class="accordion-button bg-dark d-block text-white border-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded={props.open_close}
                aria-controls="collapseThree"
              >
                {/* <div className="w-100 pool-farm-img d-flex flex-wrap align-items-center justify-content-between"> */}
                  <div className="row ">
                    <div className="col-lg-1  my-2">
                      <img
                        src={props.img1}
                        className="rounded-circle  border border-dark"
                        width={'75'}
                        height={'75'}
                      />
                    </div>
                    <div className="col-lg-11 my-2">
                        <div>
                            <h5 className="theme-color  p-0 m-0">{props.title}</h5>
                            <h6 className="text-white font-family my-2 p-0 m-0">TPAD / BNB TPAD</h6>
                            <p className="p-0 m-0 mb-1">Note: <span className="fw-bold"> LP staking will no longer be valid for the IDO staking.</span> in order to keep your future vesting, stake your requirements tier in IDO pool before  <span className="fw-bold">28 FEB 2023 - 23:59 UTC.</span></p>
                            <a href="/" className="theme-color fw-bold">Get TPAD-BNB Cake-LP by adding to liquidity 
                              <i  className="material-icons fs-4">arrow_outward</i>
                            </a>
                        </div>
                    </div>
                  </div>
                 
                {/* </div> */}

                <div className='my-3 d-flex flex-wrap align-items-center justify-content-between'>
                  <div className='text-center my-2'>
                    <h5 className="font-family">0 LP</h5>
                    <h6 className="text-white-50"> Staked</h6>
                  </div>
                  <div className='text-center my-2'>
                    <h5 className="font-family">0.00 TPAD</h5>
                    <h6  className="text-white-50">Earned</h6>
                  </div>
                  <div className='text-center my-2'>
                    <h5 className="theme-color font-family">18%</h5>
                    <h6  className="text-white-50">APR</h6>
                  </div>
                  <div className='text-center my-2'>
                    <h5 className="font-family">$229 249.25</h5>
                    <h6  className="text-white-50">LP Price</h6>
                  </div>
                  <div className='text-center my-2'>
                    <h5 className="font-family">$2665 524.24</h5>
                    <h6  className="text-white-50">Total Value Launched</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="row">
                  <div className="col-md-4">
                    <h5 className="font-family text-white">Deposit</h5>
                    <div className="mt-4 d-flex p-3 align-items-center py-0 border border-secondary rounded-1">
                      <input
                        type="text"
                        placeholder="00.00"
                        className="withdraw-input w-75 form-control bg-dark border-0 text-white p-3"
                      />
                      <h6 className="theme-color mx-2 p-0 m-0">MAX</h6>
                      <button className="btn btn-primary ms-3">APROVE</button>
                    </div>
                    <h6 className="mt-2">Your balance: 156 BNB</h6>
                  </div>

                  <div className="col-md-4">
                    <h5 className="font-family text-white">Withdraw</h5>
                    <div className="mt-4 d-flex p-3 align-items-center py-0 border border-secondary rounded-1">
                      <input
                        type="text"
                        placeholder="00.00"
                        className="withdraw-input w-75 form-control bg-dark border-0 text-white p-3"
                      />
                      <h6 className="theme-color mx-2 p-0 m-0">MAX</h6>
                      <button className="btn btn-primary ms-3">WITHDRAW</button>
                    </div>
                    <h6 className="mt-2">Your balance: 156 BNB</h6>
                  </div>
                  <div className="col-md-4">
                    <h5 className="font-family text-white">Pending Rewards</h5>
                    <div className="mt-4 d-flex p-3 align-items-center py-0 ">
                      <h5 className="text-success text-start p-0 m-0 w-50">
                        58.99 BNB
                      </h5>
                      <div className="w-50 text-end">
                        <a
                          href="#"
                          className="text-white font-family fs-5 text-decoration-none"
                        >
                          Claim
                        </a>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Farming_List_Card;
