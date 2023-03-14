import React, { useState } from "react";
import { useEffect } from "react";
import Display from "./components/Display";
import Inputs from "./components/Inputs";
import api from "./api/datas";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactDetails from "./components/ContactDetails";
import EditInput from "./components/EditInput";

function App() {
  const [datas, setdatas] = useState([]);
  const restoreHandler = async () => {
    const response = await api.get("./datas");
    return response.data;
  };
  const addInputHandler = async (data) => {
    setdatas([...datas, { id: parseInt(Math.random()), ...data }]);
    const request = {
      id: parseInt(Math.random()),
      ...data,
    };
    const response = await api.post("/datas", request);
    setdatas([...datas, response.data]);
  };

  const updateDataHandler = async (data) => {
    await api.put(`/datas/${data?.id}`, data);
    let existingItems = [...datas]; //[0,12,4]=6
    const index = existingItems.findIndex((i) => i.id === data?.id);
    existingItems.splice(index, 1);
    existingItems.splice(index, 0, data);
    setdatas(existingItems);
  };

  const removeDatasHandler = async (id) => {
    await api.delete(`/datas/${id}`);
    const newdataList = datas.filter((data) => {
      return data.id !== id;
    });
    setdatas(newdataList);
  };
  useEffect(() => {
    const getAllDatas = async () => {
      const allDatas = await restoreHandler();
      if (allDatas) setdatas(allDatas);
    };
    getAllDatas();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<Inputs addInputHandler={addInputHandler} />}
          />
          <Route
            path="/edit"
            element={<EditInput updateDataHandler={updateDataHandler} />}
          />
          <Route
            path="/"
            element={<Display datas={datas} deletedata={removeDatasHandler} />}
          />
          <Route path="/data/:id" element={<ContactDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
