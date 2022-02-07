export default {
	state: {
		work: {
			work: {
				title: ["Мы работаем быстро", "и наши отчеты проходят", "согласование с первого раза"],
				descr: ["Над вашим объектом работает целая команда:", "3 ГИПа (главных инженеров проектов) с опытом работы", "от 6 лет и 2 штатных сотрудника для камеральных работ"]
			},
			caption: "Вы и Ваши архитекторы получаете:",
			workList: [
				{
					id: 1,
					src: require('@/assets/image/icons/icon.svg'),
					alt: "number",
					name: "Отчет на который на 100% можно положиться "
				},
				{
					id: 2,
					src: require('@/assets/image/icons/icon.svg'),
					alt: "number",
					name: "Экономию времени и прогнозируемость сроков"
				},
				{
					id: 3,
					src: require('@/assets/image/icons/icon.svg'),
					alt: "number",
					name: "Предварительные результаты сразу на месте"
				},
			]
		}
	},
	actions: {},
	mutations: {},
	getters: {
		WORK(state) {
			return state.work.work
		},
		CAPTION(state) {
			return state.work.caption
		},
		WORKLIST(state) {
			return state.work.workList
		}
	}
}