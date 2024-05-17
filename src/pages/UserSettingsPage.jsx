import { useState } from 'react'
import { NavTabs, Tabs } from '../components/IndexComponents'

export function UserSettingsPage() {

  const [tabSelected, setTabSelected] = useState(0)

  return (
    <main>
      <section className="gradient-custom">

        <div className="container-fluid text-white" >
          <div className="row justify-content-center align-items-center mx-auto" id='RowContainerUserSettings'>
            <div className="col-12">
              <NavTabs tabCurrent={tabSelected} />
            </div>
            <div className="col-12">
              <Tabs tabCurrent={tabSelected} />
            </div>
          </div>
        </div>

      </section>
      {/* <div className="container-fluid text-white py-2">
        <NavTabs tabCurrent={tabSelected} />
      </div>
      <section className="border p-3 m-2">
        <Tabs tabCurrent={tabSelected} />
      </section> */}
    </main>
  )
}
