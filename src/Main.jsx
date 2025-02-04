

import React, { useEffect, useState } from 'react';
import data from './res.json';
import { useSelector } from 'react-redux';

export default function Main() {
  const page= useSelector(state=>state.pageNum)
  const [val,setVal] = useState()

  useEffect(() => {
    switch(page) {
      case 1:
        setVal(0);
        break;
      case 2:
        setVal(3);
        break;
      case 3:
        setVal(6);
        break;
      case 4:
        setVal(9);
        break;
      case 5:
        setVal(12);
        break;
      case 6:
        setVal(15);
        break;
      default:
        setVal(0); // Default case
        break;
    }
  }, [page]);  

  const paginatedData = data.slice(val, val + 3);
  return (
    <div
      style={{
        background: "#6A5ACD",
        marginTop: "30px",
        padding: "20px",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "70vh",
      }}
    >
      
      <div style={{ width: "80%", maxWidth: "1200px" }}>
        {paginatedData.length > 0 ? (

          paginatedData.map((dataa, index) => {
           

           
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  marginBottom: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease",
                  
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: "bold", color: "#333" }}>
                  <span style={{ marginRight: "5px" }}>{val + index}.</span>
                  {dataa.title}
                </div>
                <p
                  style={{
                    fontFamily: "serif",
                    fontSize: "18px",
                    marginTop: "10px",
                    color: "#555",
                    marginLeft: "5px",
                  }}
                >
                  ~{dataa.author}
                </p>
              </div>
            ) ;
          })
        ) : (
          <p style={{ fontSize: "18px", color: "#ddd",textAlign:"center"}}>No blog posts available.</p>
        )}
      </div>
    </div>
  );
}
