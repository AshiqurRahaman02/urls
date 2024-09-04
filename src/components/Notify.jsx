import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (message, type, time= 3000) => {
	toast[type](message, {
		position: "top-right",
		autoClose: time,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	});
};

export default notify;
