import './App.css';

function Introduction() {
  return (
    <div className="Introduction">
    <h1>Postcards from my Grandfather</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis molestie arcu.
      Phasellus in lectus nec nunc lobortis congue id a massa. Maecenas sit amet
      euismod ex. Cras luctus dignissim tellus non malesuada. Nam condimentum, dui id
      commodo sagittis, tortor urna porttitor magna, a sagittis ante purus quis nulla.
      Pellentesque ornare nisl dictum, faucibus turpis non, egestas metus. In finibus
      nisl sit amet iaculis sagittis. Ut egestas viverra tempor. Nunc sit amet ligula
      venenatis, sollicitudin eros eu, bibendum metus. Aliquam cursus varius eros at
      iaculis. Quisque imperdiet aliquam dolor, eget efficitur urna ultrices at.
      Mauris risus velit, ultrices vel semper id, tincidunt pretium tortor. Ut pretium
      sapien velit, a dictum erat lobortis in. Fusce eu urna ante. Fusce eu fringilla
      enim.</p>
      
      <p>Nunc erat leo, sodales ut orci vitae, tristique tincidunt risus. Integer elit
      est, euismod a venenatis id, gravida sit amet velit. Vestibulum ante ipsum
      primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras sagittis
      bibendum porttitor. Fusce bibendum tristique urna, sed auctor risus malesuada
      id. Pellentesque dignissim scelerisque dui sit amet laoreet. Sed facilisis
      tristique leo ac tristique. Vestibulum nisl nisi, pulvinar et nisl eget,
      fermentum elementum quam. Orci varius natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Etiam ac ornare sapien. Etiam accumsan turpis
      ex, vehicula cursus diam auctor in.</p>
      
      <p>Vivamus placerat nisi ut risus feugiat bibendum. Nunc vestibulum orci id eros
      mattis sagittis nec id eros. Ut suscipit lacus nec urna consectetur, quis
      tincidunt ligula dictum. Mauris scelerisque massa nec mauris tempor egestas.
      Integer dapibus tristique tortor, id elementum neque tincidunt ut. Etiam quis
      lectus ac libero efficitur pretium. Praesent vulputate libero dolor, ac viverra
      purus luctus eget. Vestibulum luctus velit sed quam consequat, ac tempor leo
      consectetur. Donec fringilla arcu eget pharetra vulputate. Proin nec est
      laoreet, tincidunt diam at, dictum massa. Donec sodales lorem sit amet tellus
      malesuada placerat.</p>
    </div>
  );
}

function Toolbar(){
  return (
    <div className="Toolbar">
      <div className="Word-Cloud">Word Cloud ▼</div>
      <div className="Add-Image">⊕</div>
      <div className="Search">
        <input className="Search-input" placeholder="Search"></input>
        <span className="Search-icon">⚲</span>
      </div>
    </div>
  );
}

function Postcards(){

  let postcards = [];
  for(var i = 0; i < 9; i++){
    postcards.push(<div className="Postcard"></div>);
  }

  return (
    <div className="Postcard-Container">
      {postcards}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Introduction></Introduction>
      <Toolbar></Toolbar>
      <Postcards></Postcards>
    </div>
  );
}

export default App;
