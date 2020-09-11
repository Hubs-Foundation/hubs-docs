/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Can't find what you're looking for?</h1>
          </header>

          <p>
            If our <a href="/docs/">documentation</a> doesn't answer your questions,{" "}
            here are a few options for contacting us:
          </p>

          <strong>Bug Reports and Feature Requests</strong>
          <p>
            We track bugs and features on GitHub.
            You can <a href="https://github.com/mozilla/hubs/issues">view existing tickets,</a>{" "}
            or open a <a href="https://github.com/mozilla/hubs/issues/new/choose">new issue or feature request</a>.
          </p>

          <strong>Discussions</strong>
          <p>
            If you want to discuss a topic with the Hubs team or the community, or you need help with{" "}
            troubleshooting, you can browse our GitHub{" "}
            <a href="https://github.com/mozilla/hubs/discussions">discussion board</a>, or{" "}
            <a href="https://github.com/mozilla/hubs/discussions/new">start a new discussion</a>.
          </p>

          <strong>Community Chat</strong>
          <p>
            Prefer to chat in real time? Visit our{" "}
            <a href="https://discord.gg/wHmY4nd">Discord chat server</a>.
          </p>

          <strong>Email</strong>
          <p>
            If you need to share sensitive information in order to get help, you can email us at{" "}
            <a href="mailto:hubs@mozilla.com">hubs@mozilla.com</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
