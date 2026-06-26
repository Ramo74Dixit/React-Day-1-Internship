import React, { useState } from "react";
const products = [
  {
    id: 1,
    title: "iphone15",
    category: "Smartphone",
    rating: 4.8,
    stock: 15,
    image:
      "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1759733968&width=1445",
    description: "Latest Iphone ",
    quantiy:0
  },
  {
    id: 2,
    title: "macbook air",
    category: "Laptop",
    rating: 4.9,
    stock: 10,
    image:
      "https://www.apple.com/v/macbook-air/z/images/meta/macbook_air_mx__ez5y0k5yy7au_og.png?202605072050",
    description: "Latest Macbook Air M5",
    quantiy:0
  },
  {
    id: 3,
    title: "washing machine",
    category: "Electric",
    rating: 4.5,
    stock: 25,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnTWZwhJjnxavD4afNpyT3hcGrPR99MwH4Q&s",
    description: "Washing Machine with Great Features",
    quantiy:0
  },
  {
    id: 4,
    title: "notebook",
    category: "Book",
    rating: 4.1,
    stock: 35,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/059/953/088/small/blue-pen-rests-on-neutral-notebook-isolated-on-white-background-photo.jpg",
    description: "notebook with great paper",
    quantiy:0
  },
  {
    id: 5,
    title: "tshirt",
    category: "Clothes",
    rating: 3.8,
    stock: 45,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6JXA-II3rXMJZxRq89DLqxBRpTWxdP1YZQ&s",
    description: "Oversized Tshirt",
    quantiy:0
  },
  {
    id: 6,
    title: "shoes",
    category: "Shoe",
    rating: 3.6,
    stock: 75,
    image: "https://m.media-amazon.com/images/I/71f3BmjCwtL._AC_UY1000_.jpg",
    description: "Laterst Iphone ",
    quantiy:0
  },
  {
    id: 7,
    title: "jeans",
    category: "Clothes",
    rating: 3.2,
    stock: 105,
    image:
      "https://t3.ftcdn.net/jpg/04/83/25/50/360_F_483255019_m1r1ujM8EOkr8PamCHF85tQ0rHG3Fiqz.jpg",
    description: "Jeans for young professionals",
    quantiy:0
  },
  {
    id: 8,
    title: "table",
    category: "homeApplicance",
    rating: 4.2,
    stock: 115,
    image:
      "hhttps://static.vecteezy.com/system/resources/previews/005/197/942/non_2x/table-clipart-free-vector.jpg",
    description: "Table for family use ",
    quantiy:0
  },
  {
    id: 9,
    title: "fan",
    category: "Electric",
    rating: 4.0,
    stock: 130,
    image:
      "https://t3.ftcdn.net/jpg/13/73/69/64/360_F_1373696423_sDxMN1VGRS3xmLQtRcKDKJ5wSBULn8yb.jpg",
    description: "Fan with zero noise ",
    quantiy:0
  },
  {
    id: 10,
    title: "kurta",
    category: "Clothes",
    rating: 3.6,
    stock: 123,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ABunmxCCHY3DYL2hGYptL_ZHhKNzJM46Jg&s",
    description: "Light weight kurta ",
    quantiy:0
  },
  {
    id: 11,
    title: "led light",
    category: "Electric",
    rating: 3.1,
    stock: 45,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9vy9E0rlTbQob1ZsvA20xCTsFPoS2Jjriqw&s5",
    description: "Led light with zero emission ",
    quantiy:0
  },
  {
    id: 12,
    title: "Smart Cycle",
    category: "vehicle",
    rating: 2.8,
    stock: 52,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/6/HL/OZ/VB/62847588/electric-bicycle.png",
    description: "Smartest Cycle ",
    quantiy:0
  },
];

const MainLoanding = ({cart,setCart}) => {
     const [productList,setproductList]= useState(products);
     function increaseQuantiy(id){
        const updatedProducts= productList.map((product)=>{
            if(product.id === id && product.quantiy < product.stock){
                return {...product,quantiy:product.quantiy+1
                };
            }
            return product;
        }
    );
    setproductList(updatedProducts);
     }
    function addToCart(product){
         setCart([...cart,product]);
    }
  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "40px",
        background: "#f4f7fb",
        minHeight: "100vh",
      }}
    >
      {productList.map((product) => (
        <div
          key={product.id}
          style={{
            width: "320px",
            background: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            transition: "0.3s ease",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "220px",
              overflow: "hidden",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <span
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {product.category}
            </span>
          </div>

          <div style={{ padding: "20px" }}>
            <h2
              style={{
                textTransform: "capitalize",
                marginBottom: "10px",
                color: "#222",
                fontSize: "22px",
              }}
            >
              {product.title}
            </h2>

            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
                minHeight: "50px",
                marginBottom: "15px",
              }}
            >
              {product.description}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "18px",
                fontWeight: "600",
                color: "#444",
              }}
            >
              <span>⭐ {product.rating}</span>
              <span>📦 {product.stock}</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "12px 0",
                padding: "10px",
                background: "#f8f9ff",
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
              }}
            >
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#374151",
                }}
              >
                Quantity: <span style={{ color: "#667eea" }}>{product.quantiy}</span>
              </span>

              <button
                style={{
                  width: "35px",
                  height: "35px",
                  border: "none",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 4px 10px rgba(102,126,234,0.3)",
                }}
                onClick={()=>increaseQuantiy(product.id)}
              >
                ➕
              </button>
            </div>
            <button
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 5px 15px rgba(102,126,234,0.3)",
              }}
               onClick={()=>addToCart(product)}
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainLoanding;
