import { act, renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { useUncontrolled } from "./useUncontrolled";

describe("useUncontrolled", () => {
  it("support controlled state", async () => {
    const spy = vi.fn();
    const { result } = renderHook(() =>
      useUncontrolled({
        value: "default-value",
        onChange: spy,
      }),
    );

    expect(result.current[0]).toBe("default-value");

    act(() => result.current[1]("change-value"));
    expect(spy).toBeCalledWith("change-value");
  });

  it("supports uncontrolled state", () => {
    const view = renderHook(() =>
      useUncontrolled({ defaultValue: "default-value" }),
    );
    act(() => view.result.current[1]("change-value"));
    expect(view.result.current[0]).toBe("change-value");
  });
});
