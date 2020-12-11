import './App.css';
import Layout from './containers/Layout';
import Videos from './containers/Videos';

function App() {
  return (
    <Layout header='YouTube Videos'>
      <Videos />
    </Layout>
  );
}

export default App;
