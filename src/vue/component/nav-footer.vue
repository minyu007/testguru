<template>
	<nav class="fixed-bottom bg-white border-top">
        <ul class="nav nav-icons nav-fill">
            <li class="nav-item">
                <router-link to="/" class="nav-link"  :class='{active: active=="course"}'>
                    <i class="dr dripicons-home fa-2x" aria-hidden="true"></i>
                    <span class="d-block mt-1">课程</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/user" class="nav-link" :class='{active: active=="user"}'>
                    <i class="dr dripicons-user fa-2x" aria-hidden="true"></i>
                    <span class="d-block mt-1">我</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    const COMPONENT_NAME = 'nav-footer'
    export default {
        name: COMPONENT_NAME,

        props: ['active']
    }
</script>