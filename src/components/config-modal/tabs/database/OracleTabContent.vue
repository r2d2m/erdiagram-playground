<template>
    <SettingsTabSection title="Oracle settings">
        <CommonDatabaseSettingsTable
                :database-model-generator-config="config.oracle.databaseModelGeneratorConfig"
                :database-model-to-code-converter-config="config.oracle.dialectConfig"
                :default-sql-dialect-config="defaultSqlDialectConfig"
        />

        <TypeBindingsTable
                target-lang="Oracle"
                :type-bindings="config.oracle.dialectConfig.typeBindings"
                :default-type-bindings="defaultSqlDialectConfig.typeBindings"
        />
    </SettingsTabSection>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import TypeBindingsTable from '@/components/config-modal/tabs/TypeBindingsTable.vue';
    import CommonDatabaseSettingsTable from '@/components/config-modal/tabs/database/CommonDatabaseSettingsTable.vue';
    import SettingsTabSection from '@/components/config-modal/tabs/SettingsTabSection.vue';
    import {oracleDialectConfigManager} from '@nestorrente/erdiagram';

    export default defineComponent({
        name: 'OracleTabContent',
        components: {
            SettingsTabSection,
            CommonDatabaseSettingsTable,
            TypeBindingsTable
        },
        props: {
            config: {
                type: Object,
                required: true
            }
        },
        setup() {
            return {
                defaultSqlDialectConfig: oracleDialectConfigManager.getDefaultConfig()
            };
        }
    });
</script>
