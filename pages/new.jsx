import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';

const newNote = () => {
    const [form, setForm] = useState({title: '', description: ''});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter()


    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createNote();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])
    
    const createNote = async () => {
      const res = await fetch("http://localhost:3000/api/notes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then(() => {
          toast.success("");
          router.push("/");
        })
        .catch((e) => {
          toast.error("Error creando la nota");
          console.log(e);
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
      let err = {};

      if (!form.title) {
          err.title = 'Title is required';
      }
      if (!form.description) {
          err.description = 'Description is required';
      }

      return err;
  }

  return (
    <div className="w-full max-w-xs">
      
      <div className="flex items-center">
        {isSubmitting ? (
          <div className='pt-10 align-middle'>
            <ToastContainer
            position={toast.POSITION.TOP_RIGHT}
            autoClose={5000}
            
        />
          </div>
        ) : (
          <div className="mx-5">
            <form
              className="bg-gray-700 shadow-md rounded px-20 pt-6 pb-8 m-10"
              onSubmit={handleSubmit}
            >
              <input
              className='w-full mb-2 pl-2'
                required
                type="text"
                name="title"
                placeholder="Titulo"
                onChange={handleChange}
              />
              <div className="my-4">
                <textarea
                className='pl-2'
                  rows="10"
                  cols="50"
                  required
                  name="description"
                  placeholder="Descripción"
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  <i className="text-3xl fa-solid fa-circle-plus"></i>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default newNote