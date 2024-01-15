/**
 * useUncontolled:
 * A component can be controllable or unContollable
 * If the props pass to the component has `value` , we treat the component as controllable
 */

import { useState } from "react";

interface controlledInput<T> {
  /** Value for controlled state */
  value?: T;
  /** Controlled state onChange handler */
  onChange?: (value: T) => void;
}

interface unContollableInput<T> {
  /** Default value for uncontrolled state */
  defaultValue?: T;
}

type useUncontrolledInput<T> = controlledInput<T> & unContollableInput<T>;

export const useUncontrolled = <T>({
  value,
  onChange = () => {},
  defaultValue,
}: useUncontrolledInput<T>): [T, (value: T) => void] => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

  // controlled
  if (value !== undefined) {
    return [value, onChange];
  }

  // uncontrolled
  return [uncontrolledValue as T, setUncontrolledValue];
};
