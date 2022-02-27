import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const index = () => {
	const { id } = useParams();
	const { token } = useSelector((store) => store.session);

	useEffect(() => {
		const handlerFetchData = () => {
			try {
				if (token) {
					const data = axios.get(
						`http://localhost:4000/api/v1//products/${id}`,
						{
							product: {
								id,
								quantity,
							},
							Headers: { Authorization: `Bearer ${token}` },
						}
					);
					console.log(data);
				}
			} catch (error) {
				console.log(error);
			}
		};

		handlerFetchData();
	}, []);

	return <div>info shirt</div>;
};

export default index;
