export default {
	state: {
		header: {
			menu: [
				{
					id: 1,
					name: 'О нас',
					href: "/"
				},
				{
					id: 2,
					name: 'Услуги',
					href: "/"
				},
				{
					id: 3,
					name: 'Шаг №1',
					href: "/"
				},
			],
			logo: {
				src: require('../../assets/image/icons/logo.svg'),
				href: "/",
				name: "logo"
			},
			contacts: [
				{
					id: 1,
					title: "Пишите нам на email",
					link: "info@diagnistics.by",
					imgTitle: false,
					imgDescr: true,
					descrSrc: require('../../assets/image/icons/mail.svg'),
					descrAlt: "foto",
					type: "email",
					email: "info@diagnistics.by"
				},
				{
					id: 2,
					title: "Есть вопросы? Звоните!",
					link: "+375 (29) 456-45-45",
					imgTitle: true,
					imgDescr: false,
					titleSrc: require('../../assets/image/icons/phone.svg'),
					titleAlt: "foto",
					type: "tel",
					tel: "+375294564545"
				},
			]
		}
	},
	actions: {},
	mutations: {},
	getters: {
		MENU(state) {
			return state.header.menu
		},
		LOGO(state) {
			return state.header.logo
		},
		CONTACTS(state) {
			return state.header.contacts
		}
	}
}