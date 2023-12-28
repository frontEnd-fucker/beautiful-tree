'use strict';

var React = require('react');
var stylex = require('@stylexjs/stylex');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var stylex__namespace = /*#__PURE__*/_interopNamespaceDefault(stylex);

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
  return /*#__PURE__*/React.createElement("div", null, src ? /*#__PURE__*/React.createElement("img", Object.assign({}, stylex__namespace.props(styles[size]), {
    src: src
  })) : null);
};

exports.Avatar = Avatar;
exports.Button = Button;
//# sourceMappingURL=beatiful-tree.cjs.map
