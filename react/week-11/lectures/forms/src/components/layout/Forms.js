import React, {useState, useEffect} from "react"

function Forms() {
    const [textValue, setTextValue] = useState("")
    const [isValid, setIsValid] = useState(false)
    const [selectValue, setSelectValue] = useState("Atlanta")
    const handleSubmit = (e) => {
        e.preventDefault();
        let formObj = {
            textValue,
            isValid,
            selectValue
        }
        console.log(formObj)
    }
    return (
        <>
            {textValue}<br />
            {isValid ? "True" : "False"}<br />
            {selectValue}
            <form onSubmit={handleSubmit}>
                <input type="text" value={textValue} onChange={(e) => setTextValue(e.target.value)}/>
                <input type="checkbox" checked={isValid}  onChange={(e) => setIsValid(e.target.checked)}/>
                <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                    <option value="Houston">Houston</option>
                    <option value="Atlanta">Atlanta</option>
                    <option value="Seattle">Seattle</option>
                    <option value="Chicago">Chicago</option>
                    <option value="NewYork">New York</option>
                </select>
                <input type="submit" />
            </form>
        </>
    );
}

export default Forms;
