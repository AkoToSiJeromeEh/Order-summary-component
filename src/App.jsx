import MainCompt from './components/OrderCompt';
import OrderData from './data/OrderData.jsx';

function App() {
  const MainElem = OrderData.map((data) => {
    return (
      <MainCompt
        key={data.id}
        {...data}
      />
    );
  });

  return (
    <>
      {MainElem}
    </>
  );
}

export default App;
