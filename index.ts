// // Define an interface to represent the data returned by the API
interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }
  
  async function fetchTodos():Promise<Todo[]> {
    let data: Todo[] | PromiseLike<Todo[]> ;
    await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => data = json)
      console.log(data)
      return data
  }
  
  async function createTable() {
    const todos = fetchTodos();
  
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
  
    const headerRow = document.createElement('tr');
    const headers = ['Id', 'User Id', 'Title', 'Completed'];
    headers.forEach((header) => {
      const th = document.createElement('th');
      th.innerText = header;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    headerRow.style.backgroundColor = 'white';
    
    let num :number =0;
    (await todos).forEach((todo) => {
      const row = document.createElement('tr');
      if (num % 2 === 0) {
        row.style.backgroundColor = '#f2f2f2';
      }
      else{
        row.style.backgroundColor = 'white';
      }
      num +=1;
      const { userId, id, title, completed } = todo;
      row.innerHTML = `
        <td>${id}</td>
        <td>${userId}</td>
        <td>${title}</td>
        <td>${completed}</td>
      `;
      tbody.appendChild(row);
    });
  
    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
  }
  
  createTable();
  