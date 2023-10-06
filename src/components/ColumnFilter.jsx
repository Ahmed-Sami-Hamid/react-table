// eslint-disable-next-line react/prop-types
export const ColumnFilter = ({ column }) => {
  // eslint-disable-next-line react/prop-types
  const { filterValue, setFilter } = column
  return (
    <span>
      Search:{' '}
      <input
        value={filterValue || ''}
        type="search"
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  )
}
