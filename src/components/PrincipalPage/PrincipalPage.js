import "./NavBar.css";
import CustomizedBadges from "./CustomizedBadges";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Product from "../Products/Product";
import { React, useEffect, useState } from "react";

function PrincipalPage() {
  const [Search, setSearch] = useState("");
  const [ToSend, setToSend] = useState("");
  const [items, setItems] = useState([]);
  const paramsToSend = ToSend.trim().replaceAll(" ", "+");
  function Clear() {
    setSearch("");
  }

  function SearchButton() {
    setToSend(Search);
  }

  useEffect(() => {
    const getComments = async () => {
      var axios = require("axios");

      var config = {
        method: "post",
        url: ` https://itunes.apple.com/search?entity=musicVideo\n&term=${paramsToSend}`,
        headers: {},
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setItems(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });

      // console.log(Math.ceil(total/12));
    };

    getComments();
  }, [ToSend]);

  return (
    <div>
      <div className="navbar">
        <div className="navleft">
          <MusicNoteIcon className="gife" />
          <h1 className="Websitename">Itunes</h1>
        </div>

        <div className="searchDiv">
          <div className="input-container">
            <input
              value={Search}
              className="input-field"
              type="text"
              placeholder="Search"
              name="usrnm"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button type="" className="icon" onClick={Clear}>
              <img src="/clear_black_24dp.svg" alt="" />
            </button>
          </div>
        </div>
        <button type="" className="btn btn-primary  " onClick={SearchButton}>
          Search
        </button>
        <Link to="#">
          <CustomizedBadges />
        </Link>
      </div>

      <div className="prdct">
        <Grid container justify="center" spacing={4}>
          {items.map((product) => (
            <Grid className="productgrid" item xs={12} sm={6} md={4} lg={3}>
              <Product
                name={product.trackName}
                price={product.trackPrice}
                img={product.artworkUrl100}
                artist={product.artistName}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default PrincipalPage;
