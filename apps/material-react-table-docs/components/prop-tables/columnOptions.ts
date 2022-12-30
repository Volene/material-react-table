import { MRT_ColumnDef } from 'material-react-table';

export type ColumnOption = {
  columnOption: keyof MRT_ColumnDef;
  defaultValue?: string;
  description?: string;
  link?: string;
  linkText?: string;
  required?: boolean;
  source?: 'MRT' | 'TanStack Table' | 'Material UI' | '';
  type?: string;
};

export const columnOptions: ColumnOption[] = [
  {
    columnOption: 'AggregatedCell',
    defaultValue: '',
    description: 'Define a custom cell render for an aggregated cell.',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: '({ cell, column, row, table }) => ReactNode',
  },
  {
    columnOption: 'Cell',
    defaultValue: '',
    description:
      'Define a custom cell render to add markup, styles, or conditional logic.',
    link: '/docs/guides/data-columns#custom-cell-render',
    linkText: 'MRT Data Columns Docs',
    source: 'MRT',
    required: false,
    type: '({ cell, column, row, table }) => ReactNode',
  },
  {
    columnOption: 'Edit',
    defaultValue: '',
    description: 'Define a custom edit component for cells in a column.',
    link: '/docs/guides/editing#use-custom-editing-components',
    linkText: 'MRT Editing Docs',
    source: 'MRT',
    required: false,
    type: '({ cell, column, row, table }) => ReactNode',
  },
  {
    columnOption: 'Filter',
    defaultValue: '',
    description: 'Define a custom filter component in a column.',
    link: '/docs/guides/column-filtering#custom-filter-components',
    linkText: 'MRT Column Filtering Docs',
    source: 'MRT',
    required: false,
    type: '({ column, header, table }) => ReactNode',
  },
  {
    columnOption: 'Footer',
    defaultValue: '',
    description: 'Render custom markup for a column footer.',
    link: '/docs/guides/data-columns#custom-footer-render',
    linkText: 'MRT Data Columns Docs',
    source: 'MRT',
    required: false,
    type: 'ReactNode | ({ column, footer, table }) => ReactNode',
  },
  {
    columnOption: 'GroupedCell',
    defaultValue: '',
    description: 'Define a custom cell render for a grouped cell.',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: '({ cell, column, row, table }) => ReactNode',
  },
  {
    columnOption: 'Header',
    defaultValue: '',
    description: 'Render custom markup for a column header.',
    link: '/docs/guides/data-columns#custom-header-render',
    linkText: 'MRT Data Columns Docs',
    source: 'MRT',
    required: false,
    type: 'ReactNode | (({ column, header, table }) => ReactNode)',
  },
  {
    columnOption: 'accessorFn',
    defaultValue: '',
    description:
      'Alternative to an accessorKey, define an accessor function instead of a string key.',
    link: '/docs/guides/data-columns#method-1---using-an-accessorkey-(recommended)',
    linkText: 'MRT Data Columns Docs',
    source: 'TanStack Table',
    required: false,
    type: '(originalRow: TData) => any',
  },
  {
    columnOption: 'accessorKey',
    defaultValue: '',
    description:
      'If provided, the accessorKey will be used to point to which key in the data object should be used to access the data in this column.',
    link: '/docs/guides/data-columns#method-2---using-an-accessorfn-and-id',
    linkText: 'MRT Data Columns Docs',
    source: 'TanStack Table',
    required: false,
    type: 'string & keyof TData',
  },
  {
    columnOption: 'aggregationFn',
    defaultValue: "'count'",
    description:
      'Specify which aggregate function should be used for grouped columns.',
    link: 'https://tanstack.com/table/v8/docs/api/features/grouping#aggregationfn-1',
    linkText: 'TanStack Table Grouping Docs',
    source: 'TanStack Table',
    required: false,
    type: '',
  },
  {
    columnOption: 'columns',
    defaultValue: '',
    description: 'If using header groups, define an array of sub columns here.',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'Array<MRT_ColumnDef<TData>>',
  },
  {
    columnOption: 'enableClickToCopy',
    defaultValue: '',
    description: 'Enable the click to copy feature for this column.',
    link: '/docs/guides/click-to-copy#enable-click-to-copy-per-column',
    linkText: 'MRT Click to Copy Docs',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnActions',
    defaultValue: '',
    description: 'Enable or disable column actions for this column.',
    link: '/docs/guides/column-actions#disable-or-hide-column-actions-buttons',
    linkText: 'MRT Column Actions Docs',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnDragging',
    defaultValue: '',
    description: 'Enable or disable column dragging for this column.',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnFilter',
    defaultValue: '',
    description:
      'Enable or disable column filtering for this column. Filter will not be shown if disabled.',
    link: '/docs/guides/column-filtering#disable-filtering-features',
    linkText: 'MRT Column Filtering Docs',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnFilterModes',
    defaultValue: '',
    description: 'Enable column filtering modes for this column.',
    link: '/docs/guides/column-filtering#enable-column-filter-modes-(filter-switching)',
    linkText: 'MRT Column Filtering Docs',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableColumnOrdering',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableEditing',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableGlobalFilter',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableGrouping',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableHiding',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableMultiSort',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enablePinning',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableResizing',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'enableSorting',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'columnFilterModeOptions',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'Array<string>',
  },
  {
    columnOption: 'filterFn',
    defaultValue: 'fuzzy',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'MRT_FilterFn',
  },
  {
    columnOption: 'filterSelectOptions',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'Array<{ text: string; value: string }>',
  },
  {
    columnOption: 'filterVariant',
    defaultValue: 'text',
    description:
      'Specify whether the filter should be a text input or a select input, or other type of pre-built input.',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: "'text' | 'select' | 'multi-select' | 'range'",
  },
  {
    columnOption: 'header',
    defaultValue: '',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/core/column-def#header',
    linkText: 'TanStack Table ColumnDef Docs',
    source: 'TanStack Table',
    required: true,
    type: 'string',
  },
  {
    columnOption: 'id',
    defaultValue: '',
    description: '',
    link: 'https://tanstack.com/table/v8/docs/api/core/column-def#id',
    linkText: 'TanStack Table ColumnDef Docs',
    source: 'TanStack Table',
    required: false,
    type: 'string',
  },
  {
    columnOption: 'invertSorting',
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'maxSize',
    defaultValue: '1000',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'number',
  },
  {
    columnOption: 'meta',
    defaultValue: '{}',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: 'any',
  },
  {
    columnOption: 'minSize',
    defaultValue: '40',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'number',
  },
  {
    columnOption: 'muiTableBodyCellCopyButtonProps',
    defaultValue: '',
    description: '',
    link: 'https://mui.com/material-ui/api/button/#props',
    linkText: 'Material UI Button API',
    source: 'Material UI',
    required: false,
    type: 'ButtonProps | ({ cell, column, row, table }) => ButtonProps',
  },
  {
    columnOption: 'muiTableBodyCellEditTextFieldProps',
    defaultValue: '',
    description: '',
    link: 'https://mui.com/material-ui/api/text-field/#props',
    linkText: 'Material UI TextField API',
    source: 'Material UI',
    required: false,
    type: 'TextFieldProps | ({ cell, column, row, table }) => TextFieldProps',
  },
  {
    columnOption: 'muiTableBodyCellProps',
    defaultValue: '',
    description: '',
    link: 'https://mui.com/material-ui/api/table-cell/#props',
    linkText: 'Material UI TableCell API',
    source: 'Material UI',
    required: false,
    type: 'TableCellProps | ({ cell, table }) => TableCellProps',
  },
  {
    columnOption: 'muiTableFooterCellProps',
    defaultValue: '',
    description: '',
    link: 'https://mui.com/material-ui/api/table-cell/#props',
    linkText: 'Material UI TableCell API',
    source: 'Material UI',
    required: false,
    type: 'TableCellProps | ({ column, table }) => TableCellProps',
  },
  {
    columnOption: 'muiTableHeadCellColumnActionsButtonProps',
    defaultValue: '',
    description: '',
    link: 'https://mui.com/material-ui/api/icon-button/#props',
    linkText: 'Material UI IconButton API',
    source: 'Material UI',
    required: false,
    type: 'IconButtonProps | ({ column, table }) => IconButtonProps',
  },
  {
    columnOption: 'muiTableHeadCellDragHandleProps',
    defaultValue: '',
    description: '',
    link: 'https://mui.com/material-ui/api/icon-button/#props',
    linkText: 'Material UI IconButton API',
    source: 'Material UI',
    required: false,
    type: 'IconButtonProps | ({ column, table }) => IconButtonProps',
  },
  {
    columnOption: 'muiTableHeadCellFilterCheckboxProps',
    defaultValue: '',
    description: '',
    link: 'https://mui.com/material-ui/api/checkbox/#props',
    linkText: 'Material UI Checkbox Props',
    source: 'Material UI',
    required: false,
    type: 'Checkbox | ({ column, table }) => CheckboxProps',
  },
  {
    columnOption: 'muiTableHeadCellFilterTextFieldProps',
    defaultValue: '',
    description: '',
    link: 'https://mui.com/material-ui/api/text-field/#props',
    linkText: 'Material UI TextField Props',
    source: 'Material UI',
    required: false,
    type: 'TextFieldProps | ({ column, rangeFilterIndex, table }) => TextFieldProps',
  },
  {
    columnOption: 'muiTableHeadCellProps',
    defaultValue: '',
    description: '',
    link: 'https://mui.com/material-ui/api/table-cell/#props',
    linkText: 'Material UI TableCell API',
    source: 'Material UI',
    required: false,
    type: 'TableCellProps | ({ column, table }) => TableCellProps',
  },
  {
    columnOption: 'size',
    defaultValue: '180',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'number',
  },
  {
    columnOption: 'sortDescFirst',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'boolean',
  },
  {
    columnOption: 'sortingFn',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'SortingFnOption',
  },
  {
    columnOption: 'sortUndefined',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'TanStack Table',
    required: false,
    type: 'false | 1 | -1',
  },
  {
    columnOption: 'renderColumnActionsMenuItems',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: '',
  },
  {
    columnOption: 'renderColumnFilterModeMenuItems',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    source: 'MRT',
    required: false,
    type: '',
  },
];
