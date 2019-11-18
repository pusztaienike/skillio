<template>
    <div class="card">
        <div>{{ item.title }}</div>
        <div><img :src="item.thumbnail" /></div>
        <div>{{ item.description }}</div>
        <div
            class="label-container"
            v-for="(label, index) in item.labels"
            :key="index"
        >
            <label-button :label="label"></label-button>
        </div>
    </div>
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
    img {
        width: 50%;
        height: 50%;
    }
}
</style>
