import Footer from "../components/footer-componnent";
import Header from "../components/header-componnent";
import LocationsHistoryTable from "../components/locations-history-table-componnent";

const LocationsHistoryPage = () => {
    return (
      <div className="home-page">
        <Header/>
        <LocationsHistoryTable />
        <Footer/>
      </div>
    );
  };
  export default LocationsHistoryPage;