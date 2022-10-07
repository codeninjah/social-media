<template>
    <div>
        <RegisterForm />
        <LoginForm />
    </div>
</template>


<script>
import LoginForm from '../components/Login.vue'
import RegisterForm from '../components/Register.vue'

export default {
    name: 'RegisterLogInView',
    components: {
        LoginForm, RegisterForm
    }
}
</script>