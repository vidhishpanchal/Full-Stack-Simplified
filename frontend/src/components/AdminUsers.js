import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useSelector  } from "react-redux";

const UserTable = () => {

  const allUsers = useSelector((state)=> state.admin.allUsers)
  const [textVal, setTextVal] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(()=> {
    setFilteredUsers(allUsers)
  },[allUsers])
   
  const onChange = (value) => {
    const searchVal = value.toLowerCase();
    let regex = new RegExp(searchVal, "g");
    const byUserName = allUsers.filter((user) => {
      if(user.name) {
        return user.name.toLowerCase().match(regex)
      }
    }
    );
    const byEmail = allUsers.filter((user) => {
      if(user.email) {
        return user.email.toLowerCase().match(regex)
      }
    }
    );
    setFilteredUsers([...new Set([...byUserName, ...byEmail])]);
  };

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Enrollment Date",
      selector: (row) => new Date(row.createdAt).toLocaleDateString()
    },
    {
      name: "Courses Enrolled",
      cell: (row) => (
        <Link to={`/order/order/getAllCoursesOfUser/${row._id}`}>View</Link>
      ),
    },
  ];

  return (
    <div className="listTable">
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          id="outlined-search"
          placeholder="Search by name/e-mail"
          fullWidth
          size="small"
          type="search"
          variant="outlined"
          value={textVal}
          onChange={(e) => {
            setTextVal(e.target.value);
            onChange(e.target.value)
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchOutlinedIcon/></InputAdornment>,
          }}
        />
      </form>
      <DataTable
        title="Users"
        columns={columns}
        data={filteredUsers}
        highlightOnHover={true}
        pointerOnHover={true}
        pagination={true}
        paginationPerPage={8}
      />
    </div>
  );
};

export default UserTable;
