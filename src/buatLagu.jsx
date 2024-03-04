import { CariLagu } from "./cariLagu.js"
import { addLagu, getLagu } from "./lagu.js"
import { Login } from "./login.js"
import { root } from "./main.js"
import { getUser } from "./user.js"

export class BuatLagu extends React.Component
{
    constructor(p) {
        super(p)
        this.state = {
            jumlah: this.props.jumlah
        }
    }

    componentDidUpdate() {
        document.querySelector('#judul').value = ''
        getUser().find(element => element.name == this.props.username).jumlah = this.state.jumlah
    }

    logout = () => {
        root.render(<Login/>)
    }

    move = () => {
        root.render(<CariLagu username={this.props.username} jumlah={this.state.jumlah}/>)
    }

    add = () => {
        let judul = document.getElementById('judul').value
        if (getLagu().find(e => e.judul.toLowerCase() == judul.toLowerCase() + ' ')) {
            alert('Judul lagu kembar')
        } else {
            const arrKata = judul.split(' ')
            let judulNew = ''
            arrKata.forEach((e) => {
                judulNew += e.charAt(0).toUpperCase() + e.substr(1).toLowerCase() + ' '
            });
            addLagu({
                author: this.props.username,
                judul: judulNew,
                pendengar: 0
            })
            this.setState({
                jumlah: this.state.jumlah + 1
            })
            alert('Berhasil menambah lagu')
        }
    }

    render() {
        return (
            <div>
                <div className="container-fluid min-vh-100 d-flex flex-column">
                    <div className="row flex-grow-1">
                        <div className="col-md-3" style={{backgroundColor: `#09d9d6`}}>
                            <div className="card mt-4" style={{width: `18rem`, backgroundColor: `black`}}>
                                <div className="card-body">
                                    <h1 className="card-title fw-semibold" style={{textAlign: `center`, color: `white`}}>{this.props.username}</h1>
                                    <h5 className="card-text fw-semibold" style={{textAlign: `center`, color: `white`}}>{this.state.jumlah} Lagu</h5>
                                </div>
                            </div>
                            <h5 className="card-text fw-bold mt-3 pb-2" onClick={() => {this.move()}}>Cari Lagu</h5>
                            <h5 className="card-text fw-bold">Buat Lagu</h5>
                            <div className="pb-2" style={{position: `absolute`, bottom: `0`}}>
                                <button className="btn btn-primary fw-bold" type="submit" onClick={() => {this.logout()}} style={{backgroundColor: `#f92e65`, border: `#f92e65`, width: `19rem`}}>Logout</button>
                            </div>
                        </div>
                        <div className="col-md-9 px-4 pt-3" id="ganti">
                            <h2 className="card-text display-6 fw-semibold">Buat Lagu</h2>
                            <h3 className="card-text fw-semibold">Judul Lagu</h3>
                            <input type="text" id="judul" className="form-control"></input>
                            <div className="position-relative">
                                <div className="pt-3 position-absolute top-0 end-0">
                                    <button className="btn btn-primary fw-bold px-3 py-2" type="submit" onClick={() => {this.add()}} style={{backgroundColor: `#09d9d6`, border: `none`, color: `black`}}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}