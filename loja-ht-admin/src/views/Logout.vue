<template>
    <div>

    </div>
</template>

<script>
    export default {
        mounted() {
            this.logout()
        },
        methods: {
            logout() {
                localStorage.setItem("usuarioLogado", "")
                this.$router.push('/')
                location.reload()
            }
        },
    }
</script>

<style>

</style>