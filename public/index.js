class App extends React.Component{

constructor(props){
  super(props);
  this.state = {
    'total_amount' :1000,
    'amount' :100,
    'email': '',
  }
}

async componentDidMount(){
  const result = await axios.get('/get_total_amount');
  console.log(result.data["0"].total_amount)
  this.setState({total_amount : result.data["0"].total_amount})
}

onSubmit = async (event) =>{
  event.preventDefault();
  const response = await axios.post('/post_info', {
    amount : this.state.amount,
    email : this.state.email
  })
  console.log(response)
}

  render(){
    return(
      <div>
      <h1>Lottery Application WEB 2.0 Tech</h1>
      <div>
     <p>Total Lottery Amount is {this.state.total_amount}</p>
      </div>
 <form onSubmit={this.onSubmit}>
<input placeholder="amount" value={this.state.amount}
onChange={event=> this.setState({amount:event.target.value})}/>
<input placeholder="email" value = {this.state.email}
onChange={event=> this.setState({email:event.target.value})}/>
<button type="submit">Participate</button>
 </form>

      </div>
    )
  }
};

ReactDOM.render(
  <div><App/></div>
  , document.getElementById('reactBinding')
);
