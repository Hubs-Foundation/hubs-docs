/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('welcome.html', this.props.language)}>
             Introduction
            </a>
            <a href={this.docUrl('entering-hubs.html', this.props.language)}>
              Hubs Documentation
            </a>
            <a href={this.docUrl('create-project.html', this.props.language)}>
             Spoke Documentation
            </a>
            <a href={this.docUrl('creator-intro.html', this.props.language)}>
             For Creators
            </a>
            <a href={this.docUrl('developer-intro.html', this.props.language)}>
             For Developers
            </a>
            <a href={this.docUrl('hubs-cloud-intro.html', this.props.language)}>
            Hubs Cloud
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="http://discord.gg/wHmY4nd">Discord Chat</a>
            <a
              href="https://twitter.com/byhubs"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://hubs.mozilla.com/">Hubs</a>
            <a href="https://hubs.mozilla.com/spoke/">Spoke</a>
            <a href="https://github.com/mozilla/hubs/">GitHub</a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
