import React, {useState, useEffect} from "react";

function NewsFunc() {
    const [articles, setArticles] = useState([])
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(5)
    const [filterText, setFilterText] = useState("")
    const [filterArr, setFilterArr] = useState([])
    
    useEffect(() => {
        const newsData = async () => {
            let response = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd")
            let data = await response.json()

            // set our state
            setArticles(data.articles)
            setFilterArr(data.articles)
        }
        newsData()
    }, [])
    // useEffect(() => {
    //     console.log(articles)
    // })
    const handleChange = (e) => {
        setFilterText(e.target.value)
        let filteredList = articles.filter(article => {
            return article.title.toLowerCase().includes(filterText.toLowerCase())
        })
        setFilterArr(filteredList)
    }
    return (
        <>
            <input type="text" value={filterText} onChange={handleChange} />
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <h1>{count2}</h1>
            <button onClick={() => setCount2(count2 + 1)}>Click me</button>
            <ul>
            {filterArr.map(article => {
                return <li>
                    <h3>{article.title}</h3>
                    <img src={article.urlToImage} height="150px"></img>
                    <p>{article.description}</p>
                </li>
            })}
            </ul>
        </>
    );
};

export default NewsFunc;