import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      {/* TASK 1 */}
      <div className="grid1">
          <ul>
            <li><a href='#'>One</a></li>
            <li><a href="#">Two</a></li>
           <li><a href="#">Three</a></li>
             <li><a href="#">Four</a></li>
             <li><a href="#">Five</a></li>
          </ul>
      </div>
      {/* TASK 2 */}
      <div className="grid2">
         <div className='item1'>One</div>
         <div className='item2'>Two</div>
      </div>
      {/* TASK 3 */}
      <div className="grid3">
            <div className='one'>One</div>
            <div className='two'>Two</div>
             <div className='three'>Three</div>
             <div className='four'>Four</div>
      </div>
      {/* TASK 4 */}
      <div className="grid4">
  <div className="balloon">
    <img
      alt="a single red balloon"
      src="https://mdn.github.io/shared-assets/images/examples/balloons1.jpg" />
    <ul className="tags">
      <li>balloon</li>
      <li>red</li>
      <li>sky</li>
      <li>blue</li>
      <li>Hot air balloon</li>
    </ul>
  </div>
  <div className="balloon">
    <img
      alt="balloons over some houses"
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg" />
    <ul className="tags">
      <li>balloons</li>
      <li>houses</li>
      <li>train</li>
      <li>harborside</li>
    </ul>
  </div>
  <div className="balloon">
    <img
      alt="close-up of balloons inflating"
      src="https://mdn.github.io/shared-assets/images/examples/balloons3.jpg" />
    <ul className="tags">
      <li>balloons</li>
      <li>inflating</li>
      <li>green</li>
      <li>blue</li>
    </ul>
  </div>
  <div className="balloon">
    <img
      alt="a balloon in the sun"
      src="https://mdn.github.io/shared-assets/images/examples/balloons4.jpg" />
    <ul className="tags">
      <li>balloon</li>
      <li>sun</li>
      <li>sky</li>
      <li>summer</li>
      <li>bright</li>
    </ul>
  </div>
</div>
    </div>
  );
}
export default App;
