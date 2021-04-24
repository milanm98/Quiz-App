import q3 from "./q3.png"

function Q3 (){
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
                      <textarea className=" w-full h-12">Enter your answer here</textarea>
                      <button className="text-center w-32 h-16 bg-green-500">Submit answer</button>
                  </div>
              </main>
    )
}

export default Q3;