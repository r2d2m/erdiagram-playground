<template>
    <tr>
        <td class="setting-description">
            {{ description }}:
        </td>
        <td class="setting-value">
            <slot/>
        </td>
        <td style="width: 58px">
            <Button
                    title="Restore default value"
                    rounded
                    small
                    icon="fas fa-undo-alt"
                    @click="$emit('restoreDefault')"
            ></Button>
        </td>
    </tr>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import Button from '@/components/generic/form/Button.vue';
    import ERDiagramPlaygroundConfig from '@/config/ERDiagramPlaygroundConfig';

    interface Props {
        config: ERDiagramPlaygroundConfig;
    }

    export default defineComponent({
        name: 'SettingRow',
        emits: ['restoreDefault'],
        components: {Button},
        props: {
            description: {
                type: String,
                required: true
            }
        }
    });
</script>
