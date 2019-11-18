<template>
    <section>
        <div id="home" v-if="errors.length === 0">
            <card
                :item="item"
                v-for="(item, index) in items"
                :key="index"
            ></card>
        </div>
        <div v-else>
            <h1>
                Something went wrong... Please check details below or try again
                later!
            </h1>
            <br />
            <span v-for="(error, index) in errors" :key="index">{{
                error
            }}</span>
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

<style scoped lang="scss">
#home {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);

    @include media(viewport-4) {
        grid-template-columns: repeat(1, 1fr);
    }

    @include media(viewport-7) {
        grid-template-columns: repeat(2, 1fr);
    }

    @include media(viewport-9, viewport-12) {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
