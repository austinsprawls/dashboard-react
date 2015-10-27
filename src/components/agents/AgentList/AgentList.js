/**
 * Created by austinsprawls on 10/27/15.
 */
import React, { PropTypes, Component } from 'react'
import AgentActions from '../../../actions/AgentActions'
import {Table, Row, Col, Input, Glyphicon} from 'react-bootstrap'

import Search from '../../Search'

class AgentList extends Component {
  constructor() {
    super();
  }

  static PropTypes = {
    agents: PropTypes.array.isRequired
  };

  createAgent() {};

  deleteAgent() {};

  handleSearch() {
    console.log("hey i'm handling search inside agent list");
    //const query = this.refs.query.getValue();
    //const identifier = this.refs.identifier.getValue();
    //console.log("the value of the query: ", query);
    //console.log("the value of the identifier: ", identifier);
    //let results = this.props.agents.filter(agent => {
    //  return agent[identifier] === query;
    //});
    //console.log(results);
  }

  render() {
    const agentRows = this.props.agents.map(agent => {
      return(
        <tr key={agent.id}>
          <td>{agent.id}</td>
          <td>{agent.name}</td>
          <td>{agent.email}</td>
          <td>{agent.phone}</td>
          <td>{agent.slug}</td>
        </tr>
      );
    });
    return(
      <div className="AgentList">
        <Search identifierOptions={['ID', 'agency name', 'email', 'phone', 'slug']}
                handleSearch={this.handleSearch}
          />
        <Table responsive>
          <thead>
          <tr>
            <th>ID</th>
            <th>Agency Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Slug</th>
          </tr>
          </thead>
          <tbody>
          {agentRows}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AgentList;
