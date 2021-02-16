import {
	ClassModelToCodeConverterSerializedConfig,
	DatabaseModelGeneratorSerializedConfig,
	DatabaseModelToCodeConverterSerializedConfig,
	EntityRelationshipModelParserSerializedConfig,
	JavaClassModelToCodeConverterSerializedConfig,
	MySqlDatabaseModelToCodeConverterSerializedConfig,
	OracleDatabaseModelToCodeConverterSerializedConfig,
	SqlServerDatabaseModelToCodeConverterSerializedConfig,
	TypeScriptClassModelToCodeConverterSerializedConfig
} from '@nestorrente/erdiagram';

export default interface ERDiagramPlaygroundSerializedConfig {
	_version: string;
	erModelParser: EntityRelationshipModelParserSerializedConfig;
	mysql: DatabaseDialectSerializedConfig<MySqlDatabaseModelToCodeConverterSerializedConfig>;
	sqlserver: DatabaseDialectSerializedConfig<SqlServerDatabaseModelToCodeConverterSerializedConfig>;
	oracle: DatabaseDialectSerializedConfig<OracleDatabaseModelToCodeConverterSerializedConfig>;
	java: ClassLanguageSerializedConfig<JavaClassModelToCodeConverterSerializedConfig>;
	typescript: ClassLanguageSerializedConfig<TypeScriptClassModelToCodeConverterSerializedConfig>;
}

export interface DatabaseDialectSerializedConfig<T extends DatabaseModelToCodeConverterSerializedConfig> {
	databaseModelGeneratorConfig: DatabaseModelGeneratorSerializedConfig;
	databaseModelToCodeConverterConfig: T;
}

export interface ClassLanguageSerializedConfig<T extends ClassModelToCodeConverterSerializedConfig> {
	classModelToCodeConverterConfig: T;
}
