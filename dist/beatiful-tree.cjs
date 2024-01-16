'use strict';

var React = require('react');
var stylex = require('@stylexjs/stylex');
var rx = require('react-icons/rx');

const Button = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", null, children);
};

const styles = {
  container: {
    display: "x78zum5",
    justifyContent: "xl56j7k",
    alignItems: "x6s0dn4",
    backgroundColor: "x1snqmmo",
    borderRadius: "xorixrz",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    $$css: true
  },
  img: {
    width: "xh8yej3",
    height: "x5yr21d",
    borderRadius: "xorixrz",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: true
  },
  sm: {
    width: "x23j0i4",
    height: "xd7y6wv",
    $$css: true
  },
  md: {
    width: "x1guw455",
    height: "x16wdlz0",
    $$css: true
  },
  lg: {
    width: "x15yg21f",
    height: "xnnlda6",
    $$css: true
  }
};
const Avatar = ({
  src,
  size = "md",
  alt,
  placeholder = /*#__PURE__*/React.createElement(rx.RxAvatar, null)
}) => {
  return /*#__PURE__*/React.createElement("div", Object.assign({}, stylex.props(styles.container, styles[size])), src ? ( /*#__PURE__*/React.createElement("img", Object.assign({}, {
    className: "xh8yej3 x5yr21d xorixrz"
  }, {
    src: src,
    alt: alt
  }))) : placeholder);
};

exports.Avatar = Avatar;
exports.Button = Button;
//# sourceMappingURL=beatiful-tree.cjs.map
