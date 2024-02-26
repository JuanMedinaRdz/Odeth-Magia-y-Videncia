type Space = "small" | "double" | "big" | number;

export const gutter = (size?: Space): string => {
  if (!size) return "6px";

  if (typeof size === "number") {
    return size * 4 + "px";
  }

  switch (size) {
    case "small":
      return "6px";
    case "double":
      return "12px";
    case "big":
      return "32px";
  }
};
