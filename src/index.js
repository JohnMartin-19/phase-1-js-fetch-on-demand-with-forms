const init = () => {
  const  form = document.querySelector('form')

  form.addEventListener('submit',(event) => {
        event.preventDefault();
        const inp = document.querySelector('input#searchById')
        console.log(inp.value)

        fetch('https://localhost:3000/movies/${input.value}')
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p') 

            title.innerText = data.title;
            summary.innerText = data.summary
        })  
  });
}

document.addEventListener('DOMContentLoaded', init);