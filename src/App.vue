<template>
    <div id='app'>
        <router-view />
    </div>
</template>

<script>
import toast from '@/plugins/toaster'

export default {
    name: 'App',
    created () {
        this.$http.interceptors.response.use(
            function (response) {
                return response
            },
            function (error) {
                if (
                    error.response &&
                    error.response.data &&
                    error.response.data.error_description
                ) {
                    toast.error(error.response.data.error_description)
                } else {
                    toast.error(error.message)
                }

                return Promise.reject(error)
            }
        )
    }
}
</script>

<style lang='scss'>
@import "./styles/scss/common";

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
