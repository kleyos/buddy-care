export default [
	{
		'id': '5a58b89af043b25999236cff',
		'name': 'Burnett Osborn',
		'imageUrl': "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
		'wishes': [],
		'offers': []
	},
	{
		'id': '1588354881245781',
		'name': 'Olga Yerushenko',
		'imageUrl': "https://scontent.xx.fbcdn.net/v/t1.0-1/c5.0.720.720/p720x720/14563577_1127376904010250_919151102378859017_n.jpg?oh=fa4ce48bfcda63b838d9402c87eeeaf1&oe=5ADE7E7B",
		'wishes': [
			{
				'wish': 'laborum',
				'status': 'waiting'
			},
			{
				'wish': 'labore',
				'status': 'accepted'
			},
			{
				'wish': 'nulla',
				'status': 'waiting'
			},
			{
				'wish': 'veniam',
				'status': 'waiting'
			},
			{
				'wish': 'cupidatat',
				'status': 'waiting'
			},
			{
				'wish': 'dolor',
				'status': 'waiting'
			},
			{
				'wish': 'magna',
				'status': 'waiting'
			}
		],
		'offers': [
			{
				'offer': 'nisi culpa ipsum',
				'status': 'removed'
			},
			{
				'offer': 'qui amet ea',
				'status': 'accepted'
			},
			{
				'offer': 'proident incididunt nostrud',
				'status': 'removed'
			}
		]
	},
	{
		'id': '5a58b89a2f65d820dcb54b57',
		'name': 'Ramirez Forbes',
		'imageUrl': "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
		'wishes': [
			{
				'wish': 'elit',
				'status': 'waiting'
			},
			{
				'wish': 'voluptate',
				'status': 'accepted'
			},
			{
				'wish': 'qui',
				'status': 'waiting'
			},
			{
				'wish': 'laboris',
				'status': 'waiting'
			},
			{
				'wish': 'qui',
				'status': 'removed'
			},
			{
				'wish': 'nulla',
				'status': 'waiting'
			},
			{
				'wish': 'est',
				'status': 'removed'
			}
		],
		'offers': [
			{
				'offer': 'incididunt id occaecat',
				'status': 'waiting'
			},
			{
				'offer': 'veniam aliqua duis',
				'status': 'waiting'
			},
			{
				'offer': 'id eu exercitation',
				'status': 'waiting'
			}
		]
	},
	{
		'id': '5a58b89a5f50b792c5010645',
		'name': 'Virgie Cabrera',
		'imageUrl': "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
		'wishes': [
			{
				'wish': 'quis',
				'status': 'accepted'
			},
			{
				'wish': 'aliquip',
				'status': 'waiting'
			},
			{
				'wish': 'cillum',
				'status': 'accepted'
			},
			{
				'wish': 'in',
				'status': 'removed'
			},
			{
				'wish': 'laborum',
				'status': 'accepted'
			},
			{
				'wish': 'aliquip',
				'status': 'waiting'
			},
			{
				'wish': 'do',
				'status': 'accepted'
			}
		],
		'offers': [
			{
				'offer': 'labore magna esse',
				'status': 'accepted'
			},
			{
				'offer': 'mollit non duis',
				'status': 'removed'
			},
			{
				'offer': 'proident quis minim',
				'status': 'waiting'
			}
		]
	},
	{
		'id': '5a58b89aae7a46c9ab11c92b',
		'name': 'Adriana Cherry',
		'imageUrl': "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
		'wishes': [
			{
				'wish': 'mollit',
				'status': 'accepted'
			},
			{
				'wish': 'dolor',
				'status': 'accepted'
			},
			{
				'wish': 'consequat',
				'status': 'removed'
			},
			{
				'wish': 'dolor',
				'status': 'removed'
			},
			{
				'wish': 'aliquip',
				'status': 'removed'
			},
			{
				'wish': 'in',
				'status': 'accepted'
			},
			{
				'wish': 'anim',
				'status': 'waiting'
			}
		],
		'offers': [
			{
				'offer': 'magna tempor dolore',
				'status': 'accepted'
			},
			{
				'offer': 'et magna proident',
				'status': 'waiting'
			},
			{
				'offer': 'ut dolore excepteur',
				'status': 'accepted'
			}
		]
	}
];

// [
//   '{{repeat(5, 7)}}',
//   {
//     _id: '{{objectId()}}',
//     name: '{{firstName()}} {{surname()}}',
//	   imageURL: url
//     wishes: [
//       '{{repeat(7)}}',
//       {
//         wish: '{{lorem(1, "words")}}',
//         status: '{{random("waiting", "removed", "accepted")}}'
//       }
//     ],
//     offers: [
//       '{{repeat(3)}}',
//       {
//         offer: '{{lorem(3, "words")}}',
//         status: '{{random("waiting", "removed", "accepted")}}'
//       }
//     ]
//   }
// ]