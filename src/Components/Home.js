import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  searchQuery,
  searchQueryAsync
} from '../modules/search';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>SearchQuery: {props.searchQuery}</p>
    <input type="text" onChange={props.searchQuery} />
    <button onClick={() => props.changePage()}>Go to about page via redux</button>
  </div>
)

const mapStateToProps = state => ({
  searchQuery: state.search.searchQuery
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