import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "https://github.com/welitu";
import Repositories from "./components/repositories";
import useGithub from "https://github.com/welitu?tab=repositories";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
