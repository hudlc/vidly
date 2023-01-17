import React, { Component } from "react";
import TableComponent from "./tableComponent";
import Button from "react-bootstrap/Button";
import LikeButton from "./likeButton";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <LikeButton
          onLike={() => this.props.onLike(movie)}
          like={movie.like}
        ></LikeButton>
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <Button
          variant="danger"
          size="sm"
          onClick={() => this.props.onDelete(movie._id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <TableComponent
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      ></TableComponent>
    );
  }
}

export default MoviesTable;
