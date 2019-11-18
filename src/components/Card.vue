<template>
    <a :href="item.url" class="card">
        <h4>{{ item.title }}</h4>
        <div class="img-wrapper"><img :src="item.thumbnail" /></div>
        <div>{{ item.description }}</div>
        <div class="label-container">
            <label-button
                :label="label"
                v-for="(label, index) in item.labels"
                :key="index"
            ></label-button>
        </div>
    </a>
</template>

<script>
import LabelButton from './LabelButton';

export default {
    name: 'Card',
    props: {
        item: {
            type: Object,
            default: null
        }
    },
    components: {
        'label-button': LabelButton
    }
};
</script>

<style scoped lang="scss">
.card {
    background-color: $primary;
    padding: 1rem;
    border: 1px solid $border-color;

    > div,
    h4 {
        padding: 0.5rem;
        font-weight: 500;
    }

    .label-container {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
    }

    .img-wrapper {
        justify-content: center;
        display: flex;

        img {
            width: 50%;
            height: 50%;
        }
    }

    &:hover {
        background-color: $hovered-color;
        cursor: pointer;
    }
}
</style>
