import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {loadInit, updateDriver, updateKart, updateTire, updateGlider} from "../actions/builderActions"
import "chart.js/auto"
import {Chart} from "react-chartjs-2"
import MKData from "../assets/MK8-data.js"
import Fade from "react-reveal/Fade"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const Builder = () => {
    const [formDriver, setFormDriver] = useState(41)
    const [formKart, setFormKart] = useState(1)
    const [formTire, setFormTire] = useState(84)
    const [formGlider, setFormGlider] = useState(105)
    const driverState = useSelector(state => state.builderReducer.driver)
    const kartState = useSelector(state => state.builderReducer.kart)
    const tireState = useSelector(state => state.builderReducer.tire)
    const gliderState = useSelector(state => state.builderReducer.glider)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadInit())
    }, [])
    const karts = MKData.filter(item => item.type === "kart")
    const drivers = MKData.filter(item => item.type === "driver")
    const tires = MKData.filter(item => item.type === "tire")
    const gliders = MKData.filter(item => item.type === "glider")

    return (
    <>
        <div>
            <Fade top>
                <div className="container">
                <div className="row mx-0">
                    <div className="col d-flex justify-content-center">
                    <Form className="text-center">
                        <div>
                            <img src={`img/items/${driverState.img}`} />
                        </div>
                        <div>
                        <Form.Select style={{width: "200px"}} className="bg-dark mt-1 text-center text-white" name="drivers" id="drivers" value={formDriver} onChange={(e) => setFormDriver(e.target.value)}>
                            {drivers.map(driver => {
                                return <option key={driver.id} value={driver.id}>{driver.name}</option>
                            })}
                        </Form.Select>
                        <Button className="btn btn-primary mt-2 text-white" type="button" value="submit" onClick={() => dispatch(updateDriver(parseInt(formDriver)))}>Update Driver</Button>
                        </div>
                    </Form>
                    </div>
                    <div className="col d-flex justify-content-center">
                    <Form className="text-center">
                        <div>
                            <img src={`img/items/${kartState.img}`} />
                        </div>
                        <div>
                        <Form.Select className="bg-dark mt-1 text-center text-white" name="karts" id="karts" value={formKart} onChange={(e) => setFormKart(e.target.value)}>
                            {karts.map(kart => {
                                return <option key={kart.id} value={kart.id}>{kart.name}</option>
                            })}
                        </Form.Select>
                        <Button className="btn btn-success mt-2 text-white" type="button" value="submit" onClick={() => dispatch(updateKart(parseInt(formKart)))}>Update Body</Button>
                        </div>
                    </Form>
                    </div>
                    <div className="col d-flex justify-content-center">
                    <Form className="text-center">
                        <div>
                            <img src={`img/items/${tireState.img}`} />
                        </div>
                        <div>
                        <Form.Select className="bg-dark mt-1 text-center text-white" name="tires" id="tires" value={formTire} onChange={(e) => setFormTire(e.target.value)}>
                            {tires.map(tire => {
                                return <option key={tire.id} value={tire.id}>{tire.name}</option>
                            })}
                        </Form.Select>
                        <Button className="btn btn-warning mt-2 text-white" type="button" value="submit" onClick={() => dispatch(updateTire(parseInt(formTire)))}>Update Tire</Button>
                        </div>
                    </Form>
                    </div>
                    <div className="col d-flex justify-content-center">
                    <Form className="text-center">
                        <div>
                            <img src={`img/items/${gliderState.img}`} />
                        </div>
                        <div>
                        <Form.Select className="bg-dark mt-1 text-center text-white" name="gliders" id="gliders" value={formGlider} onChange={(e) => setFormGlider(e.target.value)}>
                            {gliders.map(glider => {
                                return <option key={glider.id} value={glider.id}>{glider.name}</option>
                            })}
                        </Form.Select>
                        <Button className="btn btn-danger mt-2 text-white" type="button" value="submit" onClick={() => dispatch(updateGlider(parseInt(formGlider)))}>Update Glider</Button>
                        </div>
                    </Form>
                    </div>
                </div>
                </div>
            </Fade>
        </div>
        <div className="container">
        <Fade>
        <Chart 
            type="bar"
            data={{
                labels: ["Weight", "Acceleration", "On-Road Traction", "Off-Road Traction", "Mini-Turbo", "Ground Speed", "Water Speed", "Anti-Gravity Speed", "Air Speed", "Ground Handling", "Water Handling", "Anti-Gravity Handling", "Air Handling"],
                datasets: [
                    {
                        label: "Driver",
                        data: [driverState.wg, driverState.ac, driverState.on, driverState.of, driverState.mt, driverState.sl, driverState.sw, driverState.sa, driverState.sg, driverState.tl, driverState.tw, driverState.ta, driverState.tg],
                        backgroundColor: [
                            'rgba(0, 70, 240, 0.8)',
                        ],
                        borderColor: [
                            'rgba(0, 70, 240, 1)',
                        ],
                        borderWidth: 1
                    },
                    {
                        label: "Body",
                        data: [kartState.wg, kartState.ac, kartState.on, kartState.of, kartState.mt, kartState.sl, kartState.sw, kartState.sa, kartState.sg, kartState.tl, kartState.tw, kartState.ta, kartState.tg],
                        backgroundColor: [
                            'rgba(10, 191, 2, 0.8)',
                        ],
                        borderColor: [
                            'rgba(10, 191, 2, 1)',
                        ],
                        borderWidth: 1
                    },
                    {
                        label: "Tire",
                        data: [tireState.wg, tireState.ac, tireState.on, tireState.of, tireState.mt, tireState.sl, tireState.sw, tireState.sa, tireState.sg, tireState.tl, tireState.tw, tireState.ta, tireState.tg],
                        backgroundColor: [
                            'rgba(255, 245, 16, 0.8)',
                        ],
                        borderColor: [
                            'rgba(255, 245, 16, 1)',
                        ],
                        borderWidth: 1
                    },
                    {
                        label: "Glider",
                        data: [gliderState.wg, gliderState.ac, gliderState.on, gliderState.of, gliderState.mt, gliderState.sl, gliderState.sw, gliderState.sa, gliderState.sg, gliderState.tl, gliderState.tw, gliderState.ta, gliderState.tg],
                        backgroundColor: [
                            'rgba(254, 56, 55, 0.8)',
                        ],
                        borderColor: [
                            'rgba(254, 56, 55, 1)',
                        ],
                        borderWidth: 1
                    }
                ]
            }}
            height={45}
            width={100}
            options={{
                // indexAxis: "y",
                maintainAspectRatio: true,
                layout: {
                    // padding: 20
                },
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        reverse: false,
                        labels: {
                            color: 'rgba(255, 255, 255)',
                            boxHeight: 25,
                            padding: 30
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            color: 'rgba(255, 255, 255)'
                        }
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            color: 'rgba(255, 255, 255)'
                        }
                    }
                }
            }}
        />
        </Fade>
        </div>
    </>
    )
}

export default Builder