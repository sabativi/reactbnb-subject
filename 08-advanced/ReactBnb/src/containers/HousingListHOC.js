import React from "react";
import housingsFetch from "../api/housings";

const HousingListHOC = Component => {
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
      this.setState({ loading: true, error: false });
      try {
        const json = await housingsFetch();
        this.setState({
          housings: json
        });
      } catch (e) {
        console.log(e);
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    };

    render() {
      return (
        <Component
          hideError={this.hideError}
          refetch={this.refetch}
          {...this.props}
          {...this.state}
        />
      );
    }
  }
  return HousingListContainer;
};

export default HousingListHOC;
