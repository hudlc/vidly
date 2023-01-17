import "./App.css";
import { deleteMovie, getMovies } from "./services/fakeMovieService";
import React, { Component } from "react";
import Pagination from "./common/pagination";
import { paginate } from "./common/utils/paginate";
import { getGenres } from "./services/fakeGenreService";
import GroupFilter from "./common/groupFilter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MoviesTable from "./common/moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movieList: [],
    genreList: [],
    selectedGenre: null,
    activePage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genreList = [{ name: "All Movies", _id: "" }, ...getGenres()];

    this.setState({ movieList: getMovies(), genreList });
  }

  handleDelete = (id) => {
    this.setState(deleteMovie(id));
  };

  handleChange = (page) => {
    this.setState({ activePage: page });
  };

  handleLike = (movie) => {
    const movieList = [...this.state.movieList];
    const index = movieList.indexOf(movie);
    movieList[index] = { ...movieList[index] };
    movieList[index].like = !movieList[index].like;
    this.setState({ movieList });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, activePage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () =>{

    const {
      activePage,
      pageSize,
      movieList,
      selectedGenre,
      sortColumn,
    } = this.state;


    const filtered =
      selectedGenre && selectedGenre._id
        ? movieList.filter((m) => m.genre._id === selectedGenre._id)
        : movieList;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, activePage, pageSize);

    return {totalCount : filtered.length, data:movies }

  }

  render() {
    const { length: count } = this.state.movieList;

    const {
      activePage,
      pageSize,
      genreList,
      selectedGenre,
      sortColumn,
    } = this.state;

    if (count === 0) return <p>No movies in the list</p>;

    const {totalCount, data} = this.getPagedData();

    return (
      <Container>
        <p>There are {totalCount} movies in the table</p>
        <Row>
          <Col xs="3">
            <GroupFilter
              genreList={genreList}
              onItemSelect={this.handleGenreSelect}
              selectedItem={selectedGenre}
            ></GroupFilter>
          </Col>
          <Col>
            <MoviesTable
              movies={data}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              onSort={this.handleSort}
            ></MoviesTable>
            <Pagination
              itemsCount={totalCount}
              activePage={activePage}
              pageSize={pageSize}
              onPageChange={this.handleChange}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Movies;
