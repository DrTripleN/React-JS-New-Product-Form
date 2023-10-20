import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
   const[values,setValues] = useState({
    productname:"",
    description:"",
    category:"",
    quantity:0,
    price:0,
});

const inputs = [
    {
    id:1,
    name:"productname",
    type:"text",
    placeholder:"Product Name",
    label:"Name"

},
{
    id:2,
    name:"description",
    type:"text",
    placeholder:"Description",
    label:"Description"

},
{
    id:3,
    name:"category",
    type:"text",
    placeholder:"Category",
    label:"Category"

}
,{
    id:4,
    name:"quantity",
    type:"number",
    placeholder:"Quantity",
    label:"Quantity"

}
,{
    id:5,
    name:"price",
    type:"number",
    placeholder:"Price",
    label:"Price"

},
];
    const handleSubmit = (e)=>{
        e.preventDefault();
       /* const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries))*/
    };

    const handleCancel = () => {
        // Reset the form fields by setting the state values to empty strings
        setValues({
            productname:"",
            description:"",
            category:"",
            quantity:0,
            price:0,
        });
      };
const onChange =(e) =>{
    setValues({...values,[e.target.name]: e.target.value});

};
    console.log(values);
  return (
  <div className="app">
    <form id="NewProductForm" onSubmit={handleSubmit}>
        <h2>New Product</h2>
        {inputs.map((input) =>(
            <FormInput key ={input.id}{...input} value ={values[input.name]}
            onChange={onChange} />
        ))}
        <div class ="button-container">
        <button>Submit</button> 
        
        <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
    </form>
  </div>
  )
};
export default App;