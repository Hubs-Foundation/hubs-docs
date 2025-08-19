/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
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
            <a href={this.docUrl("welcome.html", this.props.language)}>
              Introduction
            </a>
            <a href={this.docUrl("setup.html", this.props.language)}>
              Setting Up Your Hub
            </a>
            <a
              href={this.docUrl(
                "hubs-create-join-rooms.html",
                this.props.language
              )}
            >
              Hubs Fundamentals
            </a>
            <a
              href={this.docUrl(
                "spoke-creating-projects.html",
                this.props.language
              )}
            >
              Spoke Documentation
            </a>
            <a
              href={this.docUrl(
                "creators-advanced-avatar-customization.html",
                this.props.language
              )}
            >
              For Creators
            </a>
            <a href={this.docUrl("system-overview.html", this.props.language)}>
              For Developers
            </a>
            <a href={this.docUrl("admin-intro.html", this.props.language)}>
              Administration
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://discord.gg/wHmY4nd">Discord Chat</a>
            {/* <a
              href="https://twitter.com/hubsfoundation"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a> */}
          </div>
          <div>
            <h5>More</h5>
            <a href="https://hubsfoundation.org">Hubs</a>
            <a href="https://github.com/Hubs-Foundation/Spoke">Spoke</a>
            <a href="https://github.com/Hubs-Foundation/hubs">GitHub</a>
            {this.props.config.twitterUsername && (
              <div className="social">
                {/* <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button"
                >
                  Follow @{this.props.config.twitterUsername}
                </a> */}
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
