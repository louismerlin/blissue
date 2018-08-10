const req = url => new Promise((resolve, reject) => {
	const request = new XMLHttpRequest();
	request.open('GET', url, true);

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

export { req };
