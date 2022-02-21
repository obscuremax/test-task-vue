..список репозиториев
{
 user(login: "octocat") {
   repositories(last: 100) {
    edges {
      node {
        name
      }
    }	
   }
 }
}
.. список issues 
{
 repository(owner: "octocat", name: "Spoon-Knife") {
        issues(last: 3) {
          edges {
            node {
              title
              
            }
          }
        }
      }
}
.. описание issues
{
  repository(owner: "octocat", name: "Spoon-Knife") {
    issues(last: 20) {
      edges {
        node {
          title
          state
          bodyText
        }
      }
    }
  }
}
.. коментарии
{
  repository(owner: "octocat", name: "Hello-World") {
    issues(last: 5) {
      edges {
        node {
          title
          state
          bodyText
          id
          comments(last: 10) {
            edges {
              node {
                bodyText
                createdAt
                id
              }
            }
          }
        }
      }
    }
  }
}