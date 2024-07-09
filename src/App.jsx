import React from 'react'
import Filter from './components/Filter';

const App = () => {

  const dropdownContent = [
    { label: 'Date Of Registration', type: 'date' },
    { label: 'Vendor Score', type: 'text' },
    { label: 'Rating', type: 'checkbox', options: ['1', '2', '3', '4', '5'] },
    { label: 'Status', type: 'Select' , options: ['Good' , 'Bad', 'Not So Good'] },
    { label: 'Type Of Business', type: 'Radio' , options: ['Banking' , 'Ecommerce', 'RealEstate'] },
    { label: 'Location', type: 'text'},
    { label: 'Assign to', type: 'text'},
  ];

  return (
    <div>
      <Filter buttonName="Filters" dropdownContent={dropdownContent} />
    </div>
  )
}

export default App