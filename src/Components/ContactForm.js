import React,{ useState } from 'react'

function ContactForm() {

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [subject,setSubject] = useState("");

    const [country, setCountry] = useState("usa");

    const handleChange = (event) => {
        setCountry(event.target.value);
    }

  return (
    <>
      <form style={{width:'90%',marginLeft: 'auto',marginRight: 'auto',marginTop: '2%'}}>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." value={fname} onChange={(e) => setFname(e.target.value)} />

        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={lname} onChange={(e) => setLname(e.target.value)} />

        <label htmlFor="country">Country</label>
        <select id="country" name="country" value={country} onChange={handleChange}>
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
        <option value="nigeria">Nigeria</option>
        <option value="france">France</option>
        <option value="germany">Germany</option>
        </select>

        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}} value={subject} onChange={(e) => setSubject(e.target.value)} ></textarea>

        <input type="submit" value="Submit" />
    </form>
    </>
  )
}

export default ContactForm;
