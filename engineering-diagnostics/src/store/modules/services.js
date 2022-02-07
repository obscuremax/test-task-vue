export default {
	state: {
		services: {
			title: "Услуги",
			descr: "Выполняем как комплексное обследование, так и отдельные виды работ"
		},
		card: [
			{
				id: 1,
				src: require('../../assets/image/content/card-1.png'),
				alt: "img",
				title: "Общее обследование",
				descr: "Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д.",
				link: "Подробнее",
				href: "/",
				linkImgSrc: require('../../assets/image/icons/arrow.svg'),
				linkImgAlt: "button",
			},
			{
				id: 2,
				src: require('../../assets/image/content/card-2.png'),
				alt: "img",
				title: "Тепловизионная съемка",
				descr: "Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания",
				link: "Подробнее",
				href: "/",
				linkImgSrc: require('../../assets/image/icons/arrow.svg'),
				linkImgAlt: "button",
			},
			{
				id: 3,
				src: require('../../assets/image/content/card-3.png'),
				alt: "img",
				title: "Телеинспекция инженерных сетей",
				descr: "Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров",
				link: "Подробнее",
				href: "/",
				linkImgSrc: require('../../assets/image/icons/arrow.svg'),
				linkImgAlt: "button",
			},
			{
				id: 4,
				src: require('../../assets/image/content/card-4.png'),
				alt: "img",
				title: "Тахеометрическая съемка",
				descr: "Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве",
				link: "Подробнее",
				href: "/",
				linkImgSrc: require('../../assets/image/icons/arrow.svg'),
				linkImgAlt: "button",
			},
		]
	},
	actions: {},
	mutations: {},
	getters: {
		SERVICES(state) {
			return state.services
		},
		CARD(state) {
			return state.card
		}
	}
}