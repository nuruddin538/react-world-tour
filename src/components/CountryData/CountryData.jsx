const CountryData = ({ country, handleVisitedCountr, handleVisitedFlags }) => {
  console.log(
    'inside country data',
    country,
    handleVisitedCountr,
    handleVisitedFlags
  );
  return (
    <div>
      <p>
        <small>Country Data: </small>
      </p>
    </div>
  );
};

export default CountryData;
