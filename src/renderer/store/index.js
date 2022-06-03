function importAll(r) {
    r = r.keys().map(path => r(path))
    return r
}


export const state = () => ({
    modalStatus: '',
    pageStatus:'',
    modal: false,
    mainMenu: true,
    imgs: {
        learn: {
            svg: importAll(require.context('~/assets/learn/prez/', false, /.*\.svg$/))
        },
        partners: {
            workers: {
                title: 'Мероприятия для работников',
                jpg: importAll(require.context("~/assets/partners/workers", false, /./))
            },
            volonters: {
                title: 'Волонтерское движение',
                svg: importAll(require.context('~/assets/partners/volonters/prez/', false, /.svg/)),
                jpg: importAll(require.context("~/assets/partners/volonters", false, /./))
            },
            profsouz: {
                title: 'Профсоюзный комитет',
                jpg: importAll(require.context("~/assets/partners/profsouz", false, /./)),
                names: require.context("~/assets/partners/profsouz", false, /./).keys()
            },
            social: {
                title: 'Приоритеты социальной политики',
                jpg: importAll(require.context("~/assets/partners/social", false, /./)),
                info: {
                    title: ['Коллективный договор:', 'Приоритеты социальной политики:'],
                    text: [
                        'На предприятии действует Коллективный договор, заключенный на период с 2022-2025 годы.',
                        'повышение привлекательности работодателя на рынке труда и лояльности работников,\n привлечение и удержание молодых и высококвалифицированных специалистов,\n оказание поддержки работникам, членам их семей, ветеранам атомной отрасли.'
                    ]
                }
            },
            veterans: {
                title: 'Совет Ветеранов',
                jpg: importAll(require.context("~/assets/partners/veterans", false, /./)),
                info: {
                    title: ['Работа с ветеранами.'],
                    text: [
                        'На предприятии действует Совет ветеранов, входящий в  Межрегиональное общественное движение ветеранов атомной энергетики и промышленности (МОДВ  АЭП). Председатель Совета ветеранов Пухонто Игорь Яковлевич',
                        'Совет ветеранов объединяет более 400 неработающих ветеранов отрасли, бывших работников предприятия.',
                        'Ежегодно проводятся встречи ветеранов, памятные мероприятия, посвященные  освобождению Ленинграда от фашистской блокады (более 90 пенсионеров являются ветеранами войны, награжденными знаком «Жителю блокадного Ленинграда»), Дню победы, памятным датам атомной отрасли и предприятия.'
                    ]
                }
            },
            youngs: {
                title: 'Совет Молодежи',
                composition: {
                    title: 'Состав',
                    svg: importAll(require.context('~/assets/partners/youngs/composition', false, /.svg/))
                },
                direction: {
                    title: 'Направления деятельности',
                    svg: importAll(require.context('~/assets/partners/youngs/direction', false, /.svg/))
                }
            }

        }
    }
})

export const getters = {
    partners(state) {
        return state.imgs.partners
    },
    learn(state) {
        return state.imgs.learn
    },
    modalStatus(state) {
        return state.modalStatus
    },
    modal(state) {
        return state.modal
    },
    pageStatus(state) {
        return state.pageStatus
    }
}


export const mutations = {
    CHANGE_MODAL_STATUS(state, modalStatus) {
        state.modalStatus = modalStatus;
    },
    SWITCH_MODAL(state) {
        state.modal = !state.modal;
    },
    CHANGE_PAGE_STATUS(state, pageStatus) {
        state.pageStatus = pageStatus
    }
}



