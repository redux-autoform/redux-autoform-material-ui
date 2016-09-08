import fetch from 'isomorphic-fetch';

export default function callApi(apiUrl, method = 'get', body) {
	return fetch(`${apiUrl}`, {
		headers: { 'content-type': 'application/json' },
		method,
		body: JSON.stringify(body),
	});
}