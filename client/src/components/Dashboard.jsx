

import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import "./dashboard.css";
const COLORS = ['rgb(103, 197, 135)', 'rgb(136, 209, 161)', 'rgb(169, 222, 186)', 'rgb(201, 234, 212)', 'rgb(234, 246, 237)'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
}
const Dashboard = () => {
    const [graphData, setGraphData] = useState([]);
    const [tableData, setGraphTableData] = useState([]);
    const [piData, setGraphPiData] = useState([]);


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
                                <div className='bg-light d-flex justify-content-start align-items-center ps-4  rounded-start-4 my-auto'>
                                    <img src="./assets/Circled Menu.png" alt="" className='img-fluid' />
                                    <p className='my-auto mx-2 py-2'>Dashboard</p>
                                </div>
                            </Row>
                            <Row className='text-light ms-auto my-4'>
                                <div className='bg-black d-flex justify-content-start align-items-center ps-4 rounded-start-4 my-auto'>
                                    <img src="./assets/Support.png" alt="" className='img-fluid' />
                                    <p className='my-auto mx-2 py-2'>Support</p>
                                </div>
                            </Row>
                            <Row className='text-light ms-auto my-4'>
                                <div className='bg-black d-flex justify-content-start align-items-center ps-4  rounded-start-4 my-auto'>
                                    <img src="./assets/Puzzle.png" alt="" className='img-fluid' />
                                    <p className='my-auto mx-2 py-2'>Plugins</p>
                                </div>
                            </Row>
                            <Row className='text-light ms-auto my-4'>
                                <div className='bg-black d-flex justify-content-start align-items-center ps-4 rounded-start-4 my-auto'>
                                    <img src="./assets/Help.png" alt="" className='img-fluid' />
                                    <p className='my-auto mx-2 py-2'>Help</p>
                                </div>
                            </Row>

                        </Row>

                        <Row className='bg-light mx-auto mt-5'>
                            <div className='d-flex justify-content-center '>
                                <p className='mx-auto text-danger my-2'>Logout <img src="./assets/Shutdown.png" alt="" className='img-fluid ' /></p>
                            </div>
                        </Row>
                    </Row>
                </Col>

                <Col lg={2}></Col>

                <Col className=' px-5 py-3'>
                    <h4 className='my-3'>Good Morning</h4>
                    <Row>
                        <Col lg className='bg-light rounded-5 py-3'>
                            <LineChart width={600} height={400} data={graphData} className='mx-auto'>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="x" />
                                <YAxis dataKey="y" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="y" stroke="#8884d8" strokeWidth={2} />
                            </LineChart>
                        </Col>



                        <Col lg={4} className='bg-light rounded-5 mx-3 mx-lg-4  my-4 my-lg-0'>
                            <PieChart width={320} height={250} className=''>
                                <Pie
                                    data={piData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {piData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                            {/* <ListGroup> */}
                            <div className='m-3'>

                                {COLORS.map((color, index) => (
                                    <ListGroup.Item className='text-dark  m-1'>
                                        <span className='me-2' style={{ height: '15px', width: '15px', backgroundColor: color, borderRadius: '50%', display: 'inline-block', marginRight: '5px' }}></span>
                                        Category {index + 1}
                                    </ListGroup.Item>
                                ))}
                            </div>
                            {/* </ListGroup>     */}
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={9} className='mt-4 p-0'>
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
                        </Col>
                        <Col className='bg-light mt-4 ms-4 p-0 rounded-4 overflow-hidden'>
                            <div>
                                <img src="./assets/media.png" alt="" className='cover-image rounded-top-4' />
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
            </Row>
        </Container>
    );
};

export default Dashboard;
