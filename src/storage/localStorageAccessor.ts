import {localJsonStorage} from '@/storage/JsonStorage';
import ERDiagramPlaygroundSerializableConfig from '@/config/ERDiagramPlaygroundSerializableConfig';
import outputFormats, {OutputFormat} from '@/common/output/outputFormats';
import pokemonSampleCode from '!!raw-loader!@/sample-erd-files/Pokemon.erd';
import ERDiagramPlaygroundConfig from '@/config/ERDiagramPlaygroundConfig';
import erdiagramPlaygroundConfigManager, {LAST_CONFIG_VERSION} from '@/config/ERDiagramPlaygroundConfigManager';

const ItemKeys = {
	INPUT_CODE: 'inputCode',
	OUTPUT_FORMAT_ID: 'outputFormatId',
	CONFIG: 'erdiagramConfig',
	VERTICAL_SPLIT_PANEL_LEFT_COLUMN_WIDTH_PERCENT: 'verticalSplitPanelLeftColumnWidthPercent'
};

export default {

	getInputCode(): string {
		return localStorage.getItem(ItemKeys.INPUT_CODE) || pokemonSampleCode;
	},

	setInputCode(value: string): void {
		localStorage.setItem(ItemKeys.INPUT_CODE, value);
	},

	getOutputFormat(): OutputFormat {
		const outputFormatId = localStorage.getItem(ItemKeys.OUTPUT_FORMAT_ID);
		return outputFormatId != null && outputFormats[outputFormatId] || outputFormats.mysql;
	},

	setOutputFormat(value: OutputFormat): void {
		localStorage.setItem(ItemKeys.OUTPUT_FORMAT_ID, value.id);
	},

	getConfig(): ERDiagramPlaygroundConfig {

		const serializableConfig = localJsonStorage.getItem<ERDiagramPlaygroundSerializableConfig>(ItemKeys.CONFIG);

		if (serializableConfig) {

			// Check you are using the last version of the config
			if (serializableConfig._version === LAST_CONFIG_VERSION) {
				return erdiagramPlaygroundConfigManager.convertFromSerializableObject(serializableConfig);
			}

			console.warn('Detected old version of settings: using default settings.');

		}

		return erdiagramPlaygroundConfigManager.getDefaultConfig();

	},

	setConfig(value: ERDiagramPlaygroundConfig): void {
		if (value == null) {
			localJsonStorage.removeItem(ItemKeys.CONFIG);
		} else {
			const serializableConfig = erdiagramPlaygroundConfigManager.convertToSerializableObject(value);
			localJsonStorage.setItem(ItemKeys.CONFIG, serializableConfig);
		}
	},

	getVerticalSplitPanelLeftColumnWidthPercent(): number {
		const value = localStorage.getItem(ItemKeys.VERTICAL_SPLIT_PANEL_LEFT_COLUMN_WIDTH_PERCENT);
		return value ? parseFloat(value) : 50;
	},

	setVerticalSplitPanelLeftColumnWidthPercent(value: number): void {
		localStorage.setItem(ItemKeys.VERTICAL_SPLIT_PANEL_LEFT_COLUMN_WIDTH_PERCENT, String(value));
	}

};
