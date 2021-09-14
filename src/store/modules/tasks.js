import axios from 'axios';

const state = ()=> {
    return {
        tasks: ''
    }
}

const getters = {
    GetTasks(state) {
        if(state.tasks !== null && state.tasks !== undefined) {
            return state.tasks
        }
        return null
    }
}

const mutations = {
    SET_TASKS_STATE(state, payload) {
        state.tasks = payload
    }
}

const actions = {
    async FetchTasks(context) {
        try {
            const response = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}tasks`,  { crossdomain: true })
            context.commit('SET_TASKS_STATE', response.data.data)
        } catch (error) {
            console.log(error.response)
        }
    },
    async MarkTaskProgress(context, payload) {
        try {
            await axios.patch(`${process.env.VUE_APP_API_ENDPOINT}tasks/${payload.id}`,payload.data)
            context.dispatch('FetchTasks')
        } catch (error) {
            console.log(error.response)
        }
    },
    async DeleteTask(context, payload) {
        try {
            await axios.delete(`${process.env.VUE_APP_API_ENDPOINT}tasks/${payload.id}`)
            context.dispatch('FetchTasks')
        } catch (error) {
            console.log(error.response)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}