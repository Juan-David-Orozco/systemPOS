
export function MainPage() {
  return (
    <main>
      <section className="gradient-custom">
        <div className="container-fluid text-white" >
          <div className="row justify-content-center align-items-center text-center mx-auto" id='RowContainerMain'>
            <div className="col-12 col-sm-3 border border-danger" id='ColumnContainerSideBar'>Sidebar</div>
            <div className="col-12 col-sm-9 border border-dark" id='ColumnContainerMainPage'>MainPage</div>
          </div>
        </div>
      </section>
    </main>
  )
}
