import React from "react";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import CoronaImage from "./images/image.png"

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handlerCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={CoronaImage} className={styles.image} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handlerCountryChange} />
        <Charts data={data} country={country} /> 
      </div>
    );
  }
}

export default App;
