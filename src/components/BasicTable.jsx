import { useMemo } from 'react'

// Hooks
import { useTable } from 'react-table'

// Data
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS, GROUPED_COLUMNS } from './columns'

// Style
import Style from './BasicTable.module.css'

const BasicTable = () => {
  // memoization for the data
  const columns = useMemo(() => GROUPED_COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

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
          {rows.map((row, index) => {
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
      </table>
    </div>
  )
}

export default BasicTable
