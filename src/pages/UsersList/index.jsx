import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { getUsers } from "../../services/users.service";
import { Loading } from "../../components/Loading";
import { Alert, Typography } from "@mui/material";
import styles from "./index.module.css";

const columns = [
  { field: 'id', headerName: 'Id', width: 90 },
  {
    field: 'name',
    headerName: 'Nombre',
    width: 150,
    editable: true,
  },
  {
    field: 'last_name',
    headerName: 'Apellido',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Telefono',
    width: 150,
    editable: true,
  },
  {
    field: 'role',
    headerName: 'Rol',
    width: 150,
    editable: true,
  },
];

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState({
      message: "",
      type: "",
      isOpen: false,
    });
  
    useEffect(() => {
      setIsLoading(true);
  
      const fetchUsers = getUsers();
      fetchUsers
        .then((usersResponse) => {
          setUsers(usersResponse.users);
        })
        .catch((error) => {
          console.error(error);
  
          setAlert({
            message: "Ocurrió un error al obtener la información",
            type: "danger",
            show: true,
          });
        })
        .finally(setIsLoading(false));
    }, []);
  
    if(isLoading) return <Loading />;
  
    return (
      <section>
          { alert.isOpen && ( <Alert alert={alert} setAlert={setAlert}/> ) }
          <Typography paddingLeft={10} variant="h4">Listado de usuarios:</Typography>
  
          <Box className={styles.tableContainer}>
              <DataGrid
                  rows={users}
                  columns={columns}
                  initialState={{
                  pagination: {
                      paginationModel: {
                      pageSize: 7,
                      },
                  },
                  }}
                  pageSizeOptions={[7]}
                  checkboxSelection
                  disableRowSelectionOnClick
              />
          </Box>
      </section>
    );
  };