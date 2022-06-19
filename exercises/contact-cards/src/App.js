import Card from "./components/Card";
import phone_harold from "./img/phone_harold.jpeg";
import computer_harold from "./img/computer_harold.webp";
import approving_harold from "./img/approving_harold.jpeg";
import young_harold from "./img/young_harold.png";

const App = () => (
  <div class="contacts">
    <Card
      img={phone_harold}
      name="Phone Harold"
      phone="(123) 456-7890"
      email="harold@phone.yahoo"
    />
    <Card
      img={computer_harold}
      name="Computer Harold"
      phone="(123) 456-7890"
      email="harold@computer.yahoo"
    />
    <Card
      img={approving_harold}
      name="Yes Harold"
      phone="(123) 456-7890"
      email="harold@approves.yahoo"
    />
    <Card
      img={young_harold}
      name="Young Harold"
      phone="(123) 456-7890"
      email="harold@young.com"
    />
  </div>
)

export default App;
