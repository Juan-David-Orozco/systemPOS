import { LoginForm } from '../components/LoginForm'

export function LoginPage() {
  return (
    <main>
      <section className="gradient-custom" id="login-section">
        <div className="container-fluid text-white py-1" id='ContainerLogin'>
          <div className="row justify-content-center align-items-center mx-auto" id='RowContainerLogin'>
            <div className="col-12 col-sm-8 col-md-6 col-lg-4" id='ColumnContainerLogin'>
              <div className="card bg-black text-white" id='CardContainerLogin'>
                <div className="card-body px-5 py-4 text-center">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
