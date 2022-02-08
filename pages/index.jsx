import { Dialog } from "@material-ui/core";
import fetch from 'isomorphic-unfetch';
import Card from '../components/Card';
import { useState } from "react";

const Index = ({notes}) => {
  const [edit, setEdit] = useState(false)
  const [anotado, setAnotado] = useState("")
  return (
    <div>
      <h1>Notes</h1>
      <div className="mx-auto container py-20 px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {notes.map((note) => {
            return (
              <div key={note._id}>
                <div>
                  <Card
                    onClick={() => setEdit(!edit)}
                    title={note.title}
                    description={note.description}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Dialog 
      open={edit}
      onClose={() => {
        setEdit(false);
      }}>
        <div className="py-4 px-8 flex flex-col">
          <h1 className="text-3xl font-extrabold text-center mx-16 m-6">
            Editar nota
          </h1>
          <textarea
            value={""}
            onChange={(e) => {
              setAnotado(e.target.value);
            }}
            className="p-3 border-2 border-black rounded-md"
            placeholder="Ingresa tu apunte..."
            cols="30"
            rows="10"
          ></textarea>
          <div className="flex w-full justify-around mt-3">
            <button type="submit" className="text-4xl">
              <i className="bi bi-check-circle-fill duration-200 hover:text-green-500 text-green-600"></i>
            </button>
            <button className="text-4xl">
              <i className="bi bi-x-circle-fill duration-200 hover:text-red-400 text-red-600"></i>
            </button>
          </div>
        </div>
      </Dialog>
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