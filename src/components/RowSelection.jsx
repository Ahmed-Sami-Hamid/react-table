import { useMemo } from 'react'

// Hooks
import { useTable, useRowSelect } from 'react-table'

// Data
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'

// Style
import Style from './BasicTable.module.css'
import { Checkbox } from './Checkbox'

const RowSelection = () => {
  // memoization for the data
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    selectedFlatRows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ])
    }
  )

  const firstPageRows = rows.slice(0, 10)
  return (
    <div className={Style.wrapper}>
      <table className={Style.customers} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, index) => {
            prepareRow(row)
            return (
              <tr key={index} {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td key={index} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup, index) => (
            <tr key={index} {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column, index) => (
                <td key={index} {...column.getFooterProps()}>
                  {column.render('Footer')}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
        <pre>
          <code>
            {JSON.stringify(
              {
                selectedFlatRows: selectedFlatRows.map((row) => row.original),
              },
              null,
              2
            )}
          </code>
        </pre>
      </table>
    </div>
  )
}

export default RowSelection
