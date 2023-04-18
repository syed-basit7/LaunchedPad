import React from 'react';
import { Link } from 'react-router-dom';
import ConnectWalletModal from '../section-components/ConnectWalletModal';


const Navbar = () => {
  window.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;
    console.log(scrollValue); 
    if (scrollValue > 80) {
      let navbar = document.getElementById('navbar');
      navbar.classList.add('back-blur', 'sticky-top', 'animate');
    } else {
      let navbar = document.getElementById('navbar');
      navbar.classList.remove('back-blur', 'sticky-top');
      navbar.classList.add('animate');
    }
  });
  return (
    <>
    <header class="container py-2 d-flex flex-wrap justify-content-center py-1">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img src='https://www.trustfi.org/img/icons/icon-trustfi-white.png' className='ms-3' width={60} />
        <span class="fs-6 text-white">TRUSTFI: <b>$0.067</b></span>
        <img src='https://www.trustfi.org/img/icons/icon-m.svg' className='ms-2' width={30} />
        <img src='https://www.trustfi.org/img/icons/icon-dinasour.png' className='ms-1' width={30} />
      </a>


      <ul class="nav nav-pills">
          {/* <div className='d-flex align-items-center'>
              <p className='text-white-50 p-0 m-0'>Contract Address </p>
              <p className='text-white ms-2 p-0 m-0' style={{overflow: 'hidden'}}>0x7565ab68D3F9...f28235</p>
              <span className='material-icons fs-4 text-white ms-2'>content_copy</span>
          </div> */}
      </ul>
      
      <ul class="nav nav-pills 3 ">
          <div>
              <div className='d-flex align-items-center flex-wrap'>
                  <div className='text-center  my-1'>
                    <button className='px-4 buy-tpad-btn btn btn-primary text-white'>
                    <img src='https://trustpad.io/_next/static/media/pancakeswap.b5559135.svg' width={25} /> <span className='ms-2'> Buy TPAD</span></button>
                  </div>
                  <div className='ms-3 px-2 py-1 my-1 d-flex align-items-center' style={{ border: '3px solid rgb(0, 143, 136)', borderRadius: '12px'}}>
                    <div>
                        <small className='fw-bold` d-block text-white p-0 m-0'>0 BNB</small>
                        <small className='fw-bold` theme-color p-0 m-0'>0 TPAD</small>
                    </div>
                    <div className='d-flex align-items-center mx-2 p-2' style={{borderRadius: '15px', background: ' rgba(3, 122, 155, 0.993)'}}>
                          <p className='text-white ms-2 p-0 m-0' style={{overflow: 'hidden', fontSize: '11px'}}>0x7565ab68D3F9...f28235</p>
                          <span an className='material-icons fs-6 text-white ms-2'>content_copy</span>
                    </div>
                  </div>
              </div>
                <div className='text-end'>
                  <small className='text-white-50'>Apr 18, 11:02 UTC</small>
                </div>
          </div>
      </ul>

    </header>
      <nav id='navbar' className="navbar py-3 navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="#">LaunchedPad</a>
          <div className='connect-wallet-mbl-view d-none'>
            <button className="btn btn-primary rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">Connect Wallet</button>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ms-4">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item ms-4">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item ms-4">
                <Link className="nav-link" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#roadmap">RoadMap</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#tiers">Tiers</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#partners">Partners</a>
              </li>
             
              <li className="nav-item dropdown ms-4">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Others Page
                </a>
                <ul className="dropdown-menu mt-3 px-2" aria-labelledby="navbarDropdown">
                  <li><Link className="nav-link" to="/farming">Farming</Link></li>
                  <li><Link className="nav-link" to="/apply_projects">Apply</Link></li>
                  <li><Link className="nav-link" to="/calender">Calender</Link></li>
                  <li><Link className="nav-link" to="/claim">Claim</Link></li>
                  <li><Link className="nav-link" to="/staking">Stake</Link></li>
                  <li><hr className=" bg-white" /></li>
                  <li><Link className="nav-link" to="/Kyc">KYC</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-primary rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">Connect Wallet</button>
            </form>
          </div>
        </div>
      </nav>


      {/* connect wallet modal */}
      <ConnectWalletModal/>


    </>
  );
}

export default Navbar;
