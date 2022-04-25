import { useState } from "react";


function UseHome() {
    const [input, setInput] = useState('');

    const Inputhandle = e =>{
        setInput(e.target.value);
    } 
    return (
        <div className="w-full h-[600px] flex items-center justify-center">
            <div className="w-[80%] h-full flex items-center justify-center">
                <div className="w-[90%] h-[90%] bg-slate-100 rounded-2xl p-2 flex">
                    <div className="w-[200px] h-full flex bg-stone-200 rounded-xl justify-center">
                        <input className="h-[20px] mt-3" onChange={Inputhandle} value={input}/>
                    </div>
                        <div>
                            {input}
                        </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default UseHome;  