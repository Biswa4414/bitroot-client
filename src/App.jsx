import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/card/Card";
import CardDetails from "./Components/cardDetails/CardDetails";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
      )
      .then((res) => setData(res.data))
      .catch((err) => setError(err));
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container">
      {data.map((item) => (
        <Card key={item.id} data={item} onLearnMore={() => openModal(item)} />
      ))}
      {selectedItem && <CardDetails item={selectedItem} onClose={closeModal} />}
    </div>
  );
}

export default App;
