const url =
	"https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=6ddb2620a9b84df981532e328bfaa275";

const resultsContainer = document.querySelector(".results");

async function getRAWG() {
	const response = await fetch(url);

	const data = await response.json();
	console.log(data);

	const info = data.results;
	resultsContainer.innerHTML = "";

	for (let i = 0; i < info.length; i++) {
		console.log(info[i].text);

		if (i === 8) {
			break;
		}

		resultsContainer.innerHTML += `<div class="result">${info[i].rating}</div>`;
		resultsContainer.innerHTML += `<div class="result">${info[i].name}</div>`;
		resultsContainer.innerHTML += `<div class="result">${info[i].slug}</div>`;
	}
}

getRAWG();
