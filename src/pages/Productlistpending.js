import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom";
import { getArticles } from "../state/api";
const columns = [
  {
    title: "SNo",
    dataIndex: "codart",
  },
  {
    title: "Title",
    dataIndex: "desart",
    
  },

  {
    title: "Quantity",
    dataIndex: "stkfin",

  },

  {
    title: "Price",
    dataIndex: "PURNTTC",

  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Productlistpendding = () => {
const[ productState , setProductState] = useState()
  useEffect(() => {
    const loadUserDetails = async() => {
        const response = await    getArticles();;
        setProductState(response.data)

    }
    loadUserDetails();

  }, []);

  const data1 = [];
  for (let i = 0; i < productState?.length; i++) {
    data1.push({
        codart: productState[i].codart ,
        desart: productState[i].desart,
        stkfin: productState[i].stkfin,
   
        PURNTTC: productState[i].PURNTTC,

      action: (
        <>
          <Link to={`/admin/product/${productState[i].codart}/${productState[i].desart}/${productState[i].stkfin}/${productState[i].PURNTTC}`} className=" fs-3 text-danger">
            <BiEdit />
          </Link>
       
        </>
      ),
    });
  }
  console.log(data1);
  return (
    <div>
      <h3 className="mb-4 title">Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Productlistpendding;