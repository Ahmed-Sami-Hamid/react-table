// import { useMemo } from 'react'
import './App.css'
// import DynamicTable from './components/DynamicTable '
// import MOCK_DATA from './components/MOCK_DATA.json'
// import { COLUMNS } from './components/columns'
import SortingTable from './components/SortingTable'
function App() {
  // const columns = useMemo(() => COLUMNS, [])
  // const data = useMemo(() => MOCK_DATA, [])
  return (
    <>
      {/* <DynamicTable columns={columns} data={data} /> */}
      <SortingTable />
    </>
  )
}

export default App
