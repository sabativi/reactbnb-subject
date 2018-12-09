import React from "react";

const GeolocationHOC = Component => {
  class Geolocation extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        latitude: 151.20699,
        longitude: -33.867487,
        error: null
      };
    }

    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          });
        },
        error => {
          this.setState({ error: error.message });
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }

    render() {
      return <Component {...this.state} {...this.props} />;
    }
  }
  return Geolocation;
};

export default GeolocationHOC;
