import { useState } from "react";
import logo from "../images/urls-logo.png";
import text from "../images/urls-text.png";
import { useEffect } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Header() {
	const [userDetails, setUserDetails] = useState(null);
	const [display, setDisplay] = useState(null);
	useEffect(() => {
		const userDetails = localStorage.getItem("userInfo");
		if (userDetails !== null) {
			const parsedUserDetails = JSON.parse(userDetails);
			setUserDetails(parsedUserDetails);
		}
	}, []);
	return (
		<>
			<header className="header padding-xy flex items-center justify-between">
				<div className="logo flex items-center justify-center gap-x-5 gap-y-2  flex-wrap ">
					<img src={logo} alt="logo" width={50} />
					<img src={text} alt="logo" width={160} />
				</div>
				<div className="flex justify-between items-center gap-5">
					<div>
						{userDetails ? (
							<>
								<button
									style={{ background: "#2F27FF" }}
									variant="contained"
									className="py-2 px-5 text-lg text-white"
								>
									{userDetails?.name[0].toUpperCase() +
										userDetails?.name.slice(1)}
								</button>
							</>
						) : (
							<>
								<button
									variant="contained"
									onClick={()=>setDisplay("register")}
									className="py-2 px-5 text-lg text-black border bg-gray-100"
								>
									Sign up
								</button>{" "}
								&nbsp;
								<button
									variant="outlined"
									style={{ background: "#2F27FF" }}
									onClick={()=>setDisplay("login")}
									className="py-2 px-5 text-lg text-white"
								>
									Sign in
								</button>
							</>
						)}
					</div>
				</div>
			</header>
			{display === "login" && <SignIn setDisplay={setDisplay}/>}
			{display === "register" && <SignUp setDisplay={setDisplay}/>}
		</>
	);
}
