export default function Form() {
  return (
    <>
      <div className="container">
        <div className="box">
          <p><span>Try it free 7 days</span>  then $20/mo. thereafter</p>
        </div>
        {/* <div> */}
        <form className="form" >
          <div className="input-group">
            <input type="text" placeholder="First Name"/>
          </div>

          <div className="input-group">
            <input type="text" placeholder="Last Name "/>
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email Address"/>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password"/>
          </div>

            <button>Claim your free trial </button>
          <p>By clicking the button, you are agreeing to our <a href=""> Terms and Services </a></p>
        </form>
        {/* </div> */}
      </div>
    </>
  )
}