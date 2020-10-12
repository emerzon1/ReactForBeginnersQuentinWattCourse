import React from "react";
import Loader from "react-loader-spinner";
function Loaders() {
    return (
        <center>
            <Loader
                type="Hearts"
                color="#ff6ec7"
                height={300}
                width={300}
                timeout={4000}
            />
        </center>
    );
}
export default Loaders;
