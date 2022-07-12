import React from "react";
import { Box, Title, Grid } from "@mantine/core";

import { useStore } from "@eviteri/turborepo-store";
import { MovieCard } from "@eviteri/turborepo-card";

export const Playlist = () => {
  const { movies } = useStore();
  return (
    <>
      <Box>
        <Title>Viewing List</Title>
      </Box>
      <Grid
        mt={20}
        sx={{
          gap: "1rem",
        }}
      >
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.title} />
        ))}
      </Grid>
    </>
  );
};
