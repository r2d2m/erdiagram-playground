<template>
    <SettingsTabSection title="PostgreSQL settings">
        <CommonDatabaseSettingsTable
                :database-model-generator-config="config.postgresql.databaseModelGeneratorConfig"
                :database-model-to-code-converter-config="config.postgresql.dialectConfig"
                :default-sql-dialect-config="defaultSqlDialectConfig"
        />

        <TypeBindingsTable
                target-lang="PostgreSQL"
                :type-bindings="config.postgresql.dialectConfig.typeBindings"
                :default-type-bindings="defaultSqlDialectConfig.typeBindings"
        />
    </SettingsTabSection>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import TypeBindingsTable from '@/components/config-modal/tabs/TypeBindingsTable.vue';
    import CommonDatabaseSettingsTable from '@/components/config-modal/tabs/database/CommonDatabaseSettingsTable.vue';
    import SettingsTabSection from '@/components/config-modal/tabs/SettingsTabSection.vue';
    import {postgresqlDialectConfigManager} from '@nestorrente/erdiagram';

    export default defineComponent({
        name: 'PostgresqlTabContent',
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
                defaultSqlDialectConfig: postgresqlDialectConfigManager.getDefaultConfig()
            };
        }
    });
</script>
