const ErrorMessage = ({ error }) => {
	return (
		<div>
			{error && (
				<p>Whoops, something went wrong! Please try reloading this page!</p>
			)}
		</div>
	);
};

export default ErrorMessage;
