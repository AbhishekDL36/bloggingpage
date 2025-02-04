// import React from 'react'
// import data from './res.json'
// export default function Main() {
// console.log(data)

//   return (
//     <div style={{background:"#6A5ACD" ,marginTop:"30px", display:'flex',height:"400px",justifyContent:"center",alignItems:"center"}}>
//   <div style={{color:"white" , fontSize:"30px", fontFamily:"cursive"}}>
//   {
//         data.length>0?
        
//         data.map((dataa, index)=>{
//           return <div>
//            <span style={{marginRight:"5px"}}>{index +1}.</span>      
//            <span key={index}>{dataa.title}</ span>
//            <p style={{marginLeft:"450px", fontFamily:"serif", fontSize:"18px"}}>~{dataa.author}</p>
//           </div>
 
//         }): <p>no blog</p>

//       }
//     </div>    
//     </div>
//   )
// }


import React from 'react';
import data from './res.json';

export default function Main() {
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
        {data.length > 0 ? (
          data.map((dataa, index) => {
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
                  <span style={{ marginRight: "5px" }}>{index + 1}.</span>
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
            );
          })
        ) : (
          <p style={{ fontSize: "18px", color: "#ddd" }}>No blog posts available.</p>
        )}
      </div>
    </div>
  );
}
