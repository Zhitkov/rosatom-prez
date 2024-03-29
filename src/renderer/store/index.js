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
                title: 'ПРИОРИТЕТЫ СОЦИАЛЬНОЙ ПОЛИТИКИ',
                svg: importAll(require.context("~/assets/partners/social", false, /./)),
            },
            workers: {
                title: 'МЕРОПРИЯТИЯ ДЛЯ РАБОТНИКОВ',
                jpg: importAll(require.context("~/assets/partners/workers", false, /./))
            },
            volonters: {
                title: 'ВОЛОНТЕРСКОЕ ДВИЖЕНИЕ',
                svg: importAll(require.context('~/assets/partners/volonters/prez/', false, /.svg/)),
                jpg: importAll(require.context("~/assets/partners/volonters", false, /./))
            },
            profsouz: {
                title: 'ПРОФСОЮЗНЫЙ КОМИТЕТ',
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
                title: 'СОВЕТ МОЛОДЕЖИ',
                composition: {
                    title: 'СОСТАВ',
                    svg: importAll(require.context('~/assets/partners/youngs/composition', false, /.svg/))
                },
                direction: {
                    title: 'НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ',
                    svg: importAll(require.context('~/assets/partners/youngs/direction', false, /.svg/))
                }
            },
            veterans: {
                title: 'СОВЕТ ВЕТЕРАНОВ',
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



