import createStore from "unistore"

import axios from "axios"


const url = "https://api-todofancy.herokuapp.com/api/movies"

const globState = {
    username: "",
    password: "",
    logged_in: false,
    list: []
}

export const store = createStore(globState)

export const actions = store => ({
    handleInput: (state, dict) => {
        return { [dict.key] : dict.value }
    },

    reload: async (state, argument) => {
        let local;
        axios.get(url)
            .then(function(response) {
                local = response.data;
            })
            .catch()
        local = local.movies.filter(function(movie) { return movie.Category === argument})
        return { list: local}
    }
})