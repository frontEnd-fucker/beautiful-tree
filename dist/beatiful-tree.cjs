'use strict';

require('open-props/normalize.min.css');
var React = require('react');
var stylex = require('@stylexjs/stylex');
var rx = require('react-icons/rx');

const Button = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", null, children);
};

const styles$1 = {
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
  return /*#__PURE__*/React.createElement("div", Object.assign({}, stylex.props(styles$1.container, styles$1[size])), src ? ( /*#__PURE__*/React.createElement("img", Object.assign({}, {
    className: "xh8yej3 x5yr21d xorixrz"
  }, {
    src: src,
    alt: alt
  }))) : placeholder);
};

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */
const easings = {
  ease1: "var(--xtbvtkg)",
  ease2: "var(--x1gjwpr2)",
  ease3: "var(--x1l7t27)",
  ease4: "var(--xhjnziy)",
  ease5: "var(--x1dsyo7a)",
  in1: "var(--xz8hidj)",
  in2: "var(--xjxdgvu)",
  in3: "var(--xk7xtff)",
  in4: "var(--xj64iaj)",
  in5: "var(--xd86klu)",
  out1: "var(--x1ldliiq)",
  out2: "var(--x1mizugt)",
  out3: "var(--x1thws5a)",
  out4: "var(--x1k61fmk)",
  out5: "var(--xke5o03)",
  inOut1: "var(--xi4hqgd)",
  inOut2: "var(--x1cr6y2c)",
  inOut3: "var(--x1i6fwrf)",
  inOut4: "var(--x70quvb)",
  inOut5: "var(--x1gnuybl)",
  elasticOut1: "var(--xgimh7l)",
  elasticOut2: "var(--xuel3wu)",
  elasticOut3: "var(--x13wlh1z)",
  elasticOut4: "var(--x15rrowq)",
  elasticOut5: "var(--xckxvub)",
  elasticIn1: "var(--x1h4rgmm)",
  elasticIn2: "var(--xuv8cwu)",
  elasticIn3: "var(--xtsr4bo)",
  elasticIn4: "var(--x4t2ujx)",
  elasticIn5: "var(--xfilof9)",
  elasticInOut1: "var(--xcs4pwq)",
  elasticInOut2: "var(--x1tvy1fg)",
  elasticInOut3: "var(--x1hug1ko)",
  elasticInOut4: "var(--x8jgd0s)",
  elasticInOut5: "var(--x1a9cexk)",
  step1: "var(--x1guiek4)",
  step2: "var(--xt0hr37)",
  step3: "var(--x1wm2lzt)",
  step4: "var(--xmr57ua)",
  step5: "var(--xuq9g55)",
  spring1: "var(--x8q9tek)",
  spring2: "var(--x74h0us)",
  spring3: "var(--x1pyxu2u)",
  spring4: "var(--x7dk9yv)",
  spring5: "var(--x1kyj1jp)",
  bounce1: "var(--x1v0degx)",
  bounce2: "var(--x1hqok2c)",
  bounce3: "var(--x1hbys68)",
  bounce4: "var(--x1f5gqd2)",
  bounce5: "var(--x1mmf5oh)",
  __themeName__: "xkmor9q"
};

const style = {
  base: {
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    transitionProperty: "xpynieo",
    transitionBehavior: "xd00j3c",
    $$css: true
  },
  transition: (transitionDuration, transitionTimingFunction) => [{
    transitionDuration: "xk2iwio",
    transitionTimingFunction: "x164co6g",
    $$css: true
  }, {
    "--transitionDuration": (val => typeof val === "number" ? val + "ms" : val != null ? val : "initial")(transitionDuration),
    "--transitionTimingFunction": transitionTimingFunction != null ? transitionTimingFunction : "initial"
  }],
  getHeight: height => [{
    height: "x1jwls1v",
    $$css: true
  }, {
    "--height": (val => typeof val === "number" ? val + "px" : val != null ? val : "initial")(height)
  }]
};
const getElementHeight = ref => {
  const ele = ref.current;
  return ele ? ele.scrollHeight : "auto";
};
const COLLAPSED_HEIGHT = 0;
const Collapse = ({
  children,
  isOpen,
  transitionDuration = 200,
  transitionTimingFunction = easings.ease1,
  transitionEnd
}) => {
  const ref = React.useRef(null);
  const [height, setHeight] = React.useState(isOpen ? getElementHeight(ref) : COLLAPSED_HEIGHT);
  React.useLayoutEffect(() => {
    if (isOpen) {
      /**
       * Set it to display block at first which has changed the style.
       * And then we read the scrollHeight of the dom, which will cause Force Synchronous Layout(强制同步布局)
       * so we can get the collect height.
       */
      ref.current.style.setProperty("display", "block");
      const domHeight = getElementHeight(ref);
      setHeight(domHeight);
    } else {
      setHeight(COLLAPSED_HEIGHT);
    }
  }, [isOpen]);
  const handleTransitionEnd = () => {
    if (!isOpen) {
      ref.current.style.setProperty("display", "none");
    }
    transitionEnd === null || transitionEnd === void 0 ? void 0 : transitionEnd();
  };
  return /*#__PURE__*/React.createElement("div", Object.assign({
    ref: ref
  }, stylex.props(style.base, style.transition(transitionDuration, transitionTimingFunction), style.getHeight(height)), {
    onTransitionEnd: handleTransitionEnd
  }), children);
};

const AccordionContext = /*#__PURE__*/React.createContext(null);
const AccordionContextProvider = ({
  children,
  value
}) => {
  return /*#__PURE__*/React.createElement(AccordionContext.Provider, {
    value: value
  }, children);
};
const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion cotext should be used within AccordionContextProvider ");
  }
  return context;
};

const AccordionItemContext = /*#__PURE__*/React.createContext(null);
const AccordionItemContextProvider = ({
  children,
  value
}) => {
  return /*#__PURE__*/React.createElement(AccordionItemContext.Provider, {
    value: value
  }, children);
};
const useAccordionItemContext = () => {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error("Accordion cotext should be used within AccordionContextProvider ");
  }
  return context;
};

const AccordionItem = ({
  children,
  value
}) => {
  return /*#__PURE__*/React.createElement(AccordionItemContextProvider, {
    value: {
      value
    }
  }, /*#__PURE__*/React.createElement("div", Object.assign({}, {
    className: "x5n1zvx x1j61zf2"
  }), children));
};

const styles = {
  container: {
    height: "xn3w4p2",
    display: "x78zum5",
    alignItems: "x6s0dn4",
    cursor: "x1ypdohk",
    paddingTop: "xz9dl7a",
    paddingEnd: "x1pi30zi",
    paddingBottom: "xsag5q8",
    paddingStart: "x1swvt13",
    columnGap: "x40hh3e",
    $$css: true
  },
  active: {
    background: "x70k4zr",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    $$css: true
  },
  arrowBase: {
    transition: "xt1ie3o",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: "x6b70tl",
    $$css: true
  },
  arrowRotate: {
    rotate: "x1qul50q",
    $$css: true
  }
};
const AccordionControl = ({
  children
}) => {
  const accordionContext = useAccordionContext();
  const {
    value: itemValue
  } = useAccordionItemContext();
  const isActive = accordionContext.value === itemValue;
  const onControlClick = () => {
    var _a;
    (_a = accordionContext.onChange) === null || _a === void 0 ? void 0 : _a.call(accordionContext, itemValue);
  };
  return /*#__PURE__*/React.createElement("div", Object.assign({}, stylex.props(styles.container, isActive && styles.active), {
    onClick: () => onControlClick()
  }), /*#__PURE__*/React.createElement("div", Object.assign({}, stylex.props(styles.arrowBase, isActive && styles.arrowRotate)), /*#__PURE__*/React.createElement(rx.RxChevronDown, {
    size: 16
  })), children);
};

const AccordionPanel = ({
  children
}) => {
  const {
    value: accordionValue
  } = useAccordionContext();
  const {
    value: itemValue
  } = useAccordionItemContext();
  return /*#__PURE__*/React.createElement(Collapse, {
    isOpen: itemValue === accordionValue
  }, /*#__PURE__*/React.createElement("div", Object.assign({}, {
    className: "x1iorvi4 x1pi30zi xjkvuk6 x1swvt13 x70k4zr"
  }), children));
};

/**
 * useUncontolled:
 * A component can be controllable or unContollable
 * If the props pass to the component has `value` , we treat the component as controllable
 */
const useUncontrolled = ({
  value,
  onChange = () => {},
  defaultValue
}) => {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
  // controlled
  if (value !== undefined) {
    return [value, onChange];
  }
  // uncontrolled
  return [uncontrolledValue, setUncontrolledValue];
};

const Accordion = ({
  children,
  defaultValue,
  value,
  onChange
}) => {
  const [realValue, setRealValue] = useUncontrolled({
    value,
    defaultValue,
    onChange
  });
  return /*#__PURE__*/React.createElement(AccordionContextProvider, {
    value: {
      value: realValue,
      onChange: setRealValue
    }
  }, children);
};
Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;

exports.Accordion = Accordion;
exports.Avatar = Avatar;
exports.Button = Button;
exports.Collapse = Collapse;
//# sourceMappingURL=beatiful-tree.cjs.map
