import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {deleteBuild} from "../actions/builderActions"
import Fade from "react-reveal"
import Button from "react-bootstrap/Button"

const Cart = () => {
    const combos = useSelector(state => state.builderReducer.comboArr)
    const dispatch = useDispatch()
    // useEffect(() => {          // example of syntax if needed
    //     return () => {
    //         cleanup
    //     }
    // }, [])
    // console.log(combos)
    const reversedCombos = combos.map(item => item).reverse();
    // console.log(reversedCombos)
    return (
    <>
    <Fade top>
        <div className="container">
            <div className="row mx-0 pt-2 pb-5 justify-content-center">
                <img style={{width: "625px"}} src="img/kart-cart.png" />
            </div>
        </div>
    </Fade>
    <Fade bottom>
        <div className="container">
            {reversedCombos.map(combo => {
                return (
                    <>
                    <div className="row text-center justify-content-center">
                        <div className="col mb-2 justify-content-center">
                            <img key={combo.driver.id} src={`img/items/${combo.driver.img}`} />
                            <img key={combo.kart.id} src={`img/items/${combo.kart.img}`} />
                            <img key={combo.tire.id} src={`img/items/${combo.tire.img}`} />
                            <img key={combo.glider.id} src={`img/items/${combo.glider.img}`} />
                            <Button className="btn button-green text-white ms-5 me-2"><img width="150px" src="/img/expand-button.png" /></Button>
                            <Button className="btn button-red" onClick={() => dispatch(deleteBuild(combo.id))}><img width="150px" src="/img/delete-button.png" /></Button>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    </Fade>
    </>
    )
}

export default Cart