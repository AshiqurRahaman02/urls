import { useState } from "react";

export default function UrlList(props) {
	const urlList = props.urlList;
	const [copiedIndex, setCopiedIndex] = useState(null);

	const handleCopy = (shortUrl, index) => {
		navigator.clipboard.writeText(shortUrl);
		setCopiedIndex(index);

		setTimeout(() => {
			setCopiedIndex(null);
		}, 3000);
	};

	return (
		<ul className="list grid grid-cols-1 gap-5">
			{urlList.map((element, index) => {
				return (
					<li className="list-item" key={index} id={index}>
						<div className="links">
							<a href={element.url} className="full-url">
								{element.url.slice(0, 100)}
							</a>
							<a
								href={element.shortUrl}
								className="short-url font-medium"
							>
								{element.shortUrl}
							</a>
						</div>
						<div className="flex items-center justify-center gap-x-5 gap-y-2 flex-wrap">
							<button
								type="button"
								className="btn-cta btn-copy flex gap-1 items-center"
								onClick={() => window.open(element.shortUrl, "_blank")}
							>
								Open
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 -960 960 960"
									width="24px"
									fill="#e8eaed"
								>
									<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
								</svg>
							</button>
							<button
								type="button"
								className="btn-cta btn-copy flex gap-1 items-center"
								onClick={() => handleCopy(element.shortUrl, index)}
							>
								{copiedIndex === index ? "Copied!" : "Copy"}
                                {copiedIndex !== index && <svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 -960 960 960"
									width="24px"
									fill="#e8eaed"
								>
									<path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
								</svg>}
								
							</button>
						</div>
					</li>
				);
			})}
		</ul>
	);
}
