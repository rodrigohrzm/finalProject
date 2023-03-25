import React, { useState } from 'react';
import { submitAPI } from "./FetchAPI";
import { useNavigate } from 'react-router';

function BookingForm({availabletimes, settimes}) {

   let tempstyle = {
      display: "grid",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "1000px",
      margin: "100px auto",
      gap: "20px",
   };
   let submitstyle = {
      width: "30vh",
      marginLeft: "auto",
      marginRight: "auto"
   };
   // input:required:invalid,
   // input:focus:invalid {
   //   /* insert your own styles for invalid form input */}
   // selected fields highlighted, return button from bookingpage previous page
   //    <Link to=".." relative="path">

   const [ date , setDate ] = useState ("");
   const [ time , setTime ] = useState ("");
   const [ guests , setGuests ] = useState ("");
   const [ occasion , setOccasion ] = useState ("");
   const [ location , setLocation ] = useState ("");
   const [ fullname , setFullname ] = useState ("");
   const [ email , setEmail ] = useState ("");

   function auxchild(event) {
      const newDate = event.target.value;
      setDate(newDate);
      settimes(newDate);
   }
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      let formData = [date, time, guests, occasion, location, fullname, email];
      if (submitAPI(formData) === true) {navigate("/confirmation");
          } else { return null}
      }

    return (
        <form style={tempstyle} onSubmit={handleSubmit}>
         <fieldset>
            <label htmlFor="res-date">Choose date</label>
               <input type="date" id="res-date" value={date} onChange={auxchild}/>
            <label htmlFor="res-time">Choose time</label>
               <select id="res-time" value={time} onChange={(e => setTime(e.target.value))}>
                  {availabletimes.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
               </select>
         </fieldset>
         <fieldset>
            <label htmlFor="guests">Number of guests</label>
               <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e => setGuests(e.target.value))} />
            <label htmlFor="occasion">Type of occasion</label>
               <select id="occasion" value={occasion} onChange={(e => setOccasion(e.target.value))}>
                  <option key="default" value="" selected disabled hidden >Select</option>
                  <option key="birthday" value="birthday" >Birthday</option>
                  <option key="anniversary" value="anniversary" >Anniversary</option>
                  <option key="company" value="company" >Company event</option>
               </select>
            <label>Location</label>
               <input type="radio" id="outdoors" name="outdoors" value="outdoors" checked={location === "outdoors"} onChange={(e => setLocation(e.target.value))}/>
                  <label htmlFor="outdoors">Outdoors</label>
               <input type="radio" id="indoors" name="indoors" value="indoors" checked={location === "indoors"} onChange={(e => setLocation(e.target.value))}/>
                  <label htmlFor="indoors">Indoors</label>
         </fieldset>
         <fieldset>
            <label htmlFor="fullname">Your name</label>
               <input required minlength="3" type="text" id="fullname" value={fullname} onChange={(e => setFullname(e.target.value))}/>
            <label htmlFor="email">Contact email</label>
               <input required type="email" id="email" value={email} onChange={(e => setEmail(e.target.value))}/>
         </fieldset>
        <button disabled={!occasion || !location || !guests || !time || !date} style={submitstyle} type="submit">Submit reservation</button>
        </form>
    )};

  export default BookingForm;


