import React from "react"
import { Select } from "@mantine/core"
import { useId } from "@mantine/hooks"

const FilterComponent = () => {
  const id = useId()
  return (
    <div>
      <Select
        label="Assigned By :"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={[
          { value: "ram", label: "Ram" },
          { value: "shyam", label: "Shyam" },
          { value: "hari", label: "Hari" },
          { value: "gita", label: "Gita" },
        ]}
      />
    </div>
  )
}

export default FilterComponent
