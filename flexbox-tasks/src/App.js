import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      {/* TASK 1 */}
      <header className="header1">
        <nav>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href="#">About Us</a></li>
           <li><a href="#">Our Products</a></li>
             <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      {/* TASK 2 */}
      <header className="header2">
        <nav>
          <ul>
            <li>I am small</li>
            <li>Non cupidatat commodo minim sunt sunt nulla.</li>
            <li>Dolor fugiat aliqua ex reprehenderit id laborum eiusmod ullamco aliquip tempor enim. Eiusmod qui consequat exercitation aute nulla enim deserunt. Aliqua officia cillum irure consequat deserunt aliqua nulla cupidatat aute.
Non dolore et consequat duis excepteur ipsum esse amet nisi aliquip aliquip aliqua amet. Fugiat ea et mollit magna magna sint in excepteur. Ullamco cupidatat irure fugiat aliqua mollit ipsum anim consequat. Mollit deserunt officia id eiusmod sit.</li>
           
          </ul>
        </nav>
      </header>
      {/* TASK 3 */}
      <div className='container'>
         <div className='child'>
          Center Me
         </div>
      </div>
      {/* TASK 4 */}
      <div className='items'>
      <ul>
          <li>Turnip</li>
          <li>greens</li>
          <li>yarrow</li>
          <li>ricebean</li>
          <li>rutabaga</li>
          <li>endive</li>
          <li>cauliflower</li>
          <li>sea lettuce</li>
          <li>kohlrabi</li>
          <li>amaranth</li>
      </ul>
      </div>
    </div>
  );
}
export default App;