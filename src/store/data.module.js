import DataService from '../services/data.service';

export const data = {
  state: {
    alerts: []
  },
  actions: {
    getData( { commit }) {
      return DataService.getAlerts().then(
        alerts => {
          commit('fetchAlerts', alerts);
          return Promise.resolve(alerts);
        },
        error => {
          console.log(error)
        }
      )
     
    },
  },
  mutations: {
    fetchAlerts(state, alerts) {
      state.alerts = alerts
    }
  }
};