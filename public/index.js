class App extends React.Component{

constructor(props){
  super(props);
  this.state = {
    'total_amount' :1000
  }
}

  render(){
    return(
      <div>
      <h1>Lottery Application WEB 2.0 Tech</h1>
      <div>
     <p>Total Lottery Amount is {this.state.total_amount}</p>
      </div>
 <form>
<input placeholder="amount"/>
<input placeholder="email"/>
<button>Participate</button>
 </form>

      </div>
    )
  }
};

ReactDOM.render(
  <div><App/></div>
  , document.getElementById('reactBinding')
);
