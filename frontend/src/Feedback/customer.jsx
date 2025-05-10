import React from 'react'

function customer() {
  return (
    <div>
      <form>
        Name: <input type="text" name="name" /><br />
        Email: <input type="text" name="email" /><br />
        Phone: <input type="text" name="phone" /><br />
        Day of Visit: <input type="text" name="day" /><br />  
        Time of Visit: <input type="text" name="time" /><br />
        Meal Type: <input type="text" name="meal" /><br />
        Meal Quality: <input type="text" name="quality" /><br />
        Service Quality: <input type="text" name="service" /><br />
        Cleanliness: <input type="text" name="cleanliness" /><br />
        Staff Behavior: <input type="text" name="behavior" /><br />
        
        Overall Experience: <input type="text" name="experience" /><br />
        Would you recommend us to others? <input type="text" name="recommend" /><br />

        Feedback: <textarea name="feedback" /><br />
        <input type="submit" value="Submit" />

      </form>
    </div>
  )
}

export default customer
