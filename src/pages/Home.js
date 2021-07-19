import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { Graph } from "react-d3-graph";
import * as d3 from 'd3';
import data from "../data/data.json"
import Signatures from "./Signatures";
import { Link } from "react-router-dom";


const Home = () => {
    
    const [nodesData, setNodesData] = React.useState(data);

      const myConfig = {
        nodeHighlightBehavior: true,
        node: {
          color: "lightgreen",
          size: 120,
          highlightStrokeColor: "blue",
        },
        link: {
          highlightColor: "lightblue",
        },
      };

    const onClickNode = function(nodeId) {
      window.location.href=`/incidents/${nodeId}`
    }

    const onClickLink = function(source, target) {
        window.alert(`Clicked link between ${source} and ${target}`);
      };



        
        return (
            <div className="home">
                <Navigation />
                <Logo />
                <div >
                  <Graph
                  id="graph-id" // id is mandatory
                  data={data}
                  config={myConfig}
                  onClickNode={onClickNode}
                  onClickLink={onClickLink}
                  style={{ height: '100vh', width: '100vw' }}
                  />
                </div>
            </div>  
        );
      
    };

export default Home;