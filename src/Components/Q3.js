import q3 from "./q3.png"
import { useState} from 'react';
function Q3 (){

    const[answer, setAnswer] = useState("");
    const[count, setCount] = useState(1);

    const handleChange = (e) => {
       setAnswer(e.target.value);
    }

    const handleClick = () => {
        if(answer === "Greska" || answer === "greska"){
            alert("Odlicno, predji na sledece pitanje");
        }
        else{
            if(count == 4){
                alert("Promasili ste 3 puta, tacan odgovor je GRESKA, zbog velikog slova C prilikom pisanja kljucne reci class");
                }
            else{
                alert("Netacno ! Probaj opet");
                setCount(count+1);
            }
        }
    }

    return(
      <main className="w-5/6 float-right h-screen center">
                  <div className="title text-5xl w-full text-center font-black bg-white">
                      <h1>What is the output ? </h1>
                  </div>
                  <div className="content text-center">
                       <img className=""
                       src={q3} alt="q1">
                       </img>
                  </div>
                  <div className="result w-full">
                      <input onChange={handleChange} value={answer} placeholder="Enter your answer here" className=" w-full h-12"></input>
                      <button onClick={handleClick} className="text-center w-32 h-16 bg-green-500">Submit answer</button>
                  </div>
              </main>
    )
}

export default Q3;