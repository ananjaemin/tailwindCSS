import { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../component/ToDo";
import { add } from "./store";

function UseHome({toDos,addToDo}) {
    const [input, setInput] = useState('');
    const Inputhandle = e =>{
        setInput(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        addToDo(input);
        setInput('');
    }

    return (
        <div className="w-full h-[600px] flex items-center justify-center">
            <div className="w-[80%] h-full flex items-center justify-center">
                <div className="w-[90%] h-[90%] bg-slate-100 rounded-2xl p-2 flex">
                    <form onSubmit={onSubmit} className="w-[200px] h-full flex bg-stone-200 rounded-xl items-center flex-col">
                        <input className="w-[150px] h-[20px] mt-3" type="text" value={input} onChange={Inputhandle} />
                        <button>Add</button>
                    </form>
                        <div className="flex flex-col ml-2 w-[60%]">
                            {toDos.map(toDo => (
                                <ToDo {...toDo} key={toDo.id}/>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    );
  }
  
function mapStateToProps(state){
    return { toDos: state };
};

function mapDispatchToProps(dispatch) {
    return {
      addToDo: text => dispatch(add(text))
    };
}

  export default connect(mapStateToProps,mapDispatchToProps)(UseHome);  

