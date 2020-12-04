import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: {},
      loading: false,
      message: ''
    };
    this.cancel = '';
  }
  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({query, loading: true, message: ''});
  }
  render() {
    return(
      <div className='container'>
        <h2 className="heading">Live Search</h2>
        <label htmlFor="search-input" className="search-label">
          <input 
            type="text"
            id="search-input"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
          />
          <i className="fa fa-search search-icon" />
        </label>
      </div>
    )
  }
}

export default Search;