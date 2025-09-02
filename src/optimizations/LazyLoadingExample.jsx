import React, { Suspense, useState } from "react";

const Profile = React.lazy(() => import("../components/Profile"));

function LazyLoadingExample() {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide" : "Show"} Profile
      </button>
      {showProfile && (
        <Suspense fallback={<div>Loading....</div>}>
          <Profile />
        </Suspense>
      )}
    </div>
  );
}

export default LazyLoadingExample;
