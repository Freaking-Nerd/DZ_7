import React, { useState, useMemo, useCallback } from 'react'

const initialData = [
  { id: 1, name: 'Anna', category: 'Black' },
  { id: 2, name: 'Joe', category: 'Jonson' },
  { id: 3, name: 'Fred', category: 'Black' },
  { id: 4, name: 'Maria', category: 'Semenenko' },
];

const DataFilterComponent = () => {
  const [data, setData] = useState(initialData)
  const [categoryFilter, setCategoryFilter] = useState('All')

  const filteredData = useMemo(() => {
    if (categoryFilter === 'All') {
      return data
    }
    return data.filter(item => item.category === categoryFilter)
  }, [data, categoryFilter])

  const handleCategoryChange = useCallback(newCategory => {
    setCategoryFilter(newCategory)
  }, [])

  return (
    <div>
      <h2>Filter</h2>
      <div>
        <label>Filter by Lastname:</label>
        <select value={categoryFilter} onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Black">Black</option>
          <option value="Jonson">Jonson</option>
          <option value="Semenenko">Semenenko</option>
        </select>
      </div>
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name} - {item.category}</li>
        ))}
      </ul>
    </div>
  )
}

export default DataFilterComponent;

