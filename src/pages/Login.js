export default function Login() {
    return (
        
            <div className="bg-default-0 mt-9 panel">
                <h2 className="txt-3xl m-0">Log in</h2>
                <button className="btn btn-2xl full-width mt-9">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.7025 14.315C27.7025 13.3933 27.6208 12.5183 27.4808 11.6666H14.2975V16.9283H21.8458C21.5075 18.655 20.5158 20.1133 19.0458 21.105V24.605H23.5492C26.1858 22.1666 27.7025 18.5733 27.7025 14.315Z" fill="#4285F4"/>
                        <path d="M14.2975 28C18.0775 28 21.2392 26.74 23.5492 24.605L19.0458 21.105C17.7858 21.945 16.1875 22.4583 14.2975 22.4583C10.6458 22.4583 7.55416 19.9966 6.44583 16.6716H1.80249V20.2766C4.10082 24.85 8.82583 28 14.2975 28Z" fill="#34A853"/>
                        <path d="M6.44582 16.6717C6.15415 15.8317 6.00248 14.9334 6.00248 14.0001C6.00248 13.0667 6.16582 12.1684 6.44582 11.3284V7.72339H1.80248C0.845818 9.61339 0.297485 11.7367 0.297485 14.0001C0.297485 16.2634 0.845818 18.3867 1.80248 20.2767L6.44582 16.6717Z" fill="#FBBC05"/>
                        <path d="M14.2975 5.54167C16.3625 5.54167 18.2058 6.25334 19.6642 7.64167L23.6542 3.65167C21.2392 1.38833 18.0775 0 14.2975 0C8.82583 0 4.10082 3.15 1.80249 7.72334L6.44583 11.3283C7.55416 8.00334 10.6458 5.54167 14.2975 5.54167Z" fill="#EA4335"/>
                    </svg>
                    Login with Google</button>
                <div className="form-el mt-4">
                    <label>Email</label>
                    <input type="text" className="full-width" />
                </div>
                <div className="form-el mt-4">
                    <label>Password</label>
                    <div className="input-group">
                        <i className="i icon-lock input-icon"></i>
                        <input type="password" className="full-width" />
                        <i className="i icon-lock input-icon"></i>
                    </div>
                </div>

                <button className="btn btn-primary btn-xl full-width mt-4">Log in</button>
              
            </div>            
      
    )
}