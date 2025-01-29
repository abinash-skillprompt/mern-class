// import React, { useState, useEffect } from 'react';
// import Card from './Card';
// import { itemList } from '../utils/itemList';
// import { itemList2 } from '../utils/constants';

// const Home = () => {
//   const productList = itemList;

//   const [productList2, setProductList2] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const data = await fetch(itemList2);
//       const json = await data.json();
//       setProductList2(json);
//       console.log(json);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleAddProduct = async () => {
//     const res = await fetch(itemList2, {
//       method: 'POST',
//       body: JSON.stringify({
//         title: 'test product',
//         price: 13.5,
//         description: 'lorem ipsum set',
//         image: 'https://i.pravatar.cc',
//         category: 'electronic',
//       }),
//     });

//     if (res.ok) {
//       alert('successfully added new product');
//     }
//   };

//   // const productList2 = itemList2;

//   return (
//     <div className="flex flex-wrap justify-items-start bg-gray-200 mx-auto  ">
//       {/* <Card
//         name="Product 1"
//         description="Great product description."
//         price={29.99}
//         rating={4}
//         imageUrl="https://img.drz.lazcdn.com/static/np/p/5ffaea76272f44eab1425845b87cfd7a.jpg_400x400q80.jpg_.webp"
//       /> */}
//       {/*
//       {productList.map((item) => (
//         <div key={item.id}>
//           <Card
//             name={item.name}
//             description={item.description}
//             price={item.price}
//             rating={item.rating}
//             imageUrl={item.imageUrl}
//             extra={item.extra}
//           />
//           <p className="m-4">copyright@daraz</p>
//         </div>
//       ))} */}

//       {/* {productList2 &&
//         productList2.map((item) => (
//           <Card
//             name={item.title}
//             description={item.description}
//             price={item.price}
//             rating={item.rating.rate}
//             imageUrl={item.image}
//           />
//         ))} */}
//       <div>
//         <button className="p-2 m-2 bg-pink-400" onClick={handleAddProduct}>
//           Add Api
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;
