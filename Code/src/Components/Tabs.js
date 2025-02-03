import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";
import { PageNames, GithubDots } from "../AppConsts";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  setGithubDot = (tab) => {
    for (var i = 0; i < GithubDots.length; i++) {
      if (PageNames[i] === tab) {
        document.getElementById(GithubDots[i]).classList.add('blink');
      } else {
        document.getElementById(GithubDots[i]).classList.remove('blink');
      }
    }
  }

  componentDidMount() {
    this.setGithubDot(this.state.activeTab);
    for (var i = 0; i < GithubDots.length; i++) {
      var ghd = document.getElementById(GithubDots[i]);
      ghd.dotIndex = i;
      ghd.addEventListener('click', e => {
        this.setState({ activeTab: PageNames[e.currentTarget.dotIndex] });
        this.setGithubDot(PageNames[e.currentTarget.dotIndex]);
      });
    }
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });;
    this.setGithubDot(tab);
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;