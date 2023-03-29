var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        yield fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => data = json);
        console.log(data);
        return data;
    });
}
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
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
        let num = 0;
        (yield todos).forEach((todo) => {
            const row = document.createElement('tr');
            if (num % 2 === 0) {
                row.style.backgroundColor = '#f2f2f2';
            }
            else {
                row.style.backgroundColor = 'white';
            }
            num += 1;
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
    });
}
createTable();
//# sourceMappingURL=index.js.map