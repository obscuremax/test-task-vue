import axios from "axios";
import config from "../../API/api";

export default {
  state: {
    issues: [],
    hasIssues: true,
  },
  mutations: {
    SET_ISSUES(state, payload) {
      state.issues = payload;
    },
    SET_HAS_ISSUES(state, payload) {
      state.hasIssues = payload;
    },
  },
  actions: {
    async GET_ISSUES({ commit }, payload) {
      const conf = JSON.stringify({
        query: `query { 
          repository(owner: "octocat", name: "${payload}") {
                issues(last: 10) {
                  edges {
                    node {
                      title
                      state
                      bodyText
                      number
                      id
                      comments(first:20) {
                        nodes {
                          createdAt
                          bodyText
                          id
                        }
                      }
                    }
                  }
                }
              }
        }`,
      });
      let issues = await axios(config(conf)).then((res) => {
        let nodes = res.data.data.repository.issues.edges;
        let arr = nodes.map((el) => {
          let comments = el.node.comments.nodes;
          comments = comments.map((el) => {
            return {
              date: el.createdAt,
              text: el.bodyText,
              id: el.id,
            };
          });
          return {
            name: el.node.title,
            status: el.node.state,
            descr: el.node.bodyText,
            id: el.node.id,
            number: el.node.number,
            comments,
          };
        });
        return arr;
      });
      commit("SET_ISSUES", issues);
      if (!issues.length) {
        commit("SET_HAS_ISSUES", false);
      } else {
        commit("SET_HAS_ISSUES", true);
      }
    },
  },
  getters: {
    ISSUES(state) {
      return state.issues;
    },
    HAS_ISSUES(state) {
      return state.hasIssues;
    },
  },
};
