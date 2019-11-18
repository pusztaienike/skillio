<template>
    <section>
        <div id="home" v-for="(item, index) in items" :key="index">
            <card :item="item"></card>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Card from '../components/Card';

export default {
    name: 'Home',
    data() {
        return {
            items: [],
            errors: []
        };
    },
    created() {
        axios
            .get(`http://localhost:3000/items`)
            .then(response => {
                this.items = response.data;
            })
            .catch(e => {
                this.errors.push(e);
            });
    },
    components: {
        card: Card
    }
};
</script>

<style>
#home {
}
</style>
