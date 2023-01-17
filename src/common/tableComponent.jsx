import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./utils/tableBody";
import Table from "react-bootstrap/Table";

const TableComponent = ({columns, sortColumn, onSort, data}) => {

  return (
    <Table striped bordered hover size="sm">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody data={data} columns={columns} />
    </Table>
  );
};

export default TableComponent;
