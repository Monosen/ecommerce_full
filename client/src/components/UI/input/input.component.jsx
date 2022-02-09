import { forwardRef } from "react";

const Input = forwardRef(({ input, label, styles }, ref) => {
	return (
		<>
			{/* <label htmlFor={input.id}>{label}</label> */}
			<input
				className={`border py-1.5 px-2 ${styles}`}
				ref={ref}
				{...input}
				placeholder={label}
				required
			/>
		</>
	);
});

export default Input;
