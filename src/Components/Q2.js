import q2 from "./q2.png"
import {useState} from 'react';

function Q2 (){

     const[answer, setAnswer] = useState("");
                const[count, setCount] = useState(1);

                const handleChange = (e) => {
                   setAnswer(e.target.value);
                }

                const handleClick = () => {
                    if(answer === "Nista" || answer === "nista"){
                        alert("Odlicno, predji na sledece pitanje");
                    }
                    else{
                        if(count === 4){
                            alert("Promasili ste 3 puta, tacan odgovor je NISTA, jer nemamo nigde Console.WriteLine()");
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
                           src={q2} alt="q1">
                           </img>
                      </div>
                        <div className="result w-full">
                            <input onChange={handleChange} value={answer} placeholder="Enter your answer here" className="text-center text-2xl  w-full h-12"></input>
                            <button onClick={handleClick} className="text-center w-32 h-16 bg-green-200">Submit answer</button>
                  </div>
                  </main>
    )
}

export default Q2;