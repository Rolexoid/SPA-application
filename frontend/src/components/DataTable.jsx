import React from 'react';
import { useGetDataQuery } from '../api/dataApi';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const DataTable = () => {
  const { data: response } = useGetDataQuery();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Номер сотрудника</TableCell>
            <TableCell align="center">Тип документа</TableCell>
            <TableCell align="center">Название документа</TableCell>
            <TableCell align="center">Статус документа</TableCell>
            <TableCell align="center">Подпись сотрудника</TableCell>
            <TableCell align="center">Дата подписи сотрудника</TableCell>
            <TableCell align="center">Подпись компании</TableCell>
            <TableCell align="center">Дата подписи компании</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {response?.data.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {item.employeeNumber}
              </TableCell>
              <TableCell align="center">{item.documentType}</TableCell>
              <TableCell align="center">{item.documentName}</TableCell>
              <TableCell align="center">{item.documentStatus}</TableCell>
              <TableCell align="center">{item.employeeSignatureName}</TableCell>
              <TableCell align="center">{item.employeeSigDate}</TableCell>
              <TableCell align="center">{item.companySignatureName}</TableCell>
              <TableCell align="center">{item.companySigDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;