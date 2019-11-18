<template>
    <div class="label-button">
        {{ label }}
    </div>
</template>

<script>
export default {
    name: 'LabelButton',
    props: {
        label: {
            type: String,
            default: ''
        }
    }
};
</script>

<style scoped lang="scss">
.label-button {
    border-radius: 6px;
    background-color: $secondary;
    padding: 0.2rem 0.3rem 0.2rem;
    margin: 0 0.2rem 0;
    width: 100%;
    height: 100%;
    text-align: center;
}
</style>
