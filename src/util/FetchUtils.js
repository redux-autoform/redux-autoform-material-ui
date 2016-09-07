import fetch from 'isomorphic-fetch';

class FetchUtils {

	static async fetch(url, options = {}) {
		try {
			let response = await fetch(url, options);
			return await response.json();
		}
		catch (error) {
			console.info(
				`There was an error when trying to fetch resource from ${url} 
				with the following options ${JSON.stringify(options, null, 2)} 
				and the error was ${JSON.stringify(error, null, 2)}`
			)
		}
	}
}

export default FetchUtils;