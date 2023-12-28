import React from 'react';
import * as stylex from '@stylexjs/stylex';

const Button = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", null, children);
};

const styles = {
  sm: {
    width: "x1kky2od",
    height: "xlup9mm",
    $$css: true
  },
  md: {
    width: "x1td3qas",
    height: "x10w6t97",
    $$css: true
  },
  lg: {
    width: "x1fu8urw",
    height: "x1peatla",
    $$css: true
  }
};
const Avatar = ({
  src,
  size = "md"
}) => {
  return /*#__PURE__*/React.createElement("div", null, src ? /*#__PURE__*/React.createElement("img", Object.assign({}, stylex.props(styles[size]), {
    src: src
  })) : null);
};

export { Avatar, Button };
//# sourceMappingURL=beatiful-tree.mjs.map
