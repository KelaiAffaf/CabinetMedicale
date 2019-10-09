import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 350 },
  { id: 'Prenom', label: 'Pre_Name', minWidth: 350 },
  { id: 'id', label: 'id', minWidth: 100 },
  {
    id: 'Num_Telephone',
    label: 'N telephone',
    minWidth: 150,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  
  {
    id: 'Etat',
    label: 'Etat',
    minWidth: 150,
    
  },
];

function createData(name,Prenom, id, Num_Telephone, Etat) {
  
  return { name, id,Prenom, Num_Telephone, Etat };
}

const rows = [
  createData('Mohammed ','moh', 'IN', 1324171354, 1),
  createData('Leila','aa', 'CN', 1403500365, 0),
  createData('Nadjib','aa', 'IT', 60483973, 1),
  createData('Nesrine ', 'aa','US', 327167434, 1),
  createData('Amina','aa', 'CA', 37602103, 1),
  createData('Rahim','aa', 'AU', 25475400, 1),
  createData('Samad', 'aa','DE', 83019200, 1),
  createData('Nour','aa', 'IE', 4857000, 0),
  createData('Houda', 'aa','MX', 126577691, 0),
  createData('Foudil','aa', 'JP', 126317000, 0),
  createData('Soumia','aa', 'FR', 67022000, 0),
  createData('Karim', 'aa','GB', 67545757, 0),
  createData('Abdou', 'aa','RU', 146793744, 0),
  createData('Hadi', 'aa','NG', 200962417, 0),
  createData('Samar', 'aa','BR', 210147125, 0),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function Tableau() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow style={{marginLeft:'20'}}>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
