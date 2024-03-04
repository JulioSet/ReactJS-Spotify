import { getLagu } from "./lagu.js"

export class HasilSearch extends React.Component
{
    constructor(p) {
        super(p)
        this.state = {
            pendengar: 0
        }
    }

    componentDidMount() {
        this.setState({
            pendengar: this.props.dengar
        })
    }

    play = () => {
        this.setState({
            pendengar: this.state.pendengar + 1
        })
        getLagu().find(e => e.judul == this.props.judul).pendengar = this.state.pendengar + 1
    }

    render() {
        return(
            <div className="pb-3">
                <div className="card" style={{borderColor: `gray`}} onClick={() => {this.play()}}>
                    <div className="card-body" onClick={(e) => {this.props.stats(this.props.author, this.props.judul)}}>
                        <h5 className="card-text fw-semibold">{this.props.judul}</h5>
                        <h5 className="card-text fw-normal">{this.props.author} - Listened : {this.state.pendengar}</h5>
                    </div>
                </div>
            </div>
        )
    }
}