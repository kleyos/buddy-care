
export function genarateListOfObject(item) {
	const wishes = item.wishes.map(wish => ({
		id: item.id,
		name: item.name,
		pic: item.imageUrl,
		text: wish.wish,
		status: wish.status,
		type: 'wish',
	}));
	const offers = item.offers.map(offer => ({
		id: item.id,
		name: item.name,
		pic: item.imageUrl,
		text: offer.offer,
		status: offer.status,
		type: 'offer',
	}));
	return wishes.concat(offers);
}