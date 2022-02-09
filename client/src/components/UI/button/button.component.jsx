const Button = ({ onClick, label, type, styles }) => {
	return (
		<button
			className={`border p-2 ${styles}`}
			onClick={onClick}
			type={type || "submit"}
		>
			{label}
		</button>
	);
};

export default Button;
