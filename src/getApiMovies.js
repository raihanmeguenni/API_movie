import { searchMovies } from "./tmdbApi.js";

export const getApiMovies = async (request, reply) => {
  try {
    console.log("Requête reçue avec le titre :", request.query.title);
    const movies = await searchMovies(request.query.title);
    console.log("Films trouvés :", movies);
    reply.send(movies);
  } catch (error) {
    console.error("Erreur lors de la recherche de films :", error);
    reply.status(500).send({ error: error.message });
  }
};
