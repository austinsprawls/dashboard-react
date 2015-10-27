/**
 * Created by austinsprawls on 10/27/15.
 */
import React, { PropTypes, Component } from 'react'
import { Glyphicon, Input, Col, Row } from 'react-bootstrap'

class Search extends Component {
  constructor(){
    super();
  }

  static PropTypes = {
    identifierOptions: PropTypes.array.isRequired,
    handleSearch: PropTypes.func.isRequired
  };

  render() {
    const searchGlyphicon = <Glyphicon glyph="search" />;
    return (
      <Row>
        <Col md={6}>
          <Col md={6}>
            <Input type="select"
              >
              <option value="id">ID</option>
              <option value="name">name</option>
              <option value="email">email</option>
              <option value="phone">phone</option>
              <option value="slug">slug</option>
            </Input>
          </Col>
          <Col md={6}>
            <Input type="text"
                   placeholder="Search"
                   addonBefore={searchGlyphicon}
                   onChange={this.props.handleSearch.bind(this)}
              />
          </Col>
        </Col>
      </Row>
    );
  }



}

export default Search;
