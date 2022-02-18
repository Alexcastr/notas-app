
import fetch from 'isomorphic-unfetch';
import Card from '../components/Card';



const Index = ({notes}) => {
 


  

  return (

    <div>
      <div className="mx-auto container py-10 px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {notes.map((note) => {
            return (
              <div key={note._id}>
                <div>
                  <Card
                    linkDelete={`/${note._id}`}
                    linkEdit={`/${note._id}/edit`}
                    title={note.title}
                    description={note.description}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}
  


Index.getInitialProps = async function() {

  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  console.log(data)
  
  return {
    notes: data
  }
}


export default Index;
