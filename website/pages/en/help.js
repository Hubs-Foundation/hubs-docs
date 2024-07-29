/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Can't find what you're looking for?</h1>
          </header>

          <p>
            If our <a href="/docs/">documentation</a> doesn't answer your
            questions, here are a few options for contacting us:
          </p>

          <strong>Email Us</strong>
          <p>
            You can contact us via {" "}
            <a href="mailto:info@hubsfoundation.org">
              email
            </a>{" "}. 
            {/* You can{" "}
            <a href="mailto:info@hubsfoundation.org">
              get subscription support,
            </a>{" "}
            ask{" "}
            <a href="mailto:info@hubsfoundation.org">
              questions about hubs cloud,
            </a>{" "}
            or contact us about{" "}
            <a href="mailto:info@hubsfoundation.org">
              using hubs for enterprise
            </a>
            . */}
          </p>

          <strong>Message Us</strong>
          <p>
            Our{" "}
            <a href="https://discord.gg/hubs-498741086295031808">
              Discord Server
            </a>{" "}
            is the best way to quickly message us with your questions. Explore
            the Community and Support Forums to find the best channel for your
            question.
          </p>

          {/* <strong>Additional Documentation</strong>
          <p>
            We also have{" "}
            <a href="https://hubs.mozilla.com/labs/">
              a blog called Creator Labs - Update coming soon.
            </a>{" "}
            and{" "}
            <a href="https://youtube.com/playlist?list=PLCxaiaRxTL6_V88JFYb6tOPkHCKjnH2BK">
              a YouTube channel
            </a>{" "}
            where you can discover deep-dives and guides about important Hubs
            topics.
          </p> */}

          {/* <strong>Feature Requests and Improvement Ideas</strong>
          <p>
            <a href="https://connect.mozilla.org/t5/ideas/idb-p/ideas/label-name/hubs">
              Mozilla Connect
            </a>{" "}
            is an open forum for you to suggest new features and ideas for how
            we can improve Hubs for your use case. Sign in with your Mozilla
            Account and select "Submit an idea" to get started.
          </p> */}

          <strong>Bug Reports and Discussions</strong>
          <p>
            We track bugs and features on GitHub. You can{" "}
            <a href="https://github.com/Hubs-Foundation/hubs/issues">
              view existing tickets,
            </a>{" "}
            or open a{" "}
            <a href="https://github.com/Hubs-Foundation/hubs/issues/new/choose">
              new issue or feature request
            </a>
            . If you would like to discuss a code-related topics with the Hubs
            team or the community you can browse our GitHub{" "}
            <a href="https://github.com/Hubs-Foundation/hubs/discussions">
              discussion board
            </a>
            , or{" "}
            <a href="https://github.com/Hubs-Foundation/hubs/discussions/new">
              start a new discussion
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
