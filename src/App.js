import { Title } from './components/Title'
import { LoginType } from './components/LoginType'
import { Form } from './components/Form'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <LoginType />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
