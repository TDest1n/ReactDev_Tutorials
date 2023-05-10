import { useState } from "react";
import "./styles.css";

// function MyButton() {
//   return <button>I'm a button</button>;
// }
// function AboutPage() {
//   return (
//     <>
//       <h1>About</h1>
//       <h2>{user.name}</h2>
//       <p>
//         {" "}
//         Hello there. <br />
//         How do you do?
//       </p>
//     </>
//   );
// // }

// export default function App() {
//   return (
//     <div>
//       <h1>Welcome to my App</h1>

//       <MyButton />
//     </div>
//   );
// }

// const user = {
//   name: "Hedy Lamarr",
//   imageUrl: "htt[s: //i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={"Photo of " + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize,
//         }}
//       />
//     </>
//   );
// }

// Conditional Rendering
// let content;
// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;
// }

// return <div> {content}</div>;

// Conditional Operator

{
  /* <div>{isLoggedIn ?(  <AdminPanel /> ) : ( <LoginForm />)}</div>; */
}
// Shorter and More Logical Syntax
{
  /* <div>{isLoggedIn && <AdminPanel />}</div>; */
}

// Rendering Lists

// const products = [
//   { title: "Cabbage", isFruit: false, id: 1 },
//   { title: "Garlic", isFruit: false, id: 2 },
//   { title: "Apple", isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map((product) => (
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? "magenta" : "darkgreen",
//       }}
//     >
//       {product.title}
//     </li>
//   ));

//   return <ul>{listItems}</ul>;
// }
// Responding to events

// export default function MyButton() {
//   function handleClick() {
//     alert("You clicked Me!");
//   }

//   return <button onClick={handleClick}>Click Me</button>;
// }

// Updating the screen
