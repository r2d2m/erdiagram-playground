<template>
    <SettingsTabSection title="MySQL settings">
        <CommonDatabaseSettingsTable
                :database-model-generator-config="config.mysql.databaseModelGeneratorConfig"
                :database-model-to-code-converter-config="config.mysql.dialectConfig"
                :default-sql-dialect-config="defaultSqlDialectConfig"
        />

        <TypeBindingsTable
                target-lang="MySQL"
                :type-bindings="config.mysql.dialectConfig.typeBindings"
                :default-type-bindings="defaultSqlDialectConfig.typeBindings"
        />
    </SettingsTabSection>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import TypeBindingsTable from '@/components/config-modal/tabs/TypeBindingsTable.vue';
    import CommonDatabaseSettingsTable from '@/components/config-modal/tabs/database/CommonDatabaseSettingsTable.vue';
    import SettingsTabSection from '@/components/config-modal/tabs/SettingsTabSection.vue';
    import {mysqlDialectConfigManager} from '@nestorrente/erdiagram';

    export default defineComponent({
        name: 'MysqlTabContent',
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
                defaultSqlDialectConfig: mysqlDialectConfigManager.getDefaultConfig()
            };
        }
    });
</script>
