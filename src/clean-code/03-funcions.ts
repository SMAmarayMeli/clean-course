(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieCastById( movieId: string ) {
        console.log({ actors });
    }

    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }

    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    function createMovie(Movie movie) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asíncrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'Fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

})();