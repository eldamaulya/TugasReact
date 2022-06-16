import React, { useState } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import Input from "./components/Input";
import LIstItem from "./components/LIstItem";

const App = () => {
  const [taskList, setTaskList] = useState({
    data: [],
  });
  const [isBool, setIsBool] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("");
  const [indexVal, setIndexVal] = useState(0);

  const actionAddTask = () => {
    if (newTaskValue.trim() === "") {
      return false;
    }
    if (isBool) {
      let dataUpdate = newTaskValue;
      let dataNew = [];
      for (let i = 0; i < taskList.data.length; i++) {
        if (i === indexVal) {
          dataNew.push(dataUpdate);
        } else {
          dataNew.push(taskList.data[i]);
        }
      }
      setTaskList({ data: dataNew });
      setIsBool(false);
    } else {
      const newData = taskList.data;
      newData.push(newTaskValue);
      setTaskList({ data: newData });
      setNewTaskValue("");
    }
  };

  const actionUpdateTask = (event) => {
    setIsBool(true);
    setIndexVal(event);
    setNewTaskValue(taskList.data[event]);
  };

  const actionDeleteTask = (event) => {
    let dataNew = [];
    for (let i = 0; i < taskList.data.length; i++) {
      if (i !== indexVal) {
        dataNew.push(taskList.data[i]);
      }
      setTaskList({ data: dataNew });
    }
  };

  return (
    <div class="">
      <div class="bg-[#6D8B74]/[1] text-center text-bold border-radius">
        <h1 class="p-10 text-2xl font-bold text-white">Selamat Datang di aplikasi TodoList</h1>
      </div>
      <div className="bg-[#5F7161]/[1] h-screen shadow-lg max-w-3xl p-3 w-3/6 float-left ">
        <Title class="text-white" title="Tambahkan Todo List" />
        <Input
          placeholder="Silahkan Inputkan Todo Disini !"
          value={newTaskValue}
          onChange={(event) => setNewTaskValue(event.target.value)}
        />
        <Button text={isBool ? "update" : "Add Task"} onClick={actionAddTask} />
      </div>
      <div class="float-right w-3/6 h-screen bg-[#5F7161]/[1]  " >
        
        <ul>
        
          {taskList.data.map((item, index) => (
            <LIstItem
              name={item}
              update={() => actionUpdateTask(index)}
              delete={() => actionDeleteTask(index)}
            />
          ))}
        </ul>
      </div>
      <footer class="bg-[#6D8B74]/[1] text-center absolute inset-x-0 bottom-0">
        <p class="text-white p-2">Elda Qotul Maulya | SEAL 2022</p>
      </footer>

    </div>
  );
};

export default App;
