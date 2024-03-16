# dsa-maze-solver

Link: https://steffengroenandersen.github.io/dsa-maze-solver/

#### Hvilken algoritme du har brugt (også hvis det blot er Depth-First Search med backtracking)
Depth-First-Search

#### Om du har brugt rekursiv eller stack, eller en kombination (for eksempel kan du bruge en rekursiv visiting funktion der gemmer routen i en stack, i så fald, beskriv det sådan)
Jeg har brugt denne metode som en rekursiv funktion, fordi den kalder sig selv (visitCell) inde i sig selv. Det gør at den udforsker nye celler ved at dykke dybere ned i labyrinten indtil den enten når målet eller udtømmer alle muligheder og vender tilbage til tidligere celler for at prøve andre veje.

#### Om du har beregnet ruten i ét hug, eller om den bliver animeret.
Først beregner jeg den. Dernæst animerer jeg den baseret på mit route array.

#### Om du viser backtracking eller smider dem ud, og kun viser den færdige rute.
Viser kun den færdige rute.

