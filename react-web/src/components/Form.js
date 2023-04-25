import React from 'react'

function Form() {
  return (
    <div>
    <form>
      <label>Date</label>
      <input type="number"  value="yy/mm/dd"/>
    <label >Description:</label>
    <input type="text"/>
    <label >Category:</label>
    <input type="text"/>
    <label >Amount:</label>
    <input type="number"/>
    </form>
    </div>
  );
}

export default Form;
