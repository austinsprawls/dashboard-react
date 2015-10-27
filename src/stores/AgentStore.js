/**
 * Created by austinsprawls on 10/27/15.
 */
'use strict';

import Dispatcher from '../core/Dispatcher'
import ActionTypes from '../constants/ActionTypes'
import _ from 'lodash'
const EventEmitter = require('events').EventEmitter;
const CHANGE_EVENT = 'change';

let _agents = [];

var AgentStore = Object.assign({}, EventEmitter.prototype, {

  addChangeListener: callback => {
    this.onChange(CHANGE_EVENT, callback);
  },

  removeChangeListener: () => {
    this.removeListener(CHANGE_EVENT);
  },

  emitChange: () => {
    this.emit(CHANGE_EVENT);
  },

  getAllAgents: () => {
    return _agents;
  },

});

Dispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.GET_AGENTS:
      _agents = action.agents;
      AgentStore.emitChange();
      break;
    case ActionTypes.CREATE_AGENT:
      _agents.push(action.agent);
      AgentStore.emitChange();
      break;
    case ActionTypes.UPDATE_AGENT:
      const existingAgent = _.find(_agents, {id: action.agent.id});
      const existingAgentIndex = _.indexOf(_agents, existingAgent);
      _agents.splice(existingAgentIndex, 1, action.agent);
      AgentStore.emitChange();
      break;
    case ActionTypes.DELETE_AGENT:
      _.remove(_agents, agent => {
        return action.id === agent.id;
      });
      AgentStore.emitChange();
      break;
  }
});

export default AgentStore;
