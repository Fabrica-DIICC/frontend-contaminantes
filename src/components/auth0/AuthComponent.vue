<template>
    <LoadingComponent></LoadingComponent>
</template>
<script setup>
import { useAuth0 } from '@auth0/auth0-vue';
import LoadingComponent from '../LoadingComponent.vue'
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth'

const auth0 = useAuth0()
const store = useAuthStore()
const router = useRouter()

if (auth0.isAuthenticated.value) {

    console.log(auth0.user.value)
    router.push({ path: '/app/filtros', replace: true })
}

</script>