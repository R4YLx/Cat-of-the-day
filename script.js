const baseUrl = "https://cataas.com";

const get = async (url) => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(
			`Response was not OK. Status returned was "${res.status} ${res.statusText}".`
		);
	}

	return await res.json();
};

const getNewCat = async () => {
	try {
		const data = await get(`${baseUrl}/cat?json=true`);
		document.querySelector("#catImg").src = baseUrl + data.url;
	} catch (err) {
		console.error("Sometimes cats a just shy.", err);
	}
};

document.querySelector("#getCatBtn").addEventListener("click", () => {
	getNewCat();
});

getNewCat();
