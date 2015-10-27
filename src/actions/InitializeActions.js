/**
 * Created by austinsprawls on 10/27/15.
 */
'use strict';

import Dispatcher from '../core/Dispatcher'
import ActionTypes from '../constants/ActionTypes'

var InitializeActions = {
  initApp: function() {
    var allAgents = [
      {
        email: "test@test.com",
        id: "999998",
        name: "Test Agency",
        phone: "1112223333",
        primary_color: "FFD700",
        secondary_color: "",
        slug: "test",
        type: "agent"

      },
      {
        email: "john@doe.com",
        id: "999999",
        name: "Doe Agency",
        phone: "1112223333",
        primary_color: "FFD689",
        secondary_color: "",
        slug: "john",
        type: "agent"

      },
      {
        email: "austin@test.com",
        id: "999990",
        name: "Austin's Agency",
        phone: "1112223333",
        primary_color: "FFFFFF",
        secondary_color: "",
        slug: "test",
        type: "agent"

      }
    ];
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      data: {
        agents: allAgents
      }
    });
  },
};

export default InitializeActions;
