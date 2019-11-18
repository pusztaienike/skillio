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

<style scoped lang="scss"></style>
