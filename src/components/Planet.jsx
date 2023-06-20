export default function Planet ({id, name, diameter}){
    return(
        <div className="card">
        <p>{id}.</p><h2>{name}</h2><p>{diameter} km</p>
        </div>
    );
}