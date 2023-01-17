import React, { Component } from "react";
import {HiSortAscending} from "react-icons/hi";
import {HiSortDescending} from "react-icons/hi";

class TableHeader extends Component {
  raiseSort = (path) => {
    let currentSortState = "asc";

    if (
      this.props.sortColumn.path === path &&
      this.props.sortColumn.order === "asc"
    )
      currentSortState = "desc";

    this.props.sortColumn.path = path;
    this.props.sortColumn.order = currentSortState;

    this.props.onSort(this.props.sortColumn);
  };

  renderSortIcon = column => {
    if(column.path !== this.props.sortColumn.path) return null;
    if(this.props.sortColumn.order === "asc") return <HiSortAscending/>;
    return <HiSortDescending/>;
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
