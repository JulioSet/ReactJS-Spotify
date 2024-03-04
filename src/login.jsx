import { CariLagu } from "./cariLagu.js";
import { root } from "./main.js";
import { getUser,addUser } from "./user.js";

export class Login extends React.Component
{
    constructor(p) {
        super(p)
        this.state = {
            arrUser: []
        }
    }

    componentDidMount() {
        this.setState = {
            arrUser: getUser()
        }
    }

    add = () => {
        let nama = document.querySelector('#username')
        let pass = document.querySelector('#password')
        if (getUser().find(element => element.name == nama.value)) {
            if (getUser().find(element => element.name == nama.value).pass == pass.value) {
                let jumlah = getUser().find(element => element.name == nama.value).jumlah
                root.render(<CariLagu username={nama.value} jumlah={jumlah}/>)
            } else {
                alert('Password salah')
            }
        } else {
            addUser({
                name: nama.value,
                pass: pass.value,
                jumlah: 0
            })
            root.render(<CariLagu username={nama.value} jumlah={0}/>)
        }
    }

    render()
    {
        document.querySelector('body').style.backgroundColor = '#09d9d6'
        return(
            <div>
                <div className="container-fluid" style={{marginTop: `12.5%`}}>
                    <div className="row align-items-center ms-5">
                        <div className="col-8 align-center">
                            <h1 className="display-2 fw-bolder lh-1">Dengarkan Musik Dimana Saja</h1>
                            <div className="mt-3">
                            <ul className="list-unstyled">
                                <li><h4 className="fw-bolder">Nikmati lagu dimana saja</h4></li>
                                <li><h4 className="fw-bolder">kapan saja</h4></li>
                                <li><h4 className="fw-bolder">lagu apapun yang kamu mau</h4></li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card" style={{width: `18rem`}}>
                                <div className="card-body">
                                    <h1 className="card-title fw-bold" style={{textAlign: `center`}}>LOGIN</h1>
                                    <label className="form-label fw-bold">Username</label>
                                    <input type="text" id="username" className="form-control"></input>
                                    <label className="form-label fw-bold">Password</label>
                                    <input type="password" id="password" className="form-control mb-5"></input>
                                    <button className="btn btn-primary fw-bold" type="submit" onClick={() => {this.add()}} style={{width: `100%`, backgroundColor: `#09d9d6`, border: `#09d9d6`, color: `black`}}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}