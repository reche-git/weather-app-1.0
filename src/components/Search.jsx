import style from "../Style/Search.module.css";


export default function Search({ setQuery, query, search }) {
  return (
    <form className={style.form}>
      <label></label>
      <input
        className={style.input}
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      ></input>
    </form>
  );
}
