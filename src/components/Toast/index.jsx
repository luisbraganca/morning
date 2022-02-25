import useStyle from "./useStyle";

export default function Toast({
  open,
  type,
  style: parentStyle,
  from = "bottom",
  children,
  onClick = () => {},
}) {
  const style = useStyle({ open, type, from });
  return (
    <div onClick={onClick} style={{ ...style.root, ...parentStyle }}>
      {children}
    </div>
  );
}

export const Type = {
  SUCCESS: 1,
  INFO: 2,
  WARNING: 3,
  ERROR: 4,
};
