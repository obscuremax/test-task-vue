import axios from "axios";
import config from "../../API/api";

const conf = JSON.stringify({
  query: `query {
      user(login: "octocat") {
        repositories(last: 20, ownerAffiliations:OWNER) {
          edges {
            node {
              nameWithOwner
              id
            }
          }	
        }
      }
    }`,
});

export default {
  state: {
    repositories: [],
  },
  mutations: {
    SET_REPOSITORIES(state, payload) {
      state.repositories = payload;
    },
  },
  actions: {
    async GET_REPOSITORIES({ commit }) {
      let repositories = await axios(config(conf)).then((res) => {
        let nodes = res.data.data.user.repositories.edges;
        let arr = nodes.map((el) => {
          return {
            name: el.node.nameWithOwner,
            id: el.node.id,
          };
        });
        return arr;
      });
      commit("SET_REPOSITORIES", repositories);
    },
  },
  getters: {
    REPOSITORIES(state) {
      return state.repositories;
    },
  },
};
