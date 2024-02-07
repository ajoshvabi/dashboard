

import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row, Table, Dropdown, Navbar } from "react-bootstrap";
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";
import { GridLoader } from 'react-spinners';

import "./dashboard.css";
const COLORS = [
    { color: 'rgb(103, 197, 135)', letter: 'A' },
    { color: 'rgb(136, 209, 161)', letter: 'B' },
    { color: 'rgb(169, 222, 186)', letter: 'C' },
    { color: 'rgb(201, 234, 212)', letter: 'D' },
    { color: 'rgb(234, 246, 237)', letter: 'E' }
];

const Dashboard = () => {
    const [graphData, setGraphData] = useState([]);
    const [tableData, setGraphTableData] = useState([]);
    const [piData, setGraphPiData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, [])
    const graph = async () => {
        try {
            const response = await fetch('/api/graph');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setGraphData(data);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };


    const table = async () => {
        try {
            const response = await fetch('/api/table');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setGraphTableData(data);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };


    const chart = async () => {
        try {
            const response = await fetch('/api/pie-chart');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setGraphPiData(data);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    useEffect(() => {
        graph();
        table();
        chart();
    }, []);

    return (
        <>
            {loading ? (
                <Container fluid className='loader bg-light d-flex justify-content-center align-items-center'>

                    <div className="sweet-loading  ">
                        <GridLoader color="#36d7b7" />
                    </div>
                </Container>
            ) : (
                <Container fluid className=' containerstyle' >
                    <Row>
                        <Col lg={2} className='bg-dark d-flex justify-content-center position-fixed h-100 d-block d-none d-lg-block'>
                            <Row className=''>
                                <Row className='ms-auto '>
                                    <Row className='text-dark ms-auto mt-5 pe-5 '>
                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                            <img src="./assets/Briefcase.png" alt="" className='img-fluid my-2 p-2' />
                                            <img src="./assets/statBoard.png" alt="" className='img-fluid' />
                                        </div>
                                    </Row>
                                    <Link to='/' className=' text-decoration-none text-dark'>
                                        <Row className='text-drak ms-auto my-4'>
                                            <div className='bg-light d-flex justify-content-start align-items-center ps-4  rounded-start-4 my-auto'>
                                                <img src="./assets/menu.png" alt="" className='img-fluid' />
                                                <p className='my-auto mx-2 py-2'>Dashboard</p>
                                            </div>
                                        </Row>
                                    </Link>
                                    <Link to='/profile' className=' text-decoration-none text-dark'>
                                        <Row className='text-light ms-auto my-4'>
                                            <div className='bg-black d-flex justify-content-start align-items-center ps-4 rounded-start-4 my-auto'>
                                                <img src="./assets/Support.png" alt="" className='img-fluid' />
                                                <p className='my-auto mx-2 py-2'>Profile</p>
                                            </div>
                                        </Row>
                                    </Link>
                                    <Link to='/gallery' className=' text-decoration-none text-dark'>
                                        <Row className='text-light ms-auto my-4'>
                                            <div className='bg-black d-flex justify-content-start align-items-center ps-4  rounded-start-4 my-auto'>
                                                <img src="./assets/Puzzle.png" alt="" className='img-fluid' />
                                                <p className='my-auto mx-2 py-2'>Gallery</p>
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
                                        {/* <img src="./assets/statBoard.png" alt="" className='img-fluid my-2' /> */}
                                    </Col>
                                    <Col className=' d-flex justify-content-end px-lg-5 px-4 py-'>
                                        <Link to='/profile' className=' text-decoration-none '>
                                            <span className=' my-auto me-1 text-black fw-semibold  '>Admin</span><img src="./assets/media.png" alt="" className='img-fluid rounded-circle profile' />
                                        </Link>
                                    </Col>
                                    <Col className='d-flex  justify-content-end d-block d-lg-none'>
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic"  >
                                                <i class="bi bi-list display-5 "></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/">Home</Dropdown.Item>
                                                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                                <Dropdown.Item href="/gallery">Gallery</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Container>
                            </Navbar>
                            <Col className=' px-lg-5 px-4 '>
                                <Row className=' d-flex  justify-content-center my-2 '>
                                    <Col className='shadow   rounded-2 py-3 m-2 m-md-1 facebook d-flex justify-content-center align-content-center ' lg xs={5}>
                                        <i class="fa-brands fa-facebook-f text-white fs-3 "></i>
                                    </Col>
                                    <Col className='shadow rounded-2 py-3 m-2 m-md-1 twitter d-flex justify-content-center align-content-center ' lg xs={5}>
                                        <i class="fa-brands fa-twitter text-white fs-3"></i>
                                    </Col>
                                    <Col className='shadow rounded-2 py-3 m-2 m-md-1 linkedin d-flex justify-content-center align-content-center ' lg xs={5}>
                                        <i class="fa-brands fa-linkedin-in text-white fs-3"></i>
                                    </Col>
                                    <Col className=' shadow rounded-2 py-3 m-2 m-md-1 google d-flex justify-content-center align-content-center ' lg xs={5}>
                                        <i class="fa-brands fa-google-plus-g text-white fs-3"></i>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg className='bg-light rounded-4 py-3 m-2 shadow '>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart height={500} width={220} data={graphData} className='mx-auto'>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="x" />
                                                <YAxis dataKey="y" />
                                                <Tooltip />
                                                <Legend />
                                                <Line type="monotone" dataKey="y" stroke="#8884d8" strokeWidth={2} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </Col>
                                    <Col lg={4} className='bg-light rounded-4 py-3 m-2 shadow'>
                                        <div className='d-flex  justify-content-center '>
                                            <PieChart width={320} height={220} className=''>
                                                <Pie
                                                    data={piData}
                                                    cx="50%"
                                                    cy="50%"
                                                    labelLine={false}
                                                    outerRadius={100}
                                                    fill="#8884d8"
                                                    dataKey="value"
                                                >
                                                    {piData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length].color} />
                                                    ))}
                                                </Pie>
                                            </PieChart>
                                        </div>
                                        <div className='d-flex  justify-content-lg-start justify-content-center'>
                                            <div className='m-3 '>
                                                {COLORS.map((colorObj, index) => (
                                                    <ListGroup.Item className='text-dark  m-1'>
                                                        <span className='me-2' style={{ height: '15px', width: '15px', backgroundColor: colorObj.color, borderRadius: '50%', display: 'inline-block', marginRight: '5px' }}></span>
                                                        Category {colorObj.letter}
                                                    </ListGroup.Item>
                                                ))}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={9} className='bg-light rounded-4 py-3 m-2 shadow'>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableData.map((user, index) => (
                                                    <tr>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.quantity}</td>
                                                        <td>{user.price}</td>
                                                    </tr>))}
                                            </tbody>
                                        </Table>
                                        <Row className=' d-flex justify-content-center align-items-center  '>
                                            <Col className='' xs={6}>
                                                <Row>
                                                    <Col className='btn btn-secondary border-2 mx-1 bg-secondary p-1 d-flex justify-content-center'><i class="fa-solid fa-chevron-left my-auto text-light "></i></Col>
                                                    <Col className=' border-2 mx-1 border  border-secondary bg-light px-1 d-flex justify-content-center  '>1</Col>
                                                    <Col className=' border-2 mx-1 bg-white border px-1 d-flex justify-content-center'>2</Col>
                                                    <Col className=' border-2 mx-1 bg-white border px-1 d-flex justify-content-center'>...</Col>
                                                    <Col className=' border-2 mx-1 bg-white border px-1 d-flex justify-content-center'>9</Col>
                                                    <Col className=' border-2 mx-1 bg-white border px-1 d-flex justify-content-center'>10</Col>
                                                    <Col className='btn btn-secondary border-2 mx-1 bg-secondary border p-1 d-flex justify-content-center'><i class="fa-solid fa-chevron-right text-light my-auto "></i></Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className='bg-light rounded-4 py-3 m-2 shadow'>
                                        <div>
                                            <img src="./assets/media.png" alt="" className='cover-image img-fluid  rounded-4' />
                                            <div className="text-center">
                                                <p className='fw-bold mt-2 m-0'>John Dom</p>
                                                <p className='fw-semibold text-black-50'>Ceo</p>
                                            </div>
                                        </div>
                                        <div className=' d-flex justify-content-evenly mx-5 mb-3 mt-0 '>
                                            <img src="./assets/facebook.png" alt="" className='img-fluid' />
                                            <img src="./assets/instagram.png" alt="" className='img-fluid' />
                                            <img src="./assets/twitter.png" alt="" className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default Dashboard;
