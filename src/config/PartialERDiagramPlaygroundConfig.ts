import {
	EntityRelationshipModelParserConfig,
	JavaClassModelToCodeConverterConfig,
	MySqlDatabaseModelToCodeConverterConfig,
	NomnomlEntityRelationshipModelToDiagramCodeConverterConfig,
	OracleDatabaseModelToCodeConverterConfig,
	PlantUmlEntityRelationshipModelToDiagramCodeConverterConfig,
	SqlServerDatabaseModelToCodeConverterConfig,
	TypeScriptClassModelToCodeConverterConfig
} from '@nestorrente/erdiagram';
import {ClassLanguageConfig, DatabaseDialectConfig} from '@/config/ERDiagramPlaygroundConfig';

type PartialERDiagramPlaygroundConfig = Partial<{
	_version: string;
	erModelParser: EntityRelationshipModelParserConfig;
	mysql: Partial<DatabaseDialectConfig<MySqlDatabaseModelToCodeConverterConfig>>;
	sqlserver: Partial<DatabaseDialectConfig<SqlServerDatabaseModelToCodeConverterConfig>>;
	oracle: Partial<DatabaseDialectConfig<OracleDatabaseModelToCodeConverterConfig>>;
	java: Partial<ClassLanguageConfig<JavaClassModelToCodeConverterConfig>>;
	typescript: Partial<ClassLanguageConfig<TypeScriptClassModelToCodeConverterConfig>>;
	plantuml: Partial<PlantUmlEntityRelationshipModelToDiagramCodeConverterConfig>;
	nomnoml: Partial<NomnomlEntityRelationshipModelToDiagramCodeConverterConfig>;
}>;

export default PartialERDiagramPlaygroundConfig;
