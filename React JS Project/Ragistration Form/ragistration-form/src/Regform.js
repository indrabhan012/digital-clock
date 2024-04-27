import './Regform.css';
import {useState} from "react";

function Regform(){
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[mobilenumber,setMobnumber]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confpassword,setConfpassword]=useState("");
    const[dob,setDob]=useState("");
    const[gender,setSelectedOption]=useState("");
    const[selectstate,setSelectstate]=useState("");
    const[selectcourse,setSelectcourse]=useState("");
    const[deliverymode,setSelectDelivery]=useState("");
    const[comments,setComments]=useState("");
    const[passwordError,setPasswordError]=useState(false);

    const handleOptionChange=(event)=>{
        setSelectedOption(event.target.value);
    }
    const handleOption=(event)=>{
        setSelectDelivery(event.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password !== confpassword){
            setPasswordError(true);
        }
        else{
            setPasswordError(false);
        }


        console.log("First name "+ firstname);
        console.log("Last name "+ lastname);
        console.log("Mobile number "+ mobilenumber);
        console.log("email "+ email);
        console.log("password "+ password);
        console.log("conf password "+ confpassword);
        console.log("dob "+ dob);
        console.log("gender "+ gender);
        console.log("Select state "+ selectstate);
        console.log("Course "+ selectcourse);
        console.log("DeliveryMode "+ deliverymode);
        console.log("comments "+ comments);
        alert(" your response updated successfully");
    }

    return(
        <>
        <form className='ragistration-form' onSubmit={handleSubmit}>
            <fieldset>
                <legend>Personal Information</legend>
            <div classNmae="from-group">
                <label htmlfor="firstname">FirstNmae:</label>
                <input type="text" placeholder="Enter Your first Name" onChange={(e)=>setFirstname(e.target.value)} value={firstname} id="firstname" required/>
                
            </div>
            <div className="from-group">
                <label htmtfor="lastname">LastName:</label>
                <input type="text" placeholder="Enter Your Last Name" onChange={(e)=>setLastname(e.target.value)}
                value={lastname}id="lastname" required/>
             </div>
             <div className="from-group">
                <label htmlfor="mobilenumber">Mobile Number</label>
                <input type="number" placeholder="Enter Your Mobile Number" onchange={(e)=>setMobnumber(e.target.value)} value={mobilenumber}id="mobilenumber" required/>
            </div>
            <div className="from=group">
                <label htmlfor="email">Email:</label>
                <input type="text" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} value={email} id="email" required/>

            </div>
            <div classNmae="from-group">
                <label htmlfor="password">Password:</label>
                <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password}id="password" name="password" maxLength={"10"} required/>
            </div>
            <div classNmae="from-group">
                <label htmlfor="confpassword">Confirm Password:</label>
                <input type="password" placeholder="Conform Password" onChange={(e)=>setConfpassword(e.target.value)}value={confpassword}
                id="confpassword" name="confpassword"maxLength={"10"} required/>
                </div>
                <div classNmae="from-group">
                    <label htmlfor="dob">DOB:</label>
                    <input type="date" id="dob"onChange={(e)=>setDob(e.target.value)} value={dob} required/>
                </div>
                <div className="from-group1">
                    <label htmlfor="gender">Gender:</label>
                    <input type="radio" value="Male" className="gender" onChange={handleOptionChange} checked={gender==="Male"}/> <label>Male</label>
                    <input type="radio" value="Female" className="gender" onChange={handleOptionChange} checked={gender==="Female"}/> <label>Female</label>
                    <input type="radio" value="Others" className="gender" onChange={handleOptionChange} checked={gender==="Others"}/> <label>Others</label>
                </div>
                <div className="from-group">
                    <label htmlfor="selectstate">SelectState:</label>
                    <select id="selectstate" onChange={(e)=>setSelectstate(e.target.value)} value={selectstate}>
                        <option>Madhaya Pradesh</option>
                        <option>Gurugram</option>
                        <option>Karnatak</option>
                        <option>Andrapradesh</option>
                        <option>delhi</option>
                        <option>Tamil Nadu</option>
                    </select>
                </div>
                </fieldset>
                <br></br>
<fieldset>
<legend>Course Information</legend>

 <div classNmae="from-group">
    <label htmlfor="selectcourse">SelectCourse:</label>
    <select id="selectcourse" onChange={(e)=>setSelectcourse(e.target.value)} value={selectcourse}>
        <option>Java Full Stack</option>
        <option>Python Full stack</option>
        <option>Software Testing</option>
    </select>
 </div>
 <div classNmae="from-group1">
    <label htmlfor="deliverymode">Delivery Mode:</label>
    <input type="radio" value="Online" className="delivery" onChange={handleOption} checked={deliverymode==="online"}/>
    <label>Online</label>
    <input type="radio" value="Offline" className="delivery" onChange={handleOption} checked={deliverymode==="Offline"}/>
    <label> Offline</label>
 </div>

<div classNmae="from-group">
    <label htmlfor="comments">Comments</label>
    <textarea id="comments" onChange={(e)=>setComments(e.target.value)} value={comments} required></textarea>
</div>
</fieldset>

<br></br>
{passwordError && <p></p>}
<button type="submit">Ragister</button>
 </form>
 </>
 )

}

export default Regform;
