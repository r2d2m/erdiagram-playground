<template>
    <SettingsTabSection title="SQLite settings">
        <CommonDatabaseSettingsTable
                :database-model-generator-config="config.sqlite.databaseModelGeneratorConfig"
                :database-model-to-code-converter-config="config.sqlite.dialectConfig"
                :default-sql-dialect-config="defaultSqlDialectConfig"
        />

        <TypeBindingsTable
                target-lang="SQLite"
                :type-bindings="config.sqlite.dialectConfig.typeBindings"
                :default-type-bindings="defaultSqlDialectConfig.typeBindings"
        />
    </SettingsTabSection>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import TypeBindingsTable from '@/components/config-modal/tabs/TypeBindingsTable.vue';
    import CommonDatabaseSettingsTable from '@/components/config-modal/tabs/database/CommonDatabaseSettingsTable.vue';
    import SettingsTabSection from '@/components/config-modal/tabs/SettingsTabSection.vue';
    import {sqliteDialectConfigManager} from '@nestorrente/erdiagram';

    export default defineComponent({
        name: 'SqliteTabContent',
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
                defaultSqlDialectConfig: sqliteDialectConfigManager.getDefaultConfig()
            };
        }
    });
</script>
