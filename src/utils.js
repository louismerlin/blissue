const req = (url, headers) => new Promise((resolve, reject) => {
	const request = new XMLHttpRequest();
	request.open('GET', url, true);

	Object.keys(headers).forEach(header =>
		request.setRequestHeader(header, headers[header])
	)

	request.onload = () => {
		if (request.status >= 200 && request.status < 400) {
			const data = JSON.parse(request.responseText);
			resolve(data);
		}
		else {
			// We reached our target server, but it returned an error
			reject(request.status);
		}
	};

	request.onerror = () => {
		// There was a connection error of some sort
		reject('Connection error');
	};

	request.send();
});

const ga = () => {
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

  gtag('config', 'UA-105326072-5');
}

export { req, ga };
