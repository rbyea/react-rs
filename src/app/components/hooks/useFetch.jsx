import axios from "axios";
import React from "react";
import PropTypes from "prop-types";

export const useFetch = (url) => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchData = async (params = {}) => {
    setIsLoading(true);

    try {
      const response = await axios.get(url, params);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const refetch = (params) => {
    fetchData({ params });
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

useFetch.propTypes = {
  linkUrl: PropTypes.string,
};
