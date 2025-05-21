
import React from 'react';

const GardenTips = () => {
  const handleGardenTips = (e) => {
    e.preventDefault()
    const form = new FormData()
    console.log(form,"adsf")
  }
  return (
    <div>
      <form onSubmit={handleGardenTips}>

        <input type="text" name="text1" value="foo" />
        <input type="text" name="text2" value="bar" />
        <input type="text" name="text2" value="baz" />
        <input type="checkbox" name="check" checked disabled />
        <button name="intent" value="save">Save</button>
        <button name="intent" value="saveAsCopy">Save As Copy</button>
      </form>
    </div>
  );
};

export default GardenTips;