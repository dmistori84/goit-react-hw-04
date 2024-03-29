import toast from "react-hot-toast";
import { useState } from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
	const [value, setValue] = useState("");

	const handleSubmit = event => {
		event.preventDefault();
		if (!value.trim()) return toast.error("Enter your request");
		onSearch(value);
		// setValue("");
	};

	const handleChange = event => {
		setValue(event.target.value);
	};

	return (
		<header className={css.Searchbar}>
			<form onSubmit={handleSubmit} className={css.SearchForm}>
				<input
					className={css.SearchFormInput}
					onChange={handleChange}
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
