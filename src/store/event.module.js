import Vue from 'vue'
import { eventService } from '@/services';
import router from '@/router'

const categories = [];
const state = { 
    categories: [], 
    status: { categoriesStatus: false }
};

const actions = {
    getCategories({ dispatch, commit }) {
        commit('categoriesRequest');
    
        eventService.getCategories()
            .then(
                categories => {
                    console.log(categories, 'categories');
                    commit('categoriesSuccess', categories);
                },
                error => {
                    commit('categoriesFailed', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};

const mutations = {
    categoriesRequest(state) {
        state.status.categoriesStatus = false;
        state.categories = [];
    },
    categoriesSuccess(state, categories) {
        state.status.categoriesStatus = true;
        state.categories = categories;
    },
    categoriesFailed(state) {
        state.status.categoriesStatus = false;
        state.categories = [];
    }
};

export const events = {
    namespaced: true,
    state,
    actions,
    mutations
};