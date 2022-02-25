import useStyle from "./useStyle";

export default function SearcherForm({
  onChange,
  onSubmit,
  onFocus,
  placeholder,
  inputRef,
  value,
}) {
  const style = useStyle();
  return (
    <form style={style.root} id="searchForm" onSubmit={onSubmit}>
      <input
        value={value}
        ref={inputRef}
        onChange={onChange}
        onFocus={onFocus}
        style={style.input}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        autoFocus
      />
    </form>
  );
}
