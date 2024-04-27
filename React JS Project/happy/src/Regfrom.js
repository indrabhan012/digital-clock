import {useState} from "react";

function Regform(){
    const [firstname, setFirstname]=useState("");
    const [lastname,setlastname]=useState("");
    const[mobilenumber,setMobnumber]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confpassword,setConfpassword]=useState("");
    const[dob ,setDob]=useState("");
    const[gender,setSelectionOption]=useState("");
    const[selectstate,setSelectstate]=useState("");
    const[selectcourse,setSelectcourse]=useState("");
    const[deliverymode,setSelectDelivery]=useState("");
    const[comments,setComment]=useState("");
return(
    <>
    <form className = 'registration_form'>
        <div>
            <label html for="forstname" >Firstname : </label>
            <input type="text" placehonder="Enter your last Name" onChange={(e) =>setFirstname(e.target.value)}
            value={firstname} id="forstnsme" required/>















        </div>



    </form>
    </>
)

}