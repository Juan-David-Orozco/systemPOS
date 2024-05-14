import { useState } from 'react'
import { NavTabs, Tabs } from '../components/IndexComponents'

export function UserSettingsPage() {

  const [tabSelected, setTabSelected] = useState(0)

  return (
    <main>
      <div className="container-fluid text-white py-2">
        <NavTabs tabCurrent={tabSelected} />
      </div>
      <section className="border p-3 m-2">
        <Tabs tabCurrent={tabSelected} />
      </section>
    </main>
  )
}
