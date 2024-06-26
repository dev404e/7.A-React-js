// ----------------react patties(1)-------------------

// --import component--

// import Header from './component/header';
// import Hero from './component/Hero';
// import ContactForm from './component/ContactForm';
// import Footer from './component/Footer';


//  const App = () => {
//   return (
//     <div>
//       {/* --call component-- */}
// <Header/>
// <Hero/>
// <ContactForm/>
// <Footer/>
//     </div>
//   );
//  };

//  export default App;


// ------------------react patties(2)------------------

// const App = () => {
//   return (
//     <div>
//       {/* alert */}
//  <button onClick={()=>alert('hello')}>Submit</button>
//  {/*inline css  */}
//  <h1 style={{color:'red'}}>--submit--</h1>
//     </div>
//   );
// };

// export default App;



// ------------------react patties(3)------------------
 // ------if else------

//  let marks=90;
// const App = () => {
//   return (
//     <div>
//       {
//  marks>80?
//   <h1>brilliant Result</h1>
//   :
//   <h1>Averages Result</h1>
// }
//     </div>
//   );
// };

// export default App;

// --------------------react patties(4)---------------------
// --iif function--

// const App = () => {
//   let marks=90;
//   return (
//     <div>

// {(
//   ()=>{

// if(marks>80 && marks<100){
// return  <h1>A+</h1>
// }

// else if(marks>=70 && marks<80){
// return  <h1>A</h1>
// }

// else if(marks>=60 && marks<70){
// return  <h1>A-</h1>
// }

// else if(marks>=50 && marks<60){
// return  <h1>B</h1>
// }

// else if(marks>=40 && marks<50){
// return  <h1>c</h1>
// }
// else{
//   return <h1>Fall korsies mama</h1>
// }

// }

// )()}

//     </div>
//   );
// };

// export default App;



// --------------------react patties(5)---------------------

//---props---(with function)---

// import Hero1 from "./component/Hero1";

// const App = () => {

//   const BtnClick=()=>{
//   alert("react kotin mama ");
//   }

//   return (
//     <div>
//     <Hero1 BtnClick={BtnClick}/>
//     </div>
//   );
// };

// export default App;

// --------------------react patties(6)---------------------
// ---react events---

// import React from 'react';

// const App = () => {
//     return (
//         <div>
// <button onClick={()=>{alert('click me')}}>submit</button>
//         </div>
//     );
// };

// export default App;

// --------------------react patties(7)---------------------
// ---react form---
// import React from 'react';

// -----event.preventDefault function call----

// const postFormData=(event)=>{
// event.preventDefault();

// // ---alert---
// alert('form submitted')
// }

// const App = () => {
//     return (
//         <div>
// <form onSubmit={ postFormData}>
// <input placeholder="name"/>
// <button type='submit'>submit</button>
// </form>
//         </div>
//     );
// };

// export default App;

// --------------------react patties(8)(react hooks)---------------------

// //---useRef method---
// import React from 'react';
// // import useRef
// import {useRef} from 'react';

// const App = () => {
// // id দিয়ে DOM ধরা
// let myHeadLine=useRef()
// //তারপরে value set করা এবং একটি function এর মধ্যে রাখা
// const change=()=>{
//     myHeadLine.current.innerText="hello useRef";
// }
//     return (
//         <div>
//             {/* id set */}
//        <h1 ref={myHeadLine}></h1>
//     {/* onClick য়ে function দিয়ে দেওয়া */}
//        <button onClick={change}>click</button>
//         </div>
//     );
// };
// export default App;

// ---------- useRef (Attibute value chance) ----------
import React from 'react';
// import useRef
import {useRef} from 'react';

const App = () => {

// id দিয়ে DOM ধরা
let myImg=useRef()
 //তারপরে value set করা এবং একটি function এর মধ্যে রাখা
//---value chance---
const change=()=>{
    myImg.current.src="https://picsum.photos/200/300?grayscale"
    myImg.current.setAttribute('height','200px')
    myImg.current.setAttribute('width','300px')

}

    return (
        <div>
  {/* id set */}
<img ref={myImg} src="https://picsum.photos/seed/picsum/200/300"/>

  {/* onClick য়ে function দিয়ে দেওয়া */}
<button onClick={change}>click</button>

        </div>
    );
};

export default App;

// ---------- useRef (impute element) ----------