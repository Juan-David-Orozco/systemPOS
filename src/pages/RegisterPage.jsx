import { RegisterForm } from '../components/RegisterForm'

export function RegisterPage() {
  return (
    <main>
      <section className="gradient-custom" id="register-section">
        <div className="container-fluid text-white py-1" id='ContainerRegister'>
          <div className="row justify-content-center align-items-center mx-auto" id='RowContainerRegister'>
            <div className="col-12 col-sm-8 col-md-6 col-lg-4" id='ColumnContainerRegister'>
              <div className="card bg-dark text-white" id='CardContainerRegister'>
                <div className="card-body px-5 py-4 text-center">
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
