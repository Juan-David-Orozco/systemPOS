import { RegisterForm } from '../components/RegisterForm'

export function RegisterPage() {
  return (
    <main>
      <section className="gradient-custom">
        <div className="container-fluid text-white my-1 py-1">
          <div className="row justify-content-center align-items-center mx-auto" id='formContainer'>
            <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto">
              <div className="card bg-dark text-white">
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
