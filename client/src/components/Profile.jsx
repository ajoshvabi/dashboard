

import React from 'react';
import { Col, Container, Dropdown, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Profile = () => {
    return (
        <Container fluid className=' containerstyle' >
            <Row>
                <Col lg={2} className='bg-dark d-flex justify-content-center position-fixed h-100 d-block d-none d-lg-block'>
                    <Row className=''>
                    <Row className='ms-auto '>
                            <Row className='text-dark ms-auto mt-5'>
                                <div className='d-flex flex-column justify-content-center align-items-center  h-25'>
                                    <img src="./assets/Briefcase.png" alt="" className='img-fluid my-2' />
                                    <img src="./assets/statBoard.png" alt="" className='img-fluid my-2' />
                                </div>
                            </Row>
                            <Link  to='/' className=' text-decoration-none text-light'>
                            <Row className='text-light ms-auto my-4'>
                            <div className='bg-black d-flex justify-content-start align-items-center ps-4  rounded-start-4 my-auto'>
                            <img src="./assets/menu.png" alt="" className='img-fluid' />
                                    <p className='my-auto mx-2 py-2'>Dashboard</p>
                                </div>
                            </Row>
                            </Link>
                            <Link  to='/profile' className=' text-decoration-none text-dark'>
                            <Row className=' ms-auto my-4'>
                                <div className='bg-light d-flex justify-content-start align-items-center ps-4 rounded-start-4 my-auto'>
                                    <img src="./assets/Support.png" alt="" className='img-fluid' />
                                    <p className='my-auto mx-2 py-2'>Profile</p>
                                </div>
                            </Row>
                            </Link>
                            <Link to='/' className=' text-decoration-none text-dark'>
                                <Row className='text-light ms-auto my-4'>
                                    <div className='bg-black d-flex justify-content-start align-items-center ps-4  rounded-start-4 my-auto'>
                                        <img src="./assets/Puzzle.png" alt="" className='img-fluid' />
                                        <p className='my-auto mx-2 py-2'>Plugins</p>
                                    </div>
                                </Row>
                            </Link>
                            <Link to='/' className=' text-decoration-none text-dark'>
                                <Row className='text-light ms-auto my-4'>
                                    <div className='bg-black d-flex justify-content-start align-items-center ps-4 rounded-start-4 my-auto'>
                                        <img src="./assets/Help.png" alt="" className='img-fluid' />
                                        <p className='my-auto mx-2 py-2'>Help</p>
                                    </div>
                                </Row>
                            </Link>
                        </Row>
                        <Row className=' mx-auto mt-5 fixed-bottom p-0'>
                            <Col lg={2} className='bg-light'>
                                <div className='d-flex justify-content-center '>
                                    <p className='mx-auto text-danger my-2'>Logout <img src="./assets/Shutdown.png" alt="" className='img-fluid ' /></p>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Row>
                </Col>
                <Col lg={2}></Col>
                <Col className='p-0'>
                    <Navbar className={`${window.innerWidth < 992 ? 'sticky-top bg-light' : ''} bg-white`}>
                        <Container  >
                            <Col className=' d-flex px-lg-5 px-4 py-'>
                                <Navbar.Brand><h5 className='my-auto fw-bolder '><i>STATBOARD☀️</i></h5></Navbar.Brand>
                            </Col>
                            <Col className=' d-flex justify-content-end px-lg-5 px-4 py-'>
                                <img src="./assets/media.png" alt="" className='img-fluid rounded-circle profile' />
                            </Col>
                            <Col className='d-flex  justify-content-end d-block d-lg-none'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic"  >
                                        <i class="bi bi-list display-5 "></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/">Home</Dropdown.Item>
                                        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Plugins</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Container>
                    </Navbar>
                    <Col className=' px-lg-5 px-4 '>
                        <Row className=' d-flex  justify-content-center my-2 '>
                            <Col className='shadow   rounded-2 py-3 m-2 m-md-1 facebook d-flex justify-content-center align-content-center ' lg md={5}>
                                <i class="fa-brands fa-facebook-f text-white fs-3 "></i>
                            </Col>
                            <Col className='shadow rounded-2 py-3 m-2 m-md-1 twitter d-flex justify-content-center align-content-center ' lg md={5}>
                                <i class="fa-brands fa-twitter text-white fs-3"></i>
                            </Col>
                            <Col className='shadow rounded-2 py-3 m-2 m-md-1 linkedin d-flex justify-content-center align-content-center ' lg md={5}>
                                <i class="fa-brands fa-linkedin-in text-white fs-3"></i>
                            </Col>
                            <Col className=' shadow rounded-2 py-3 m-2 m-md-1 google d-flex justify-content-center align-content-center ' lg md={5}>
                                <i class="fa-brands fa-google-plus-g text-white fs-3"></i>
                            </Col>
                        </Row>
                    </Col>
                    <Container className='bg-white px-lg-5 px-4 '>
                        <Col className=' d-flex px-lg-2 '>
                            <Navbar.Brand><h5 className='my-auto fw-bolder  py-3'>Profile</h5></Navbar.Brand>
                        </Col>
                    </Container>
                    <Container className='px-lg-5 px-4'>
                        <Row className=' d-flex justify-content-center align-items-center m-4'>
                            <Col lg={9} className='bg-white shadow-lg rounded-5 py-3'>
                                <Col className=' d-flex px-lg-2 d-flex justify-content-center justify-content-md-start'>
                                    <Navbar.Brand><h5 className='my-auto  py-4 '>User Profile</h5></Navbar.Brand>
                                </Col>
                                <Row>
                                    <Col md={4} className='d-flex justify-content-center align-items-start mt-3 '>
                                        <img src="./assets/media.png" alt="" className='img-fluid rounded-circle profilepageimg' />
                                    </Col>
                                    <Col>
                                        <h4 className=' fw-bold text-md-start text-center'>Ajosh V Abi</h4>
                                        <h6 className=' text-black-50 text-md-start text-center'>About</h6>
                                        <p>
                                        I'm passionate developer who works with the MERN stack, which involves using MongoDB, Express.js, React.js, and Node.js. I'm skilled in both creating the visual part of websites and the behind-thescenes coding. I really enjoy making websites look great and user-friendly. I'm always learning and excited to be part of a web development team.
                                        </p>
                                        <p><i class="fa-solid fa-envelope me-2"></i>:ajoajoshvabi@gmail.com</p>
                                        <p><i class="fa-solid fa-phone me-2"></i>:+91 8089033549</p>
                                        <p><i class="fa-solid fa-globe me-2"></i>:<a href="https://ajoshvabi.netlify.app/" target='_blank'>ajoshvabi.com</a></p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
