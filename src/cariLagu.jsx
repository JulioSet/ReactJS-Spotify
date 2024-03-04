import { BuatLagu } from "./buatLagu.js"
import { HasilSearch } from "./hasil-search.js"
import { getLagu } from "./lagu.js"
import { Login } from "./login.js"
import { root } from "./main.js"

export class CariLagu extends React.Component
{
    constructor(p) {
        super(p)
        this.state = {
            post_search: '',
            search: [],
            listen: ''
        }
    }

    componentDidMount() {
        this.setState({
            listen: 'Judul Lagu - Creator'
        })
    }

    logout = () => {
        root.render(<Login/>)
    }

    move = () => {
        root.render(<BuatLagu username={this.props.username} jumlah={this.props.jumlah}/>)
    }

    cari = (e) => {
        if (e.code == 'Enter') {
            let nama = document.getElementById('judul').value
            let idx = 0
            let anakan = []
            if (nama != '') {
                let filtered = getLagu().filter((e) => e.judul.toLowerCase() == nama.toLowerCase() + ' ')
                filtered.forEach((e) => {
                    anakan.push(<HasilSearch key={idx} author={e.author} judul={e.judul} dengar={e.pendengar} stats={this.status}/>)
                    idx += 1
                })
                this.setState({
                    post_search: 'Showing Result for : ' + nama,
                    search: anakan
                })
            }
        }
    }

    status = (artis, judul) => {
        this.setState({
            listen: judul + ' - ' + artis
        })
    }

    clear = () => {
        this.setState({
            listen: 'Judul Lagu - Creator'
        })
    }

    render() {
        document.querySelector('body').style.backgroundColor = ''
        return (
            <div>
                <div className="container-fluid min-vh-100 d-flex flex-column">
                    <div className="row flex-grow-1">
                        <div className="col-md-3" style={{backgroundColor: `#09d9d6`}}>
                            <div className="card mt-4" style={{width: `18rem`, backgroundColor: `black`}}>
                                <div className="card-body">
                                    <h1 className="card-title fw-semibold" style={{textAlign: `center`, color: `white`}}>{this.props.username}</h1>
                                    <h5 className="card-text fw-semibold" style={{textAlign: `center`, color: `white`}}>{this.props.jumlah} Lagu</h5>
                                </div>
                            </div>
                            <h5 className="card-text fw-bold mt-3 pb-2">Cari Lagu</h5>
                            <h5 className="card-text fw-bold" onClick={() => {this.move()}}>Buat Lagu</h5>
                            <div className="pb-2 px-2 position-absolute bottom-0 start-0">
                                <button className="btn btn-primary fw-bold " type="submit" onClick={() => {this.logout()}} style={{backgroundColor: `#f92e65`, border: `none`, width: `19rem`}}>Logout</button>
                            </div>
                        </div>
                        <div className="col-md-9 px-4 pt-3">
                            <h3 className="card-text display-6 fw-semibold">Cari Lagu</h3>
                            <h4 className="card-text fw-semibold">Judul Lagu</h4>
                            <input type="text" id="judul" onKeyDown={(e) => {this.cari(e)}} className="form-control"></input>
                            <h4 className="card-text fw-bold pt-5">{this.state.post_search}</h4>
                            {this.state.search}
                            <div className="position-absolute top-100 start-50" style={{marginTop: `-8%`, marginLeft: `-23%`}}>
                                <h4 className="fw-semibold">Listening To :</h4>
                                <div className="card" style={{width: `59rem`, backgroundColor: `#09d9d6`, border: `none`}}>
                                    <div className="card-body">
                                        <h5 className="card-text fw-semibold">{
                                            this.state.listen}
                                            <div className="position-relative">
                                                <div className="position-absolute top-100 start-100" style={{marginTop: '-2.5%', marginLeft: '-1%'}}>
                                                    <span onClick={() => {this.clear()}}>X</span>
                                                </div>
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}