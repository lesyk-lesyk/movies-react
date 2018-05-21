import * as React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from '../../actions';

export class SearchFieldComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { term: this.props.term };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    this.props.setSearchTerm(event.target.value);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.onFormSubmit}>
        <input
          name="search-term"
          className="search-field"
          type="search"
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Enter search term..."
        />
        <span className="search-field-icon">&#8617;</span>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  term: state.searchForm.term
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSearchTerm: term => {
    dispatch(
      setSearchTerm(term)
    );
  }
});

export const SearchField = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFieldComponent);
