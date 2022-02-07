export default {
	state: {
		head: {
			examination: {
				title: "Независимое обследование зданий и сооружений",
				descr: "антенн, труб, теплосетей, канализаций	и других объектов строительства"
			},
			sendText: "Отправьте техзадание и получите коммерческое предложение в течении 15 минут на свой email или в мессенджер",
			list: [
				{
					id: 1,
					src: require('../../assets/image/icons/01.svg'),
					alt: "number",
					name: "Начинаем работать без аванса"
				},
				{
					id: 2,
					src: require('../../assets/image/icons/02.svg'),
					alt: "number",
					name: "Предоставляем отсрочку платежа"
				},
				{
					id: 3,
					src: require('../../assets/image/icons/03.svg'),
					alt: "number",
					name: "Всегда называем справедливую цену"
				},
			]
		}
	},
	actions: {},
	mutations: {},
	getters: {
		EXAMINATION(state) {
			return state.head.examination
		},
		SENDTEXT(state) {
			return state.head.sendText
		},
		LIST(state) {
			return state.head.list
		}
	}
}