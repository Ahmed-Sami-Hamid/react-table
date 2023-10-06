// eslint-disable-next-line react/prop-types
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      Search:{' '}
      <input
        value={filter || ''}
        type="search"
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  )
}

export default GlobalFilter
