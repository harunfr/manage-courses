import React from 'react'

import { capitalize } from '../../../../utils/helperUtils'

function StudentFormField({ value, onChangeHandler, name }) {
  return (
    <div className="mb-4">
      {/* label icin for, input icin type, id, name alanlari onemli ama burada uygulamadim. */}
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {capitalize(name)}
      </label>
      <input
        type="text" // email ve web sitesi icin farkli olabilirdi
        placeholder={`Student's ${name}`}
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
        className="w-full rounded-md border px-4 py-3.5 text-xs placeholder-[#CDCDCD] focus:border-blue-500 focus:outline-none"
      />
    </div>
  )
}

export default StudentFormField
