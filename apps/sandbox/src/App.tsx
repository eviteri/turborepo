import React from "react";
import { AppShell } from "@eviteri/turborepo-ui";

import { Playlist } from "@eviteri/turborepo-playlist";
import { MoviesContent } from "@eviteri/turborepo-movies";

function App() {
  return (
    <AppShell
      title="Movies"
      routes={[
        {
          path: "/",
          element: MoviesContent,
        },
        {
          path: "/playlist",
          element: Playlist,
        },
      ]}
      navLinks={[
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Playlist",
          path: "/playlist",
        },
      ]}
    />
  );
}

export default App;
