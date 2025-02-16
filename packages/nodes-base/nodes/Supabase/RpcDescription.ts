import type { INodeProperties } from 'n8n-workflow';

export const rpcOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['rpc'],
			},
		},
		options: [
			{
				name: 'Call Function',
				value: 'call',
				description: 'Call a Postgres function',
				action: 'Call a Postgres function',
			},
		],
		default: 'call',
	},
	{
		displayName: 'Function Name',
		name: 'functionName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['rpc'],
				operation: ['call'],
			},
		},
		description: 'Name of the Postgres function to call',
	},
	{
		displayName: 'Parameters',
		name: 'parametersUi',
		placeholder: 'Add Parameter',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['rpc'],
				operation: ['call'],
			},
		},
		default: {},
		options: [
			{
				name: 'parameterValues',
				displayName: 'Parameter',
				values: [
					{
						displayName: 'Key',
						name: 'parameterKey',
						type: 'string',
						default: '',
						description: 'Key of the parameter',
					},
					{
						displayName: 'Value',
						name: 'parameterValue',
						type: 'string',
						default: '',
						description: 'Value of the parameter',
					},
				],
			},
		],
	},
]; 