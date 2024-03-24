import css from "./SearchBar.module.css";

const SearchBar = () => {
	return (
		<header className={css.Searchbar}>
			<form className={css.SearchForm}>
				<input
					className={css.SearchFormInput}
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images and photos"
				/>
				<button className={css.SearchFormButton} type="submit">
					🔍Search
				</button>
			</form>
		</header>
	);
};

export default SearchBar;
