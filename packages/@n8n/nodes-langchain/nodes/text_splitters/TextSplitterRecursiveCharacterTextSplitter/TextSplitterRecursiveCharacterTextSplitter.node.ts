/* eslint-disable n8n-nodes-base/node-dirname-against-convention */
import type { IExecuteFunctions, INodeType, INodeTypeDescription, SupplyData } from 'n8n-workflow';
import type { RecursiveCharacterTextSplitterParams } from 'langchain/text_splitter';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { logWrapper } from '../../../utils/logWrapper';

export class TextSplitterRecursiveCharacterTextSplitter implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Recursive Character Text Splitter',
		name: 'textSplitterRecursiveCharacterTextSplitter',
		icon: 'fa:remove-format',
		group: ['transform'],
		version: 1,
		description: 'Split text into chunks by characters recursively',
		defaults: {
			name: 'Recursive Character Text Splitter',
		},
		codex: {
			categories: ['AI'],
			subcategories: {
				AI: ['Text Splitters'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-class-description-inputs-wrong-regular-node
		inputs: [],
		// eslint-disable-next-line n8n-nodes-base/node-class-description-outputs-wrong
		outputs: ['textSplitter'],
		outputNames: ['Text Splitter'],
		properties: [
			// {
			// 	displayName: 'Separators',
			// 	name: 'separators',
			// 	type: 'fixedCollection',
			// 	typeOptions: {
			// 		multipleValues: true,
			// 	},
			// 	placeholder: 'Add Separator',
			// 	default: [{ separator: '' }],
			// 	options: [
			// 		{
			// 			name: 'values',
			// 			displayName: 'Values',
			// 			values: [
			// 				{
			// 					displayName: 'Separator',
			// 					name: 'separator',
			// 					type: 'string',
			// 					default: '',
			// 				}
			// 			]
			// 		}
			// 	]
			// },
			{
				displayName: 'Chunk Size',
				name: 'chunkSize',
				type: 'number',
				default: 1000,
			},
			{
				displayName: 'Chunk Overlap',
				name: 'chunkOverlap',
				type: 'number',
				default: 0,
			},
		],
	};

	async supplyData(this: IExecuteFunctions): Promise<SupplyData> {
		this.logger.verbose('Supply Data for Text Splitter');
		const chunkSize = this.getNodeParameter('chunkSize', 0) as number;
		const chunkOverlap = this.getNodeParameter('chunkOverlap', 0) as number;

		const params: RecursiveCharacterTextSplitterParams = {
			// TODO: These are the default values, should we allow the user to change them?
			separators: ['\n\n', '\n', ' ', ''],
			chunkSize,
			chunkOverlap,
			keepSeparator: false,
		};

		const splitter = new RecursiveCharacterTextSplitter(params);

		return {
			response: logWrapper(splitter, this),
		};
	}
}
