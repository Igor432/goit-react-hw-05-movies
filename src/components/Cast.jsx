import { useOutletContext } from 'react-router-dom';

const Cast = () => {
  const actors = useOutletContext();

  const actorsList = actors[0]
    .filter(actor => actor.profile_path !== null)
    .slice(0, 10);

  console.log(actorsList);

  if (actorsList.length === 0) {
    return (
      <div>
        <p>No actors found</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Cast: </h1>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {actorsList.map(actor => (
            <li key={actor.name} style={{ listStyle: 'none' }}>
              <img
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt=""
                width="140"
                height="auto"
              />
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Cast;

/*


*/
