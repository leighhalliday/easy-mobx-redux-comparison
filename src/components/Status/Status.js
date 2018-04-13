import React, { Fragment } from "react";

export default ({ status, term, images }) => (
  <Fragment>
    {status === "searching" && <h3>Searching for {term}</h3>}
    {status === "done" &&
      images.length === 0 && (
        <h3>
          Sorry sucker, no results{" "}
          <span role="img" aria-label="sad">
            😢
          </span>
        </h3>
      )}
    {status === "error" && <h3>Oops... error!</h3>}
  </Fragment>
);
