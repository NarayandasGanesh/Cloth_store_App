import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
// import {AiTwotoneDelete} from "react-icons/bi"
import { MdDelete } from "react-icons/md";

const Cloth = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
//   const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
//   const [gender, setGender] = useState("")

  const getData = async () => {
    let res = await axios.get("http://localhost:4500/data");
    console.log(res.data);
    setData(res.data);
  };

  const addData = async () => {
    try {
      let res = await axios.post("http://localhost:4500/adddata", {
        title,
        brand,
        price
      });
    //   setTitle(res.data);
      console.log(res.data);
      setTitle("");
      setBrand("");
    //   setAge("");
      setPrice("");
    //   setGender("")
    //   getData();
    if(Loader){
        getData()
    }else{
        <Loader/>
    }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async(id) => {
    try {
        let res = await axios.delete(`http://localhost:4500/deleteuser/${id}`)
        console.log(res.data)
        alert(res.data)
        console.log("Hiii")
        getData()
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <div>
          {/* <span>Image</span>{" "} */}
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="brand"
            placeholder="Enter brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            type="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          /> */}
          {/* <input type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          /> */}
          <button onClick={() => addData()}>Add</button>
        </div>
      </div>
      <div>
        {data.map((data) => (
          <div key={data._id}>
            <h3>{data.title}</h3>
            <p>{data.brand}</p>
            <p>{data.price}</p>
            <p>{data.gender}</p>
            <p>{data.age}</p>
            <div>
            <MdDelete onClick={() => handleDelete(data._id)}/>
            </div>
          </div>
        ))}
      </div>
      {/* <AiTwotoneDelete/> */}
      
    </>
  );
};

export default Cloth;
