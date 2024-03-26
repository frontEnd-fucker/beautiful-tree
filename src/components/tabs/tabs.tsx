import stylex from "@stylexjs/stylex";
import React, { ReactNode, cloneElement } from "react";

import { useUncontrolled } from "../../hooks/useUncontrolled";

export interface ItemProps {
  /** The key of this tab item */
  key: React.Key;
  /** The title of this Tab item */
  title: ReactNode;
  /** Children of the tabs. It should be the Tabs.Item */
  children: ReactNode;
  /** determine if a item visible */
  visible?: boolean;
}

export interface TabsProps {
  /** Default open tab, use for uncontrol tabs  */
  defaultKey?: React.Key;
  value?: React.Key;
  onChange?: (key: React.Key) => void;
  /** Children of the tabs. It should be the Tabs.Item */
  children: React.ReactElement<ItemProps>[];
}

// type ItemType = ReactElement<ItemProps, JSXElementConstructor<ItemProps>>;

const styles = stylex.create({
  show: {
    display: "block",
  },
  hide: {
    display: "none",
  },
});

export const Item: React.FC<ItemProps> = ({ visible, children }) => {
  return (
    <div {...stylex.props(visible ? styles.show : styles.hide)}>{children}</div>
  );
};

export const Tabs = ({
  children,
  defaultKey,
  value,
  onChange,
}: TabsProps): React.JSX.Element => {
  const [selectedKey, setSelectedKey] = useUncontrolled({
    value,
    onChange,
    defaultValue: defaultKey,
  });

  const renderTabsHeader = () => {
    return (
      <div>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return;

          if (child.type === Item) {
            // (child as ReactElement<ItemProps, JSXElementConstructor<ItemProps>>).props.title
            return (
              <span onClick={() => setSelectedKey(child.key!)}>
                {child.props.title} /{" "}
              </span>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div>
      {renderTabsHeader()}
      {React.Children.map(children, (child) => {
        const visible = child.key === selectedKey;
        return cloneElement(child, {
          ...child.props,
          visible,
        });
      })}
    </div>
  );
};

Tabs.Item = Item;

Tabs.displayName = "Tabs";
