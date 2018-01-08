<template>
    <div class="create-page pb-5">
        <div class='container'>
        	<input type="text" v-model='mday'>
        	<button @click='create()'>create today data</button>
        	<button @click='createByPhone()'>create today data by phone</button>
        	<button @click='reduplicate()'>reduplicate daily data</button>
        	<button @click='analysis()'>analysis daily data</button>
        </div>
    </div>
</template>
<script src='../func/create.js'></script>
<style scoped>
</style>