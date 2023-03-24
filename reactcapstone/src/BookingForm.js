import React, { useState } from 'react';

function BookingForm({availabletimes, settimes}) {

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(date);
      console.log(time);
      console.log(guests);
      console.log(occasion);
      console.log(location);
   }

   const [ date , setDate ] = useState ("");
   const [ time , setTime ] = useState ("");
   const [ guests , setGuests ] = useState ("");
   const [ occasion , setOccasion ] = useState ("");
   const [ location , setLocation ] = useState ("");

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

   function auxchild(event) {
      const newDate = event.target.value;
      setDate(newDate);
      settimes(newDate);
   }

    return (
        <form style={tempstyle} onSubmit={handleSubmit}>
         <fieldset>
            <label htmlFor="res-date">Choose date</label>
               <input type="date" id="res-date" value={date} /* onChange={(e) => {setDate(e.target.value); settimes(date)}}*/ onChange={auxchild}/>
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
                  <option key="birthday" >Birthday</option>
                  <option key="anniversary" >Anniversary</option>
                  <option key="other" >Other</option>
               </select>
            <label>Location</label>
               <input type="radio" id="outdoors" name="outdoors" value="outdoors" checked={location === "outdoors"} onChange={(e => setLocation(e.target.value))}/>
                  <label htmlFor="outdoors">Outdoors</label>
               <input type="radio" id="indoors" name="indoors" value="indoors" checked={location === "indoors"} onChange={(e => setLocation(e.target.value))}/>
                  <label htmlFor="indoors">Indoors</label>
         </fieldset>
        <button style={submitstyle} type="submit">Submit reservation</button>
        </form>
    )};

  export default BookingForm;


