/**
 * Created by austinsprawls on 10/27/15.
 */
import React, { PropTypes, Component } from 'react'
import styles from './AgentPage.css'
import withStyles from '../../../decorators/withStyles'

import AgentList from '../AgentList'

import AgentStore from '../../../stores/AgentStore'

@withStyles(styles)
class AgentPage extends Component {
  constructor() {
    super();
    this.state = {
      agents: AgentStore.getAllAgents(),
    };
    this._onChange = this._onChange.bind(this);
  };

  componentWillMount() {
    AgentStore.addChangeListener(this._onChange)
  };

  componentWillUnmount() {
    AgentStore.removeChangeListener(this._onChange);
  };

  _onChange() {
    this.setState({
      agents: AgentStore.getAllAgents(),
    });
  };

  render() {
    return (
      <div className="AgentPage container">
        <AgentList agents={this.state.agents} />
      </div>
    );
  };
}

export default AgentPage;
