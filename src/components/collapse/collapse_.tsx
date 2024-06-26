/**
 * this version donest work, because the force sync layout
 * it will apply auto at first!!
 */
import stylex from "@stylexjs/stylex";
import React, {
  PropsWithChildren,
  // useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { easings } from "../../style/token/easing.stylex";
import "../../style/token/easing.stylex";

export interface CollapseProps {
  /** Open state  */
  isOpen: boolean;
  /** transitionDuration in ms, 200 by default */
  transitionDuration?: number;
  /** transitionTimingFunction, ease by default */
  transitionTimingFunction?: string;
}

const style = stylex.create({
  base: {
    overflow: "hidden",
    transitionProperty: "height, display",
    transitionBehavior: "allow-discrete",
  },
  transition: (
    transitionDuration?: number,
    transitionTimingFunction?: string,
  ) => ({
    transitionDuration,
    transitionTimingFunction,
  }),
  getHeight: (height: number | "auto") => ({
    height,
  }),
  hidden: {
    display: "none",
  },
  show: {
    display: "block",
  },
});

export const Collapse: React.FC<PropsWithChildren<CollapseProps>> = ({
  children,
  isOpen,
  transitionDuration = 200,
  transitionTimingFunction = easings.ease1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const heightRef = useRef<number>();
  const [isFirstMount, setIsFirstMount] = useState(true);

  const realHeight = isOpen
    ? heightRef.current ?? "auto"
    : isFirstMount // 如果是mount的阶段则先将高度设置为auto，保证在layout阶段可获取内容高度，重新render时realHeight会重新变为0
      ? "auto"
      : 0;

  // const handleTransitionEnd = () => {
  //   if (!isOpen) {
  //     ref.current!.style.setProperty("display", "none");
  //   }
  // };

  // if (isOpen && ref.current) {
  //   ref.current.style.setProperty("display", "block");
  // }

  // mount的时候拦截绘制先获取实际内容的高度， 使用useLayout不使用effect可以防止重新渲染导致页面抖动
  useLayoutEffect(() => {
    if (ref.current && isFirstMount) {
      const domHeight = ref.current?.getBoundingClientRect().height;
      heightRef.current = domHeight;
      setIsFirstMount(false);
    }
  }, [isFirstMount]);

  return (
    <div
      ref={ref}
      {...stylex.props(
        style.base,
        style.getHeight(realHeight),
        style.transition(transitionDuration, transitionTimingFunction),
        // isOpen ? style.show : style.hidden,
      )}
      // onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </div>
  );
};
