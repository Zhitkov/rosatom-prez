function importAll(r) {
    r = r.keys().map(path => r(path))
    return r
}


export const state = () => ({
    modalStatus: false,
    pageStatus: '',
    modal: false,
    mainMenu: true,
    imgs: {
        learn: {
            svg: importAll(require.context('~/assets/learn/prez/', false, /.*\.svg$/))
        },
        partners: {
            social: {
                title: 'Приоритеты социальной политики',
                svg: importAll(require.context("~/assets/partners/social", false, /./)),
            },
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
                names: [
                    ["Берёзкин Эдуард Викторович",''],
                    ["Соляр Валерий Романович",''],
                    ["Суслов Алексей Михайлович",''],
                    ["Шунина Юлия Вячеславовна",''],
                    ["Евдокимов Константин Евгеньевич",'Предcедатель профкома'],
                    ["Елисеева Елена Владимировна",''],
                    ["Киселев Антон Викторович",''],
                    ["Малыгин Виктор Сергеевич",''],
                    ["Новиков Владимир Николаевич",''],
                    ["Пряникова Екатерина Викторовна",''],
                    ["Садовская Марина Николаевна",''],
                    ["Сладкова Светлана Анатольевна",'']
                ]
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
            },
            veterans: {
                title: 'Совет Ветеранов',
                svg: importAll(require.context('~/assets/partners/veterans', false, /.svg/))
            },

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
    workers(state) {
        return state.imgs.partners.workers
    },
    profsouz(state) {
        return state.imgs.partners.profsouz
    },
    volonters(state) {
        return state.imgs.partners.volonters
    },
    veterans(state) {
        return state.imgs.partners.veterans
    },
    social(state) {
        return state.imgs.partners.social
    },
    direction(state) {
        return state.imgs.partners.youngs.direction
    },
    composition(state) {
        return state.imgs.partners.youngs.composition
    },
    youngs(state) {
        return state.imgs.partners.youngs
    },
    pageStatus(state) {
        return state.pageStatus
    }
}


export const mutations = {
    CHANGE_MODAL_STATUS(state) {
        state.modalStatus = !state.modalStatus;
    },
    SWITCH_MODAL(state) {
        state.modal = !state.modal;
    },
    CHANGE_PAGE_STATUS(state, pageStatus) {
        state.pageStatus = pageStatus
    }
}



