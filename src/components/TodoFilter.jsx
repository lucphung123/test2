import React from "react";

const TodoFilter = ({ filterTasks }) => {
  const handleFilterChange = (e) => {
    filterTasks(e.target.value);
  };

  return (
    <div style={{display:"flex", flexDirection:'row', alignItems:'center', justifyContent:'center', gap:'30px'}}>
      <label style={{fontSize:'24px',color:'white'}}>
        <input
          type="radio"
          name="filter"
          value="all"
          onChange={handleFilterChange}
          style={{marginRight:'5px'}}
        />
        All
      </label>
      <label style={{fontSize:'24px',color:'white'}}>
        <input
          type="radio"
          name="filter"
          value="active"
          onChange={handleFilterChange}
          style={{marginRight:'5px'}}
        />
        Active
      </label>
      <label style={{fontSize:'24px',color:'white'}}>
        <input
          type="radio"
          name="filter"
          value="completed"
          onChange={handleFilterChange}
          style={{marginRight:'5px'}}
        />
        Completed
      </label>
    </div>
  );
};

export default TodoFilter;