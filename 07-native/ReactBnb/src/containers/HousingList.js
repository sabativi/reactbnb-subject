import React from "react";
import housingsFetch from "../api/housings";
import HousingList from "../components/HousingList";

class HousingListContainer extends React.Component {
  state = {
    housings: [],
    loading: true,
    error: false
  };

  async componentDidMount() {
    await this.refetch();
  }

  hideError = () => {
    this.setState({ error: false });
  };

  refetch = async () => {
    this.setState({ loading: true });
    try {
      const json = await housingsFetch();
      this.setState({
        housings: json
      });
    } catch (e) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <HousingList
        hideError={this.hideError}
        refetch={this.refetch}
        {...this.props}
        {...this.state}
      />
    );
  }
}

export default HousingListContainer;
