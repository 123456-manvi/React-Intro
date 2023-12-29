// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import ProductList from "./components/ProductList.js";
// import React, { useState } from "react";
// function App() {
//   let productList = [
//     {
//       price: 99999,
//       name: "IPhone 10S Max",
//       quantity: 0,
//     },
//     {
//       price: 9999,
//       name: "Redmi Note 10S Max",
//       quantity: 0,
//     },
//   ];
//   let [productList, setProductList] = useState([products]);
//   const incrementQuantity = (index) => {
//     let newProductList = [...productList];
//     newProductList[index].quantity++;
//     setProductList(newProductList);
//   };
//   return (
//     <>
//       {/* componenets */}
//       <Navbar />
//       <main className="container mt-5">
//         <ProductList
//           productList={productList}
//           incrementQuantity={incrementQuantity}
//         />
//       </main>
//       {/* <Footer /> */}
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./compoents/Footer";
import AddItem from "./compoents/AddItem.js";
function App() {
  const productList = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];
  let [pproductList, setProductList] = useState([productList]);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    // : (newProductList[index].quantity = 0);
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    console.log(newProductList);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      {/* componenets */}
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={pproductList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
    // when we have no product we use conditional rendering
  );
}

export default App;
