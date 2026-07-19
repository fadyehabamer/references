import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {

  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [result, setResult] = useState([]);


  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  },[term])



  useEffect(() => {
    const search = async () => {
      const data = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm

        }
      })
      setResult(data.data.query.search);
    }
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm])



  if (!result.length) {
    
  }else{
    const displayResult = result.map((item, idx) => {
      return (
        <tr key={item.pageid}>
          <th scope='row' > {idx + 1} </th>
          <td>{item.title}</td>
          <td> <span dangerouslySetInnerHTML={{ "__html": item.snippet }} />  </td>
        </tr>
      )
    })
  }
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='my-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Search Input
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Title</th>
                <th scope='col'>Describtion</th>
              </tr>
            </thead>
            <tbody>
              {displayResult ? displayResult  : <tr> NO Data Yet </tr> }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
