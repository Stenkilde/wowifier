import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  searchQuery,
  searchQueryAsync
} from '../modules/search';

// const handleSubmit = event => {
//   event.preventDefault();

//   searchQueryAsync();
// }

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>SearchQuery: {props.query}</p>
    <input type="text" onChange={(event) => props.searchQuery(event)} />
    <button onClick={props.searchQueryAsync}>Search</button>

    {props.data.map((item) => {
      return (
        <h1 key={item.id}>{item.id}</h1>
      )
    })}

    Is Searching {props.isSearching ? 'yes' : 'no'}

    <button onClick={() => props.changePage()}>Go to about page via redux</button>
  </div>
)

const mapStateToProps = state => ({
  query: state.search.query,
  data: state.search.searchResult,
  isSearching: state.search.isSearching
})

const mapDispatchToProps = dispatch => bindActionCreators({
    searchQuery,
    searchQueryAsync,
    changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)