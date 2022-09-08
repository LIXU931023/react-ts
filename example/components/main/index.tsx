import React, { ChangeEvent, FocusEvent }  from 'react';

export default function Add () {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }
  return (
    <div>
      <div id='app'>90777</div>
      <input type="text" onChange={handleChange} onBlur={handleBlur} />
    </div>
  )
}