export default {
	state: {
		step: {
				title: "Подготовительные работы",
				descr: "Мы осматриваем здание, делаем замеры и проверяем наличие визуально заметных дефектов: трещин, коррозии, повреждения фундамента и т.д. ",
				blockquote: "“Задача этого этапа получить максимально полное представление о конструкции здания, условиях его эксплуатации и возможных слабых местах“",
				author: "АЛЕКСЕЙ, обследователь и главный инженер проектов",
				src: require('@/assets/image/content/man.png'),
				alt: "author"
		},
		slides: [
			{
				src: require('@/assets/image/content/slider.png')
			},
			{
				src: require('@/assets/image/content/workers.png')
			},
			{
				src: require('@/assets/image/content/slider.png')
			},
			{
				src: require('@/assets/image/content/workers.png')
			},
		]
	},
	actions: {},
	mutations: {},
	getters: {
		STEP(state) {
			return state.step
		},
		SLIDES(state) {
			return state.slides
		}
	}
}