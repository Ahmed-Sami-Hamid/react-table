import { useMemo } from 'react'

// Hooks
import { useTable, usePagination } from 'react-table'

// Data
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'

// Style
import Style from './BasicTable.module.css'

const PaginationTable = () => {
  // memoization for the data
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  )

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
          {page.map((row, index) => {
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
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {' '}
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {' '}
          next
        </button>
      </div>
    </div>
  )
}

export default PaginationTable
